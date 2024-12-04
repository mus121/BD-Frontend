export type Profile = {
  firstName: string;
  lastName: string;
  headline: string;
  profilePicture: string;
  publicIdentifier: string;
  entityUrn: string;
};

export type ProfileProps = {
  profile: Profile;
  followprofile: string[];
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>;
};
