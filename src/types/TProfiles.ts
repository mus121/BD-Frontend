export type Profile = {
  id: number;
  firstName: string;
  lastName?: string;
  headline: string;
  profilePicture: string | undefined | null;
  entityUrn: string | undefined;
  publicIdentifier: string | undefined | null;
};
