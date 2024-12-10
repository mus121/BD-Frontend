'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutualConnections } from '@/services/useMutualConnections';
import { useTotalConnections } from '@/services/useTotalConnections';
import { useSubmitData } from '@/services/useSubmitData';
import styles from './styles.module.scss';
import SuggestButton from './SuugestButton';
import SearchProfile from '../SearchProfile';
import Filters from '../Filters';
import ProfilesList from './ProfileList';
import Pagination from '../Pagination';
import ShimmerLoading from '../ShimmerLoading';

function FollowProfile() {
  const [currentPage, setcurrentPage] = useState(0);
  const [followprofile, setFollowprofile] = useState<string[]>([]);
  const [golbalProfiles, setGolbalProfiles] = useState<any>(null);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setcurrentPage(page);
  };

  const { isLoading, error, data: connections } = useMutualConnections(currentPage);
  const { data: totalconnectiondata } = useTotalConnections();
  const { data: getSubmitData } = useSubmitData();

  if (isLoading) {
    return <ShimmerLoading />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const handleButtonClick = () => {
    if (5 - getSubmitData.length <= 0) {
      router.push('/home');
    }
  };

  return (
    <div className={styles.profileTop}>
      <div className={styles.profileFollow}>
        <h5 className={styles.profileHaeding}>Follow Important Profiles</h5>
        <SuggestButton
          followprofile={getSubmitData}
          handleButtonClick={handleButtonClick}
        />
      </div>
      <div className={styles.profileDescription}>
        <p className={styles.profileDesc}>
          Follow at least 5 profiles from your network to help us tailor recommendations to you.
        </p>
      </div>
      <div className={styles.contactTop}>
        <div className={styles.contactProfile}>
          <h5 className={styles.profile}>Profiles</h5>
          <div className={styles.searchAndfilters}>
            <SearchProfile setProfiles={setGolbalProfiles} />
            <Filters />
          </div>
        </div>
        <div className={styles.connectionGrid}>
          <ProfilesList
            mutualConnections={connections}
            globalProfiles={golbalProfiles}
            setFollowprofile={setGolbalProfiles}
            followprofile={getSubmitData}
          />
        </div>
      </div>
      {golbalProfiles === null && (
        <Pagination
          totalItems={totalconnectiondata?.metadata?.totalResultCount || 0}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default FollowProfile;
