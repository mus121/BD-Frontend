import { Profile } from './TProfiles';

export type ProfileProps = {
  profile: Profile;
  followProfile: string[];
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>;
};
