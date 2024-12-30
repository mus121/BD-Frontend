export type Profile = {
  subtitle: any;
  title: string;
  image: string;
  id?: string;
};

export type ProfileItemProps = {
  profile: Profile;
  onClick: (profile: Profile) => void;
};

export type DropdownProps = {
  searchQuery: string;
  setSearchProfile: (profile: Profile) => void;
};

export type ProfileSearchResponse = {
  response: any;
};
