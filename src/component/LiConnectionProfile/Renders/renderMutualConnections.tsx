import { FilterMutualApiResponse } from '@/types/TMutualConnections';
import { renderProfileCard } from './RenderProfileCard';

export const renderMutualConnections = (
  mutualConnections: FilterMutualApiResponse,
  followProfile: string[],
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (!mutualConnections || !mutualConnections) return null;

  return mutualConnections.map((connection, index) => {
    const { firstName } = connection;
    const { lastName } = connection;
    const { headLine } = connection;
    const { entityUrn } = connection;
    const { completeImageUrl } = connection;
    const { publicIdentifier } = connection;

    return renderProfileCard(
      {
        entityUrn,
        publicIdentifier,
        firstName,
        lastName,
        headline: headLine,
        profilePicture: completeImageUrl,
        id: 0,
      },
      index,
      followProfile,
      setFollowProfile,
    );
  });
};
