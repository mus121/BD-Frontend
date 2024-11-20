export type TConnections = {
  response: any;
  elements: {
    recipeType: string | null;
    connectedMember: string | null;
    connectedMemberResolutionResult: {
      recipeType: string | null;
      entityUrn: string | null;
      firstName: string | null;
      headline: string | null;
      lastName: string | null;
      memorialized: string | null;
      profilePicture: {
        recipeType: string | null;
        a11yText: string | null;
        displayImageReference: {
          vectorImage: {
            recipeType: string | null;
            artifacts: {
              recipeType: string | null;
              expiresAt: number;
              fileIdentifyingUrlPathSegment: string | null;
              width: number;
              height: number;
            }[];
            rootUrl: string | null;
          };
          displayImageUrn: string | null;
        };
      };
      publicIdentifier: string | null;
    };
    createdAt: string | null;
    entityUrn: string | null;
  }[];
};
