import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Initial State
type AiProfilesState = {
  isFirstProfileLoading: boolean;
  setProfiles: any;
};

const initialState: AiProfilesState = {
  isFirstProfileLoading: true,
  setProfiles: [],
};

// Create the slice
export const aiFindSuggestProfiles = createSlice({
  name: 'aiFindSuggestProfiles',
  initialState,
  reducers: {
    setIsProfileLoading(state, action: PayloadAction<boolean>) {
      state.isFirstProfileLoading = action.payload;
    },
    setProfiles(state, action: PayloadAction<boolean>) {
      state.setProfiles = action.payload;
    },
  },
});

export const { setIsProfileLoading, setProfiles } = aiFindSuggestProfiles.actions;

export default aiFindSuggestProfiles.reducer;
