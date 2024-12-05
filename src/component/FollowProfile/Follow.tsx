'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { getsubmitData } from '@/services/Followinglinkedinprofile';
import { getMutualConnections } from '@/hooks/getMutualConnections';
import { getTotalConnections } from '@/hooks/getTotalConnections';
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
  const [searchprofile, setSearchprofile] = useState<string[]>([]);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setcurrentPage(page); // Update the currentPage state
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['mutualConnections', currentPage],
    queryFn: () => getMutualConnections(currentPage),
  });

  const { data: totalconnectiondata } = useQuery({
    queryKey: ['totalConnections'],
    queryFn: getTotalConnections,
  });

  const { data: getSubmitData } = useQuery({
    queryKey: ['submitData'],
    queryFn: getsubmitData,
  });

  console.log('Search Profile', searchprofile);
  if (isLoading) {
    return (
      <div>
        {' '}
        <ShimmerLoading />
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const handleButtonClick = () => {
    if (5 - followprofile.length <= 0) {
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
            <SearchProfile setProfiles={setSearchprofile} />
            <Filters />
          </div>
        </div>
        <div className={styles.connectionGrid}>
          <ProfilesList
            mutualConnections={data}
            profiles={null}
            setFollowprofile={setFollowprofile}
            followprofile={getSubmitData}
          />
        </div>
      </div>
      {data !== null && (
        <Pagination
          totalItems={totalconnectiondata?.metadata?.totalResultCount || 0}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={handlePageChange} // Pass the handler function
        />
      )}
    </div>
  );
}
export default FollowProfile;
