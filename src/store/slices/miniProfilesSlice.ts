import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMiniProfile } from '@/types/TMiniprofile';

const initialState: TMiniProfile = {
  miniProfile: {
    backgroundImage: {
      key: {
        artifacts: [],
        rootUrl: null,
      },
    },
    entityUrn: null,
    firstName: null,
    lastName: null,
    occupation: null,
    picture: {
      'com.linkedin.common.VectorImage': {
        artifacts: [],
        rootUrl: null,
      },
    },
    publicIdentifier: null,
  },
  response: undefined,
};

const miniProfileSlice = createSlice({
  name: 'miniProfile',
  initialState,
  reducers: {
    setMiniProfile(state, { payload }: PayloadAction<TMiniProfile>) {
      return {
        miniProfile: {
          backgroundImage: {
            key: {
              artifacts: payload.miniProfile?.backgroundImage?.key?.artifacts ?? [],
              rootUrl: payload.miniProfile?.backgroundImage?.key?.rootUrl ?? null,
            },
          },
          entityUrn: payload.miniProfile?.entityUrn ?? null,
          firstName: payload.miniProfile?.firstName ?? null,
          lastName: payload.miniProfile?.lastName ?? null,
          occupation: payload.miniProfile?.occupation ?? null,
          picture: {
            'com.linkedin.common.VectorImage': {
              artifacts:
                payload.miniProfile?.picture?.['com.linkedin.common.VectorImage']?.artifacts ?? [],
              rootUrl:
                payload.miniProfile?.picture?.['com.linkedin.common.VectorImage']?.rootUrl ?? null,
            },
          },
          publicIdentifier: payload.miniProfile?.publicIdentifier ?? null,
        },
        response: payload.response ?? undefined,
      };
    },
    resetMiniProfile() {
      return initialState;
    },
  },
});

export const { setMiniProfile, resetMiniProfile } = miniProfileSlice.actions;
export default miniProfileSlice.reducer;
