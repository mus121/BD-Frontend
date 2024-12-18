import { extractProfilePicture } from '@/utils/extractProfilePicture';
import { toCamelCase } from '@/utils/camelcase';
import { Profile, SuggestionProfiles, MutualConnectionResponse } from '@/types/ProfileList';
import { Key } from 'react';
import ConnectionProfileCard from '../../../LiMutualAndGlobalConnection/index';

export const renderProfileCard = (
  profile: Profile,
  index: React.Key | null | undefined,
  followprofile: string[],
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const { firstName, lastName, headline, profilePicture } = profile;

  // Ensure the properties are always strings (default to empty strings if undefined)
  const publicIdentifier = profile.publicIdentifier ?? ''; // default to '' if undefined
  const entityUrn = profile.entityUrn ?? ''; // default to '' if undefined
  const firstNameSafe = firstName ?? ''; // default to '' if undefined
  const lastNameSafe = lastName ?? ''; // default to '' if undefined
  const headlineSafe = headline ?? ''; // default to '' if undefined
  const profilePic = profilePicture ?? '';

  return (
    <div key={index}>
      <ConnectionProfileCard
        profile={{
          firstName: firstNameSafe,
          lastName: lastNameSafe,
          headline: headlineSafe,
          profilePicture: profilePic,
          publicIdentifier,
          entityUrn,
        }}
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
      (connection: { connectedMemberResolutionResult: { firstName: any; lastName: any } }) =>
        connection?.connectedMemberResolutionResult?.firstName ||
        connection?.connectedMemberResolutionResult?.lastName,
    )
    .map((connection: { connectedMemberResolutionResult: any }, index: Key | null | undefined) => {
      const profileData = connection.connectedMemberResolutionResult;

      // Ensure safe fallback for vectorImage data
      const rootUrl =
        profileData?.profilePicture?.displayImageReference?.vectorImage?.rootUrl || '';
      const artifacts =
        profileData?.profilePicture?.displayImageReference?.vectorImage?.artifacts || [];
      const fileSegment = artifacts[2]?.fileIdentifyingUrlPathSegment || '';

      const profilePicture = rootUrl + fileSegment;

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
