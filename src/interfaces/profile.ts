import { GlobalProfiles } from './search';
import { FilterMutualApiResponse } from './connection';

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

export type Profile = {
  id: number;
  firstName: string;
  lastName?: string;
  headline: string;
  profilePicture: string | undefined | null;
  entityUrn: string | undefined;
  publicIdentifier: string | undefined | null;
};

export type ProfileProps = {
  profile: Profile;
  followProfile: string[];
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>;
};

export type ProfilesListProps = {
  globalProfiles: GlobalProfiles | null;
  mutualConnections: FilterMutualApiResponse;
  followProfile: string[];
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>;
};

export type LocationResponse = {
  response: string;
};
