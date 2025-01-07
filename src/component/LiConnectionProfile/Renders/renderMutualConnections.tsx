import { MutualConnectionResponse } from '@/types/TMutualConnections';
import { renderProfileCard } from './RenderProfileCard';

export const renderMutualConnections = (
  mutualConnections: MutualConnectionResponse | null | undefined,
  followProfile: string[],
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (!mutualConnections || !mutualConnections.elements) return null;

  return mutualConnections.elements.map((connection, index) => {
    const profileData = connection.connectedMemberResolutionResult;
    const profilePicture = profileData?.profilePicture?.displayImageReference?.vectorImage;
    const rootUrl = profilePicture?.rootUrl || '';
    const artifact = profilePicture?.artifacts?.[2]?.fileIdentifyingUrlPathSegment || '';
    const completeProfilePicture = rootUrl && artifact ? `${rootUrl}${artifact}` : '';

    return renderProfileCard(
      {
        entityUrn: profileData?.entityUrn,
        publicIdentifier: profileData?.publicIdentifier,
        firstName: profileData?.firstName || 'Muhammad Shehrayar',
        lastName: profileData?.lastName,
        headline: profileData?.headline || 'Qlu.ai',
        profilePicture: completeProfilePicture,
        id: 0,
      },
      index,
      followProfile,
      setFollowProfile,
    );
  });
};
