'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFetchConnection } from '@/hooks/profile/connection';
import styles from './styles.module.scss';
import SuggestButton from './button/index';
import SearchProfile from '../search';
import Filters from '../filter';
import LiConnectionData from './data/index';

export default function ConnectionProfile() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setcurrentPage] = useState(0);
  const [golbalProfiles, setGolbalProfiles] = useState<any>(null);
  const router = useRouter();
  const { data: fetchProfileData } = useFetchConnection();

  const handleButtonClick = () => {
    if (5 - fetchProfileData.length <= 0) {
      router.push('/home');
    }
  };
  return (
    <div className={styles.container}>
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
                setIsSearchActive={setIsSearchActive}
                onSearch={() => null}
              />
              <Filters />
            </div>
          </div>
          <LiConnectionData
            globalProfiles={golbalProfiles}
            setGlobalProfiles={setGolbalProfiles}
            isSearchActive={isSearchActive}
            searchQuery={searchQuery}
            currentPage={currentPage}
            setCurrentPage={setcurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
