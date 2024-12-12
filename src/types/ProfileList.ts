export type Profile = {
  firstName: string;
  lastName: string;
  headline: string;
  profilePicture: string;
  entityUrn?: string;
  publicIdentifier?: string;
};

export type ProfilesListProps = {
  globalProfiles: SuggestionProfiles | null;
  mutualConnections: MutualConnectionResponse | null;
  followprofile: string[];
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>;
};

export type SuggestionProfiles = {
  data: any;
  suggestionType?: boolean;
  entityLockupView?: {
    title?: { text: string };
    subtitle?: { text: string };
    image?: {
      attributes: Array<{
        detailData?: {
          nonEntityProfilePicture?: {
            vectorImage?: {
              artifacts: Array<{ fileIdentifyingUrlPathSegment: string }>;
            };
          };
        };
      }>;
    };
  };
  response?: {
    data: {
      searchDashTypeaheadByGlobalTypeahead: {
        elements: Array<{
          entityLockupView: {
            title?: { text: string };
            subtitle?: { text: string };
            image?: {
              attributes: Array<{
                detailData?: {
                  nonEntityProfilePicture?: {
                    vectorImage?: {
                      artifacts: Array<{ fileIdentifyingUrlPathSegment: string }>;
                    };
                  };
                };
              }>;
            };
          };
        }>;
      };
    };
  };
};

export type MutualConnectionResponse = {
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
