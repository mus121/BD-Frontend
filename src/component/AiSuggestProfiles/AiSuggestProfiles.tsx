'use client';

import SearchProfile from '../SearchProfile/Search';
import styles from './styles.module.scss';
import AiSuggestionCard from './AiSuggestionCard/index';
import { useAiProfileSuggestions } from '@/hooks/useAiProfileSuggestions';
import AiProfileShimmerLoading from '../shared/AiProfileShimmerLoading/index';

function AiSuggestProfiles() {
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
          <SearchProfile />
        </div>
      </div>

      {/* Dynamic Profile Cards */}
      <div className={styles.cardContainer}>
        {SuggestProfileData?.map(
          ({ person_company, person_id, person_title, Score, company_score }) => (
            <AiSuggestionCard
              key={person_id}
              personTitle={person_title}
              personCompany={person_company}
              score={Score}
              companyScore={company_score}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default AiSuggestProfiles;
