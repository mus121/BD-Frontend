import { Dispatch, SetStateAction } from 'react';
import { Profile } from './profile';

export type DropDownProfiles = {
  publicIdentifier: string;
  entityUrn: string;
  subtitle: string;
  title: string;
  image: string;
  id: number;
};

export type ProfileItemProps = {
  profile: DropDownProfiles;
  onClick: (profile: DropDownProfiles) => void;
};

export type DropdownProps = {
  searchQuery: string;
  setSearchProfile: Dispatch<SetStateAction<DropDownProfiles[] | Profile[] | null>>;
};

export type ProfileSearchResponse = {
  response: any;
};
