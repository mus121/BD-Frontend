import React from 'react';
import styles from './styles.module.scss';
import ConnectionProfileCard from '../../ConnectionProfileCard/index';

type Profile = {
  firstName: string;
  lastName: string;
  headline: string;
  profilePicture: string;
  entityUrn?: string;
  publicIdentifier?: string;
};

type ProfilesListProps = {
  profiles: any;
  mutualConnections: any;
  followprofile: string[];
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>;
};

const ProfilesList = ({
  profiles,
  mutualConnections,
  followprofile,
  setFollowprofile,
}: ProfilesListProps) => {
  const renderProfileCard = (profile: Profile, index: React.Key | null | undefined) => (
    <div
      className={styles.Connectioncolumn}
      key={index}
    >
      <ConnectionProfileCard
        profile={profile}
        followprofile={followprofile}
        setFollowprofile={setFollowprofile}
      />
    </div>
  );

  if (profiles !== null) {
    if (profiles?.suggestionType) {
      const lockup = profiles?.entityLockupView;
      const profilePictureDetails = lockup?.image?.attributes[0]?.detailData;
      const profilePicture =
        profilePictureDetails?.nonEntityProfilePicture?.vectorImage?.artifacts[0]
          ?.fileIdentifyingUrlPathSegment || '';
      const title = lockup?.title?.text || '';
      const [firstName, lastName] = title.split(' ') || ['', ''];
      const headline = lockup?.subtitle?.text || '';
      return renderProfileCard({ firstName, lastName, headline, profilePicture }, 0);
    }
    return profiles?.response?.data?.searchDashTypeaheadByGlobalTypeahead?.elements?.map(
      (element: any, index: React.Key | null | undefined) => {
        const lockup = element?.entityLockupView;
        const profilePictureDetails = lockup?.image?.attributes[0]?.detailData;
        const profilePicture =
          profilePictureDetails?.nonEntityProfilePicture?.vectorImage?.artifacts[0]
            ?.fileIdentifyingUrlPathSegment || '';
        const title = lockup?.title?.text || '';
        const [firstName, lastName] = title.split(' ') || ['', ''];
        const headline = lockup?.subtitle?.text || '';

        return renderProfileCard({ firstName, lastName, headline, profilePicture }, index);
      },
    );
  }

  return mutualConnections?.response.elements?.map(
    (
      connection: {
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
                artifacts: { fileIdentifyingUrlPathSegment: string }[];
              };
            };
          };
        };
      },
      index: React.Key | null | undefined,
    ) => {
      const profileData = connection.connectedMemberResolutionResult;
      const profilePicture =
        // eslint-disable-next-line no-unsafe-optional-chaining
        profileData?.profilePicture?.displayImageReference?.vectorImage?.rootUrl +
          // eslint-disable-next-line no-unsafe-optional-chaining
          profileData?.profilePicture?.displayImageReference?.vectorImage?.artifacts[2]
            ?.fileIdentifyingUrlPathSegment || '';

      return renderProfileCard(
        {
          entityUrn: profileData?.entityUrn,
          publicIdentifier: profileData?.publicIdentifier,
          firstName: profileData?.firstName,
          lastName: profileData?.lastName,
          headline: profileData?.headline,
          profilePicture,
        },
        index,
      );
    },
  );
};

export default ProfilesList;
