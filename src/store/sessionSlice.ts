import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SessionState = {
  email: string | null;
  name: string | null;
};

const initialState: SessionState = {
  email: null,
  name: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<{ email: string; name: string }>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    clearSession: state => {
      state.email = null;
      state.name = null;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
