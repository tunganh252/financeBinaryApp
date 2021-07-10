import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetSystemConfig } from 'stores/actions/system'

import SystemServices from './service'

export const useGetSystemConfig = () => {
  const state = useSelector((state) => state?.system?.config)
  const dispatcher = useDispatch()
  const get = async (data) => {
    return await SystemServices.GET_SYSTEM_CONFIG(data)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetSystemConfig(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}
