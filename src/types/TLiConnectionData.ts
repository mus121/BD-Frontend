import { GlobalProfiles } from './TGlobalProfiles';

export type LiConnectionDataProps = {
  globalProfiles: GlobalProfiles;
  setGlobalProfiles: React.Dispatch<React.SetStateAction<any>>;
  isSearchActive: boolean;
  searchQuery: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
