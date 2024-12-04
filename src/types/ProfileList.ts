export type Profile = {
  firstName: string;
  lastName: string;
  headline: string;
  profilePicture: string;
  entityUrn?: string;
  publicIdentifier?: string;
};

export type ProfilesListProps = {
  profiles: SuggestionProfiles | null;
  mutualConnections: MutualConnectionResponse | null;
  followprofile: string[];
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>;
};

export type SuggestionProfiles = {
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
  response: {
    elements: Array<{
      connectedMemberResolutionResult: {
        entityUrn: string;
        publicIdentifier: string;
        firstName: string;
        lastName: string;
        headline: string;
        profilePicture: {
          displayImageReference: {
            vectorImage: {
              rootUrl: string;
              artifacts: Array<{ fileIdentifyingUrlPathSegment: string }>;
            };
          };
        };
      };
    }>;
  };
};
