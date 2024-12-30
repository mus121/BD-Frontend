import ConnectionProfileCard from '@/component/LiMutualAndGlobalConnection';
import { Profile, MutualConnectionResponse, GlobalProfiles } from '@/types/ProfileList';

export const renderProfileCard = (
  profile: Profile,
  index: React.Key | null | undefined,
  followprofile: string[],
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const { firstName, lastName, headline, profilePicture } = profile;
  const publicIdentifier = profile.publicIdentifier ?? '';
  const entityUrn = profile.entityUrn ?? '';
  const firstNameSafe = firstName ?? '';
  const lastNameSafe = lastName ?? '';
  const headlineSafe = headline ?? '';
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

export const renderGlobalProfiles = (
  profiles: GlobalProfiles[],
  followprofile: string[],
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (!Array.isArray(profiles)) {
    return null;
  }

  const isValidUrl = (url: string) => /^https?:\/\//.test(url);

  return profiles.map((profile: GlobalProfiles, index) => {
    // Validate and handle profile picture
    const profilePicture = isValidUrl(profile.imageUrl || '')
      ? profile.imageUrl
      : '/assets/images/Avatar.png';

    let identifier = '';
    if (profile.public_Identifier) {
      const parts = profile.public_Identifier.split('ww.linkedin.com/in/');
      if (parts.length > 1) {
        // eslint-disable-next-line prefer-destructuring
        identifier = parts[1].split(/[?#]/)[0];
      }
    }
    return renderProfileCard(
      {
        firstName: profile?.name || '',
        lastName: '',
        headline: profile.headline || '',
        profilePicture,
        publicIdentifier: identifier,
        entityUrn: profile?.entityUrn,
      },
      index,
      followprofile,
      setFollowprofile,
    );
  });
};

export const renderMutualConnections = (
  mutualConnections: MutualConnectionResponse | null | undefined,
  followprofile: string[],
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (!mutualConnections || !mutualConnections.elements) return null;

  return mutualConnections.elements
    .filter(
      connection =>
        connection?.connectedMemberResolutionResult?.firstName ||
        connection?.connectedMemberResolutionResult?.lastName,
    )
    .map((connection, index) => {
      const profileData = connection.connectedMemberResolutionResult;

      // Safely build the profile picture URL
      const profilePicture = profileData?.profilePicture?.displayImageReference?.vectorImage;
      const rootUrl = profilePicture?.rootUrl || '';
      const artifact = profilePicture?.artifacts?.[2]?.fileIdentifyingUrlPathSegment || '';
      const completeProfilePicture = rootUrl && artifact ? `${rootUrl}${artifact}` : '';

      return renderProfileCard(
        {
          entityUrn: profileData?.entityUrn,
          publicIdentifier: profileData?.publicIdentifier,
          firstName: profileData?.firstName,
          lastName: profileData?.lastName,
          headline: profileData?.headline,
          profilePicture: completeProfilePicture,
        },
        index,
        followprofile,
        setFollowprofile,
      );
    });
};
