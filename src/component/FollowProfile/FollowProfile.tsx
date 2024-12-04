'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';
import SearchProfile from '../SearchProfile/Search';
import { getMutualConnections } from '../../hooks/getMutualConnections';
import { getTotalConnections } from '../../hooks/getTotalConnections';
import Pagination from '../Pagination/index';
import { getsubmitData } from '../../services/Followinglinkedinprofile';
import SuggestButton from './SuugestButton';
import ProfilesList from './ProfileList/index';
import ShimmerLoading from '../ShimmerLoading';
import Filters from '../Filters/index';

function FollowProfile() {
  const [mutualConnections, setMutualConnections] = useState(null);
  const [connectionCount, setConnectionCount] = useState(null);
  const [currentPage, setcurrentPage] = useState(0);
  const [profiles, setProfiles] = useState<any>(null);
  const [followprofile, setFollowprofile] = useState<string[]>([]);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setIsPageLoading(true);
      const startTime = Date.now();

      // Fetch data
      const [mutualData, totalConnectionsData, response] = await Promise.all([
        getMutualConnections(setMutualConnections, currentPage),
        getTotalConnections(setConnectionCount),
        getsubmitData(),
      ]);

      const uniqueProfiles = [...new Set(response)];
      setFollowprofile(uniqueProfiles);

      // Ensure shimmer stays for a minimum time
      const elapsedTime = Date.now() - startTime;
      const minimumDelay = 1000; // 1-second delay
      if (elapsedTime < minimumDelay) {
        setTimeout(() => setIsPageLoading(false), minimumDelay - elapsedTime);
      } else {
        setIsPageLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const onPageChange = (Page: number) => {
    setIsPageLoading(true);
    setcurrentPage(Page);
  };

  const handleButtonClick = () => {
    if (5 - followprofile.length <= 0) {
      router.push('/home');
    }
  };

  // Return shimmer loader during pagination or initial load
  if (isPageLoading) {
    return <ShimmerLoading />;
  }

  return (
    <div className={styles.profileTop}>
      <div className={styles.profileFollow}>
        <h5 className={styles.profileHaeding}>Follow Important Profiles</h5>
        <SuggestButton
          followprofile={followprofile}
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
            <SearchProfile setProfiles={setProfiles} />
            <Filters />
          </div>
        </div>
        <div className={styles.connectionGrid}>
          <ProfilesList
            profiles={profiles}
            mutualConnections={mutualConnections}
            followprofile={followprofile}
            setFollowprofile={setFollowprofile}
          />
        </div>
      </div>
      {profiles === null && (
        <Pagination
          totalItems={connectionCount?.response.metadata.totalResultCount}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

export default FollowProfile;
