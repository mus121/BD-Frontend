import styles from './styles.module.scss';
import AiProfileCard from '../profileCard/index';
import { useDummyAiProfile } from '@/hooks/aiProfile/dummyProfile';
import AiProfileShimmerLoading from '@/component/shared/aiLoading';
import { Profile } from '@/interfaces/aiProfile';

export default function AiSuggestDataProfiles() {
  const { data: aiDummyProfile, isLoading } = useDummyAiProfile();

  if (isLoading) return <AiProfileShimmerLoading />;

  return (
    <div className={styles.cardContainer}>
      {aiDummyProfile
        ?.filter(
          (profile: Profile) =>
            profile.name &&
            profile.location &&
            profile.company &&
            profile.business_impact_score?.total !== undefined,
        )
        .map((profile: Profile) => (
          <AiProfileCard
            key={profile.username}
            personName={profile.name}
            personLocation={profile.location}
            personCompany={profile.company}
            companyScore={profile.business_impact_score?.total}
            roleDescription={profile.business_impact_score?.label}
            personTitle={''}
            title_reasoning={undefined}
          />
        ))}
    </div>
  );
}
