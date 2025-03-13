import { GlobalProfiles } from './globalProfile';
import { FilterMutualApiResponse } from './connection';

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
