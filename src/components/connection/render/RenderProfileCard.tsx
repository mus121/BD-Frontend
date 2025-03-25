import ConnectionProfileCard from '@/components/connectionCard';
import { Profile } from '@/interfaces/profile';

export const renderProfileCard = (
  profile: Profile,
  index: React.Key | null | undefined,
  followProfile: string[],
  setFollowProfile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  return (
    <div key={index}>
      <ConnectionProfileCard
        profile={{
          firstName: firstName || '',
          lastName: lastName || '',
          headline: headline || '',
          profilePicture: profilePicture || '',
          publicIdentifier: publicIdentifier || '',
          entityUrn: entityUrn || '',
          id: 0,
        }}
        followProfile={followProfile}
        setFollowProfile={setFollowProfile}
      />
    </div>
  );
};
