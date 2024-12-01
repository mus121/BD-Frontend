'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
import styles from './styles.module.scss';
import SearchProfile from '../SearchProfile/Search';
import { getMutualConnections, getTotalConnections } from '../../hooks/useExtension';
import Pagination from '../Pagination/index';
import { getsubmitData } from '../../services/Followinglinkedinprofile';
import SuggestButton from './SuugestButton';
import ProfilesList from './ConnectionProfile/index';

function FollowProfile() {
  const [mutualConnections, setMutualConnections] = useState(null);
  const [connectionCount, setConnectionCount] = useState(null);
  const [currentPage, setcurrentPage] = useState(0);
  const [profiles, setProfiles] = useState<any>(null);
  const [followprofile, setFollowprofile] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      getMutualConnections(setMutualConnections, currentPage);
      getTotalConnections(setConnectionCount);
      const response = await getsubmitData();
      const uniqueProfiles = [...new Set(response)];
      setFollowprofile(uniqueProfiles);
    };
    fetchData();
  }, []);

  const onPageChange = (Page: number) => {
    setcurrentPage(Page);
    getMutualConnections(setMutualConnections, Page);
  };

  // Return loading state
  if (mutualConnections === null) {
    return <div className={styles.ContactCard}>...</div>;
  }

  const handleButtonClick = () => {
    if (5 - followprofile.length <= 0) {
      // Navigate to the desired page
      router.push('/home');
    }
  };

  return (
    <div className={styles.Profiletop}>
      <div className={styles.Profilefollow}>
        <h5>Follow Important Profiles</h5>
        <SuggestButton
          followprofile={followprofile}
          handleButtonClick={handleButtonClick}
        />
      </div>
      <div className={styles.Profiledescription}>
        <p>
          Follow at least 5 profiles from your network to help us tailor recommendations to you.
        </p>
      </div>
      <div className={styles.Contacttop}>
        <div className={styles.Conatctprofile}>
          <h5>Your Connections</h5>
          <SearchProfile setProfiles={setProfiles} />
        </div>
        <div className={styles.connectionsrid}>
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
