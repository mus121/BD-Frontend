export type LocationResponse = {
  data?: any;
  identityDashProfilesByMemberIdentity: {
    elements: Array<{
      geoLocation: {
        geo: {
          defaultLocalizedName: string;
        };
      };
    }>;
  };
};
