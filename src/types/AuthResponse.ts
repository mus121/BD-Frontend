export type AuthResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
};
