export type MutualConnectionResponse = {
  response?: any;
  elements?: {
    connectedMemberResolutionResult?: {
      firstName?: string;
      lastName?: string;
      headline?: string;
      publicIdentifier?: string;
      entityUrn?: string;
      profilePicture?: {
        displayImageReference?: {
          vectorImage?: {
            rootUrl?: string;
            artifacts?: { fileIdentifyingUrlPathSegment?: string }[];
          };
        };
      };
    };
  }[];
};
