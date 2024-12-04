import ConnectionProfileCard from '@/component/ConnectionProfileCard';
import { extractProfilePicture } from '@/utils/extractProfilePicture';
import { toCamelCase } from '@/utils/camelcase';
import { Profile, SuggestionProfiles, MutualConnectionResponse } from '@/types/ProfileList';

export const renderProfileCard = (
  profile: Profile,
  index: React.Key | null | undefined,
  followprofile: string[],
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const { firstName, lastName, headline, profilePicture } = profile;
  const publicIdentifier = profile.publicIdentifier || '';
  const entityUrn = profile.entityUrn || '';

  return (
    <div key={index}>
      <ConnectionProfileCard
        profile={{ firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn }}
        followprofile={followprofile}
        setFollowprofile={setFollowprofile}
      />
    </div>
  );
};

export const renderSuggestionProfiles = (
  profiles: SuggestionProfiles | null,
  followprofile: string[],
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (!profiles) return null;

  if (profiles?.suggestionType && profiles?.entityLockupView) {
    const lockup = profiles.entityLockupView;
    const profilePicture = extractProfilePicture(lockup?.image);
    const title = lockup?.title?.text || '';
    const camelCaseName = toCamelCase(title);
    const [firstName, lastName] = camelCaseName.split(/(?=[A-Z])/);
    const headline = lockup?.subtitle?.text || '';

    return renderProfileCard(
      { firstName, lastName, headline, profilePicture },
      0,
      followprofile,
      setFollowprofile,
    );
  }

  return profiles?.response?.data?.searchDashTypeaheadByGlobalTypeahead?.elements?.map(
    (element, index) => {
      const lockup = element?.entityLockupView;
      const profilePicture = extractProfilePicture(lockup?.image);
      const title = lockup?.title?.text || '';
      const camelCaseName = toCamelCase(title);
      const [firstName, lastName] = camelCaseName.split(/(?=[A-Z])/);
      const headline = lockup?.subtitle?.text || '';

      return renderProfileCard(
        { firstName, lastName, headline, profilePicture },
        index,
        followprofile,
        setFollowprofile,
      );
    },
  );
};

export const renderMutualConnections = (
  mutualConnections: MutualConnectionResponse | null,
  followprofile: string[],
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (!mutualConnections) return null;

  return mutualConnections.response.elements
    .filter(
      connection =>
        connection?.connectedMemberResolutionResult?.firstName ||
        connection?.connectedMemberResolutionResult?.lastName,
    )
    .map((connection, index) => {
      const profileData = connection.connectedMemberResolutionResult;
      const profilePicture =
        profileData?.profilePicture?.displayImageReference?.vectorImage?.rootUrl +
        profileData?.profilePicture?.displayImageReference?.vectorImage?.artifacts?.[2]
          ?.fileIdentifyingUrlPathSegment;

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
        followprofile,
        setFollowprofile,
      );
    });
};
