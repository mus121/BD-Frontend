import { Dispatch, SetStateAction } from 'react';
import { Profile } from './profile';
import { DropDownProfiles } from './dropDown';

export type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
  setProfiles: Dispatch<SetStateAction<DropDownProfiles[] | Profile[] | null>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setcurrentPage: Dispatch<SetStateAction<number>>;
  setIsSearchActive: Dispatch<SetStateAction<any>>;
};
