export type ICurrentUser = {
  email: string;
  name: string | null;
  id: number;
  isBlocked: boolean;
  isOnboarded: boolean;
  isEmailVerified: boolean;
  providerId: string;
};
