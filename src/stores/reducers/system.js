import { createSlice } from '@reduxjs/toolkit'
import * as systemActions from '../actions/system'

export default createSlice({
  name: 'system',
  /**
   * @type {SystemReducerType}
   */
  initialState: {
    config: {},
  },
  reducers: {},
  extraReducers: {
    [systemActions.actionGetSystemConfig]: (state, action) => {
      if (!action || !action.payload) return

      return {
        ...state,
        config: action.payload,
      }
    },
  },
})
