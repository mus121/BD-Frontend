import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TMiniProfile = {
  miniProfile: {
    anti_abuse_metadata: {
      anti_abuse_uuid: string | null;
    };
    backgroundImage: {
      [key: string]: { artifacts: string[]; rootUrl: string | null };
    };
    dashEntityUrn: string | null;
    entityUrn: string | null;
    firstName: string | null;
    lastName: string | null;
    memorialized: boolean;
    objectUrn: string | null;
    occupation: string | null;
    picture: {
      'com.linkedin.common.VectorImage': {
        artifacts: {
          expiresAt: number;
          fileIdentifyingUrlPathSegment: string;
          width: number;
          height: number;
        }[];
        rootUrl: string | null;
      };
    };
    publicIdentifier: string | null;
    trackingId: string | null;
  };
  plainId: string | null;
  premiumSubscriber: boolean;
};

const initialState: TMiniProfile = {
  miniProfile: {
    anti_abuse_metadata: {
      anti_abuse_uuid: null,
    },
    backgroundImage: {
      key: {
        artifacts: [],
        rootUrl: null,
      },
    },
    dashEntityUrn: null,
    entityUrn: null,
    firstName: null,
    lastName: null,
    memorialized: false,
    objectUrn: null,
    occupation: null,
    picture: {
      'com.linkedin.common.VectorImage': {
        artifacts: [],
        rootUrl: null,
      },
    },
    publicIdentifier: null,
    trackingId: null,
  },
  plainId: null,
  premiumSubscriber: false,
};

const miniProfileSlice = createSlice({
  name: 'miniProfile',
  initialState,
  reducers: {
    setMiniProfile(state, action: PayloadAction<TMiniProfile>) {
      // eslint-disable-next-line prefer-destructuring
      const payload: TMiniProfile = action.payload;
      return {
        plainId: payload.plainId,
        premiumSubscriber: payload.premiumSubscriber,
        miniProfile: {
          anti_abuse_metadata: {
            anti_abuse_uuid: payload.miniProfile?.anti_abuse_metadata?.anti_abuse_uuid ?? null,
          },
          backgroundImage: {
            key: {
              artifacts: payload.miniProfile?.backgroundImage?.key?.artifacts ?? [],
              rootUrl: payload.miniProfile?.backgroundImage?.key?.rootUrl ?? null,
            },
          },
          dashEntityUrn: payload.miniProfile?.dashEntityUrn ?? null,
          entityUrn: payload.miniProfile?.entityUrn ?? null,
          firstName: payload.miniProfile?.firstName ?? null,
          lastName: payload.miniProfile?.lastName ?? null,
          memorialized: payload.miniProfile?.memorialized ?? false,
          objectUrn: payload.miniProfile?.objectUrn ?? null,
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
          trackingId: payload.miniProfile?.trackingId ?? null,
        },
      };
    },
    resetMiniProfile() {
      return initialState;
    },
  },
});

export const { setMiniProfile, resetMiniProfile } = miniProfileSlice.actions;
export default miniProfileSlice.reducer;
