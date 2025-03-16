import { SuggestProfile, PersonInfo } from '@/interfaces/aiProfile';
import Pagination from '@/component/pagination/pagination';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { usePublicIdentifier } from '@/hooks/profile/liProfile';
import { useSimilarProfile } from '@/hooks/aiProfile/similar';
import AiProfileShimmerLoading from '@/component/shared/aiLoading/index';
import styles from './styles.module.scss';
import AiSuggestionCard from '../profileCard/index';

export default function AiProfileData() {
  const isLoadingFromRedux = useSelector(
    (state: any) => state.aiFindSuggestProfiles.isFirstProfileLoading,
  );
  const ProfileData = useSelector((state: any) => state.aiFindSuggestProfiles.setProfiles);

  const [profiles, setProfiles] = useState<PersonInfo[]>([]);
  const publicIdentifier = usePublicIdentifier();

  const { data: SuggestProfileData, isError, isLoading: isQueryLoading } = useSimilarProfile();

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
