import { createSlice } from '@reduxjs/toolkit';

// Define the Initial State
type FollowedProfileState = {
  profiles: string[];
};

const initialState: FollowedProfileState = {
  profiles: [],
};

// Create the slice
export const followedProfilesSlice = createSlice({
  name: 'followedProfiles',
  initialState,
  reducers: {
    setProfiles: (state, action) => {
      state.profiles = action.payload;
    },
    clearProfiles: state => {
      state.profiles = [];
    },
  },
});

export const { setProfiles, clearProfiles } = followedProfilesSlice.actions;

export default followedProfilesSlice.reducer;
