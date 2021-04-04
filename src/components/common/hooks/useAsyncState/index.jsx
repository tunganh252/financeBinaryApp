import { useState, useCallback, useEffect } from "react";

export const useAsync = (
  asyncFunction,
  { delay = 0, minTimeExec = 0 } = {}
) => {
  const [state, setState] = useState({
    status: "ready", // "ready" || "loading" || "error"
    value: null,
    error: null,
    execState: {
      pendingAction: null,
      pendingTime: 0,
      timeState: {
        lastStart: null,
        lastSuccess: null,
        lastError: null,
      },
    },
  });

  const onSuccess = (response) => {
    setState((prevState) => ({
      ...prevState,
      status: "ready",
      value: response,
      execState: {
        ...prevState.execState,
        pendingAction: null,
        pendingTime: null,
        timeState: {
          ...prevState.execState.timeState,
          lastSuccess: Date.now(),
        },
      },
    }));

    return response;
  };

  const onError = (error) => {
    setState((prevState) => ({
      ...prevState,
      status: "error",
      error: error,
      execState: {
        ...prevState.execState,
        pendingAction: null,
        pendingTime: null,
        timeState: {
          ...prevState.execState.timeState,
          lastError: Date.now(),
        },
      },
    }));

    return error;
  };

  const execute = useCallback(
    async (...args) => {
      const startTime = Date.now();

      setState((prevState) => ({
        ...prevState,
        status: "loading",
        value: null,
        error: null,
        execState: {
          ...prevState.execState,
          pendingAction: null,
          pendingTime: null,
          timeState: {
            ...prevState.execState.timeState,
            lastStart: startTime,
          },
        },
      }));

      return await asyncFunction(...args)
        .then((response) => {
          if (delay > 0) {
            return setState((prevState) => ({
              ...prevState,
              execState: {
                ...prevState.execState,
                pendingTime: delay,
                pendingAction: () => {
                  onSuccess(response);
                },
              },
            }));
          }

          if (minTimeExec > 0) {
            const durationTime = (Date.now() - startTime) / 1000;
            const mustPending = durationTime < minTimeExec;

            if (mustPending) {
              return setState((prevState) => ({
                ...prevState,
                execState: {
                  ...prevState.execState,
                  pendingTime: minTimeExec - durationTime,
                  pendingAction: () => {
                    onSuccess(response);
                  },
                },
              }));
            }
          }

          return onSuccess(response);
        })
        .catch((error) => {
          return onError(error);
        });
    },
    [asyncFunction, delay, minTimeExec]
  );

  useEffect(() => {
    let timeOutAction;
    let pendingAction = state?.execState?.pendingAction;

    if (pendingAction) {
      timeOutAction = setTimeout(() => {
        pendingAction();
      }, state.execState.pendingTime);
    }

    return () => {
      if (timeOutAction) clearTimeout(timeOutAction);
    };
  }, [state.execState.pendingAction]);

  return { execute, ...state };
};
