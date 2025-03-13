export type TMiniProfile = {
  response: any;
  miniProfile: {
    backgroundImage: {
      [key: string]: { artifacts: string[]; rootUrl: string | null };
    };
    entityUrn: string | null;
    firstName: string | null;
    lastName: string | null;
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
  };
};
