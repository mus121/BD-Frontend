import ConnectionProfileCard from '@/component/LiConnectionsCard';
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
    const profilePicture = isValidUrl(profile.imageUrl || profile?.image || '')
      ? profile.imageUrl || profile?.image
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
        firstName: profile?.name || profile?.title || 'Muhammad Shehrayar',
        lastName: '',
        headline: profile.headline || profile?.subtitle || 'Qlu.ai',
        profilePicture,
        publicIdentifier: identifier || profile.publicIdentifier,
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

  return (
    mutualConnections.elements
      // .filter(connection => {
      //   const profileData = connection?.connectedMemberResolutionResult;

      //   // Skip connections without firstName, lastName, or profilePicture
      //   return profileData?.firstName || profileData?.lastName || profileData?.profilePicture;
      // })
      .map((connection, index) => {
        const profileData = connection.connectedMemberResolutionResult;
        const profilePicture = profileData?.profilePicture?.displayImageReference?.vectorImage;
        const rootUrl = profilePicture?.rootUrl || '';
        const artifact = profilePicture?.artifacts?.[2]?.fileIdentifyingUrlPathSegment || '';
        const completeProfilePicture = rootUrl && artifact ? `${rootUrl}${artifact}` : '';

        // Pass the valid profile data to renderProfileCard
        return renderProfileCard(
          {
            entityUrn: profileData?.entityUrn,
            publicIdentifier: profileData?.publicIdentifier,
            firstName: profileData?.firstName || 'Muhammad Shehrayar',
            lastName: profileData?.lastName,
            headline: profileData?.headline || 'Qlu.ai',
            profilePicture: completeProfilePicture,
          },
          index,
          followprofile,
          setFollowprofile,
        );
      })
  );
};
