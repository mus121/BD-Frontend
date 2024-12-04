export type Profile = {
  id?: string;
  entityLockupView?: {
    title?: {
      text?: string;
    };
    subtitle?: {
      text?: string;
    };
    image?: {
      attributes: Array<{
        detailData: {
          nonEntityProfilePicture: {
            vectorImage: {
              artifacts: Array<{
                fileIdentifyingUrlPathSegment: string;
              }>;
            };
          };
        };
      }>;
    };
  };
};

export type ProfileItemProps = {
  profile: Profile;
  onClick: (profile: Profile) => void;
};

export type DropdownProps = {
  searchQuery: string;
  setSearchProfile: (profile: Profile) => void;
};
