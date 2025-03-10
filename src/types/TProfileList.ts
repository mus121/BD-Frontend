import { GlobalProfiles } from './TGlobalProfiles';
import { FilterMutualApiResponse } from './TMutualConnections';

export type ProfilesListProps = {
  globalProfiles: GlobalProfiles | null;
  mutualConnections: FilterMutualApiResponse;
  followProfile: string[];
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>;
};
