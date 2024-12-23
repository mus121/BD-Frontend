'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLiMutualConnections } from '@/hooks/useMutualConnections';
import { useLiTotalConnections } from '@/hooks/useTotalConnections';
import { useFollowedProfiles } from '@/hooks/useGetFollowProfiles';
import styles from './styles.module.scss';
import SuggestButton from './SuugestButton';
import SearchProfile from '../SearchProfile';
import Filters from '../Filters';
import ProfilesList from './ProfileList';
import Pagination from '../Pagination';
import LiConnectionShimmerLoading from '../shared/LiConnectionShimmerLoading';
import { useGetGlobalProfiles } from '@/hooks/useGetGlobalProfiles';

function LiConnectionProfile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setcurrentPage] = useState(0);
  const [followprofile, setFollowprofile] = useState<string[]>([]);
  const [golbalProfiles, setGolbalProfiles] = useState<any>(null);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setcurrentPage(page);
  };

  const { isLoading, error, data: connections } = useLiMutualConnections(currentPage);
  const { isLoading: Total, data: totalconnectiondata } = useLiTotalConnections();
  const { data: fetchProfileData } = useFollowedProfiles();
  const { data: GlobalSearchProfileData } = useGetGlobalProfiles(searchQuery, currentPage);

  useEffect(() => {
    setGolbalProfiles(GlobalSearchProfileData);
  }, [GlobalSearchProfileData]);

  if (isLoading) {
    return <LiConnectionShimmerLoading />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const handleButtonClick = () => {
    if (5 - fetchProfileData.length <= 0) {
      router.push('/home');
    }
  };
  console.log(
    'Toal',
    totalconnectiondata?.metadata?.totalResultCount,
    'Global Profiles',
    golbalProfiles,
    'Toalalala',
    GlobalSearchProfileData?.response?.[0]?.totalcount.total,
  );
  return (
    <div className={styles.profileTop}>
      <div className={styles.profileFollow}>
        <h5 className={styles.profileHaeding}>Follow Important Profiles</h5>
        <SuggestButton
          followprofile={fetchProfileData}
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
            <SearchProfile
              setProfiles={setGolbalProfiles}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setcurrentPage={setcurrentPage}
            />
            <Filters />
          </div>
        </div>
        <div className={styles.connectionGrid}>
          <ProfilesList
            mutualConnections={connections}
            globalProfiles={golbalProfiles}
            setFollowprofile={setFollowprofile}
            followprofile={fetchProfileData}
          />
        </div>
      </div>
      {/* {connections != null && (
        <Pagination
          totalItems={totalconnectiondata?.metadata?.totalResultCount || 0}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )} */}
      {golbalProfiles != null && !golbalProfiles.error ? (
        <Pagination
          totalItems={GlobalSearchProfileData?.response?.[0]?.totalcount.total || 0}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      ) : (
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

export default LiConnectionProfile;
