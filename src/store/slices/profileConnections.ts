import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConnections } from '@/types/TConnections';

const initialState: TConnections = {
  elements: [],
  response: undefined,
};

const connectionProfileSlice = createSlice({
  name: 'connectionProfile',
  initialState,
  reducers: {
    setConnectionProfile(state, action: PayloadAction<TConnections>) {
      state.elements = action.payload.elements;
    },
    resetConnectionProfile() {
      return initialState;
    },
  },
});

export const { setConnectionProfile, resetConnectionProfile } = connectionProfileSlice.actions;
export default connectionProfileSlice.reducer;
