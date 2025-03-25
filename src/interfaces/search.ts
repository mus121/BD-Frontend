import { Dispatch, SetStateAction } from 'react';
import { Profile } from './profile';

export type SearchBarProps = {
  setShowBackButton: boolean;
  placeholder?: string;
  onSearch: (query: string) => void;
  setProfiles: Dispatch<SetStateAction<DropDownProfiles[] | Profile[] | null>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setcurrentPage: Dispatch<SetStateAction<number>>;
  setIsSearchActive: Dispatch<SetStateAction<any>>;
};

export type SearchBarV2Props = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

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
  setShowBackButton: Boolean;
};

export type ProfileSearchResponse = {
  response: any;
};
export type DropDownProfilesState = {
  profiles: GlobalProfiles | null;
  isFollowedFilterEnabled: boolean;
};
export type GlobalProfiles = {
  error: any;
  publicIdentifier: string;
  subtitle: string | undefined;
  title: string | undefined;
  image: string | undefined;
  response: any;
  navigationUrl: string;
  imageUrl?: string;
  name?: string;
  headline?: string;
  public_Identifier?: string;
  entityUrn?: string;
  profilePicture?: string | undefined;
};
