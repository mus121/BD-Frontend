'use client';

import { useAiProfileSuggestions } from '@/hooks/useAiProfileSuggestions';
import styles from './styles.module.scss';
import AiSuggestionCard from './AiSuggestionCard/index';
import AiProfileShimmerLoading from '../shared/AiProfileShimmerLoading/index';

// Define the type for each profile suggestion
type SuggestProfile = {
  person_company: string;
  person_id: string;
  person_title: string;
  // score: number;
  company_score: any;
};

function AiSuggestProfiles() {
  // Explicitly typing SuggestProfileData as SuggestProfile[]
  const { data: SuggestProfileData, isError, isLoading } = useAiProfileSuggestions();

  if (isLoading) {
    return <AiProfileShimmerLoading />;
  }

  if (isError) {
    return <p>Error loading profiles. Please try again later.</p>;
  }

  console.log('Profiles', SuggestProfileData);

  return (
    <div className={styles.suggestProfile}>
      {/* Static Heading and Description */}
      <div className={styles.suggestHeading}>
        <h5 className={styles.networkHeading}>Expand Your Network</h5>
      </div>
      <div className={styles.suggestDescription}>
        <p className={styles.networkDescription}>
          Boost your business development by connecting with industry leaders and relevant
          professionals tailored to your interests.
        </p>
      </div>
      <div className={styles.suggestTop}>
        <div className={styles.suggestConnection}>
          <h5 className={styles.profileHead}>Suggested Profiles</h5>
        </div>
      </div>

      {/* Dynamic Profile Cards */}
      <div className={styles.cardContainer}>
        {SuggestProfileData?.map(
          ({ person_company, person_id, person_title, company_score }: SuggestProfile) => (
            <AiSuggestionCard
              key={person_id}
              personTitle={person_title}
              personCompany={person_company}
              // score={score}
              companyScore={company_score}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default AiSuggestProfiles;
