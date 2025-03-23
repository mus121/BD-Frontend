import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type stepState = {
  isDisabledNextButton: boolean;
  currentStep: number;
};

const initialState: stepState = {
  isDisabledNextButton: true,
  currentStep: 0,
};

export const stepComponents = createSlice({
  name: 'stepComponent',
  initialState,
  reducers: {
    setIsDisabledButton(state, action: PayloadAction<boolean>) {
      state.isDisabledNextButton = action.payload;
    },
    incrementCurrentStep(state) {
      state.currentStep += 1;
    },
    decrementCurrentStep(state) {
      state.currentStep -= 1;
    },
  },
});

export const { setIsDisabledButton, incrementCurrentStep, decrementCurrentStep } =
  stepComponents.actions;

export default stepComponents.reducer;
