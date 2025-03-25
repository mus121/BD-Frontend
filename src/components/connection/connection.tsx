'use client';

import { useState } from 'react';
import { useFetchConnection } from '@/hooks/profile/connection';
import styles from './styles.module.scss';
import SearchProfile from '../search';
import LiConnectionData from './data/index';
import { setIsDisabledButton } from '@/slices/steps';
import { useDispatch } from 'react-redux';
import LeftArrowSvg from '../shared/svg/LeftArrowsvg';
import { clearProfiles } from '@/slices/connection';

export default function ConnectionProfile() {
  const [showBackButton, setShowBackButton] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setcurrentPage] = useState(0);
  const [golbalProfiles, setGolbalProfiles] = useState<any>(null);
  const { data: connectionProfile } = useFetchConnection();

  const dispatch = useDispatch();
  if (connectionProfile?.length >= 5) {
    dispatch(setIsDisabledButton(false));
  } else {
    dispatch(setIsDisabledButton(true));
  }
  const handleBack = () => {
    setShowBackButton(false);
    setSearchQuery('');
    setcurrentPage(0);
    setIsSearchActive(false);
    dispatch(clearProfiles());
    setGolbalProfiles(null);
    setShowBackButton(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.connectionProfile}>
        <div className={styles.connectionHead}>
          {showBackButton ? (
            <button
              onClick={handleBack}
              className={styles.backButton}
            >
              <LeftArrowSvg size={24} />
            </button>
          ) : null}
          <h5 className={styles.heading}>LinkedIn Connections</h5>
          <p className={styles.description}>Select 5 profiles to get started</p>
        </div>
        <div className={styles.contactProfile}>
          <SearchProfile
            setShowBackButton={setShowBackButton}
            setProfiles={setGolbalProfiles}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setcurrentPage={setcurrentPage}
            setIsSearchActive={setIsSearchActive}
            onSearch={() => null}
          />
        </div>
        <div className={styles.contactTop}>
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
