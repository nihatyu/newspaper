/* Core */
import { createAsyncThunk } from '@reduxjs/toolkit';

/* Instruments */
// Assume that ReduxState and ReduxDispatch are imported from './store'

/**
 * A utility function to create a typed Async Thunk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withExtraArgument({
  state: /* Provide your ReduxState here */
  dispatch: /* Provide your ReduxDispatch here */
  rejectValue: /* Provide your rejectValue here */
});
