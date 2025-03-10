import { SuggestProfile, PersonInfo } from '@/types/TAiSuggesProfiles';
import Pagination from '@/component/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMiniProfilePublicIdentifier } from '@/hooks/useMiniProfilePublicIdentifier';
import { useAiProfileSuggestions } from '@/hooks/useAiSimilarProfileSuggestions';
import AiProfileShimmerLoading from '@/component/shared/AiProfileShimmerLoading/index';
import styles from './styles.module.scss';
import AiSuggestionCard from '../AiSuggestionCard/index';

function AiSuggestDataProfiles() {
  const isLoadingFromRedux = useSelector(
    (state: any) => state.aiFindSuggestProfiles.isFirstProfileLoading,
  );
  const ProfileData = useSelector((state: any) => state.aiFindSuggestProfiles.setProfiles);

  const [profiles, setProfiles] = useState<PersonInfo[]>([]);
  const publicIdentifier = useMiniProfilePublicIdentifier();

  const {
    data: SuggestProfileData,
    isError,
    isLoading: isQueryLoading,
  } = useAiProfileSuggestions();

  useEffect(() => {
    if (!isLoadingFromRedux) {
      const cachedData = ProfileData;
      if (cachedData) {
        setProfiles(cachedData);
      } else {
        setProfiles([]);
      }
    }
  }, [isLoadingFromRedux, publicIdentifier, ProfileData]);

  const isLoading = isLoadingFromRedux || isQueryLoading;
  if (isLoading) {
    return <AiProfileShimmerLoading />;
  }

  if (isError) {
    return <p>Error loading profiles. Please try again later.</p>;
  }

  // Combine cached and fresh data
  const displayedProfiles = [...(profiles || []), ...(SuggestProfileData || [])];
  return (
    <>
      <div className={styles.cardContainer}>
        {displayedProfiles
          ?.filter(
            (profile: PersonInfo) =>
              profile.full_name &&
              profile.location &&
              profile.company &&
              profile.title_reasoning &&
              profile.role_description &&
              profile.company_score !== undefined &&
              profile.company_score !== null,
          )
          .map(
            ({
              full_name,
              location,
              company,
              title,
              person_id,
              company_score,
              role_description,
              title_reasoning,
            }: SuggestProfile) => (
              <AiSuggestionCard
                key={person_id}
                personName={full_name}
                personLocation={location}
                personTitle={title}
                personCompany={company}
                companyScore={company_score}
                roleDescription={role_description}
                title_reasoning={title_reasoning}
              />
            ),
          )}
      </div>
      <Pagination
        totalItems={0}
        itemsPerPage={0}
        currentPage={0}
        // eslint-disable-next-line react/jsx-no-bind
        onPageChange={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
}
export default AiSuggestDataProfiles;
