import { GlobalProfiles } from './TGlobalProfiles';
import { MutualConnectionResponse } from './TMutualConnections';

export type ProfilesListProps = {
  globalProfiles: GlobalProfiles | null;
  mutualConnections: MutualConnectionResponse;
  followProfile: string[];
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>;
};
