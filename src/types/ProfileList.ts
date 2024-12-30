export type Profile = {
  firstName?: string;
  lastName?: string;
  headline?: string;
  profilePicture?: string;
  entityUrn?: string;
  publicIdentifier?: string;
};

export type GlobalProfiles = {
  response: any;
  navigationUrl: string;
  imageUrl?: string;
  name?: string;
  headline?: string;
  public_Identifier?: string;
  entityUrn?: string;
};
export type ProfilesListProps = {
  globalProfiles: GlobalProfiles | null;
  mutualConnections: MutualConnectionResponse;
  followprofile: string[];
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>;
};

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
