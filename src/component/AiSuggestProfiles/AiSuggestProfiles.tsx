'use client';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { SuggestProfile } from '@/types/AiSuggesProfiles';
import { useMiniProfilePublicIdentifier } from '@/hooks/useMiniProfilePublicIdentifier';
import { useAiProfileSuggestions } from '@/hooks/useAiProfileSuggestions';
import AiProfileShimmerLoading from '../shared/AiProfileShimmerLoading/index';
import AiSuggestionCard from './AiSuggestionCard/index';
import styles from './styles.module.scss';

function AiSuggestProfiles() {
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

  const isLoading = isQueryLoading;

  if (isLoading) {
    return <AiProfileShimmerLoading />;
  }

  if (isError) {
    return <p>Error loading profiles. Please try again later.</p>;
  }

  // Combine cached and fresh data
  const displayedProfiles = [...(profiles || []), ...(SuggestProfileData || [])];

  return (
    <div className={styles.suggestProfile}>
      <div className={styles.suggestHeading}>
        <h5 className={styles.networkHeading}>Expand Your Network</h5>
      </div>
      <div className={styles.suggestDescription}>
        <p className={styles.networkDescription}>
          Boost your business development by connecting with industry leaders and relevant
          professionals.
        </p>
      </div>
      <div className={styles.suggestTop}>
        <div className={styles.suggestConnection}>
          <h5 className={styles.profileHead}>Suggested Profiles</h5>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {displayedProfiles
          ?.filter(
            (profile: SuggestProfile) =>
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
    </div>
  );
}

export default AiSuggestProfiles;
