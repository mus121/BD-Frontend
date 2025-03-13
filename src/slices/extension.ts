import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TExtensionView = {
  isExtensionInstalled: boolean;
};
export type TAppSlice = {
  extension: TExtensionView;
};
const initialState: TAppSlice = {
  extension: {
    isExtensionInstalled: false,
  },
};

export const appSlice = createSlice({
  initialState,
  name: 'App',
  reducers: {
    setIsExtensionInstalled: (state, action: PayloadAction<boolean>) => {
      state.extension.isExtensionInstalled = action.payload;
    },
  },
});

export const { setIsExtensionInstalled } = appSlice.actions;

export default appSlice.reducer;
