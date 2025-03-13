import { GlobalProfiles } from './globalProfile';

export type FilterMutualApiResponse = {
  completeImageUrl: string;
  entityUrn: string;
  firstName: string;
  headLine: string;
  lastName: string;
  publicIdentifier: string;
}[];

export type MutualConnectionResponse = {
  completeImageUrl: string;
  entityUrn: string;
  firstName: string;
  headLine: string;
  lastName: string;
  publicIdentifier: string;
}[];

export type ConnectionCount = {
  response?: number;
};

export type MessageResponse<T> = {
  response?: T;
};

export type LiConnectionDataProps = {
  globalProfiles: GlobalProfiles;
  setGlobalProfiles: React.Dispatch<React.SetStateAction<any>>;
  isSearchActive: boolean;
  searchQuery: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
