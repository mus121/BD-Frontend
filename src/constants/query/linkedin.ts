export const LI_QUERY_KEYS = {
  getLiMutualConnections: (currentPage: number) => ['getMutualConnections', currentPage],
  getLiUserLocation: (publicIdentifier: string) => ['getLiUserLocation', publicIdentifier],
  getLiTotalConnections: ['totalConnections'],
};
