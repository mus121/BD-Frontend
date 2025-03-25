import { isValidUrl } from '@/utils/isValidUrl';
import { extractPublicIdentifier } from '@/utils/extractPublicIdentifier';
import { GlobalProfiles } from '@/interfaces/search';
import { renderProfileCard } from './RenderProfileCard';

export const renderGlobalProfiles = (
  profiles: GlobalProfiles[],
  followProfile: string[],
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (!Array.isArray(profiles)) return null;

  return profiles.map((profile, index) => {
    const profilePicture = isValidUrl(profile.imageUrl || profile?.image || '')
      ? profile.imageUrl || profile?.image
      : '/assets/images/LiDefault.png';

    const identifier = extractPublicIdentifier(profile.public_Identifier);

    return renderProfileCard(
      {
        firstName: profile?.name || profile?.title || 'Muhammad Shehrayar',
        lastName: '',
        headline: profile?.headline || profile?.subtitle || 'Qlu.ai',
        profilePicture,
        publicIdentifier: identifier || profile.publicIdentifier,
        entityUrn: profile?.entityUrn,
        id: 0,
      },
      index,
      followProfile,
      setFollowProfile,
    );
  });
};
