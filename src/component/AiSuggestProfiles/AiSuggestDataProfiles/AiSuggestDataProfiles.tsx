import { SuggestProfile } from '@/types/TAiSuggesProfiles';
import Pagination from '@/component/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
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

  const queryClient = useQueryClient();
  const [profiles, setProfiles] = useState<SuggestProfile[]>([]);
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
  }, [isLoadingFromRedux, queryClient, publicIdentifier, ProfileData]);

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
            (profile: SuggestProfile) =>
              profile.full_name &&
              profile.location &&
              profile.company &&
              profile.reasoning &&
              profile.role_description &&
              profile.company_score?.['Domain Alignment score']?.score !== undefined &&
              profile.company_score?.['Domain Alignment score']?.score !== null,
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
              reasoning,
            }: SuggestProfile) => (
              <AiSuggestionCard
                key={person_id}
                personName={full_name}
                personLocation={location}
                personTitle={title}
                personCompany={company}
                companyScore={company_score}
                roleDescription={role_description}
                reasoning={reasoning}
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
