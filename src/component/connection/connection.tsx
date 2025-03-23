'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFetchConnection } from '@/hooks/profile/connection';
import styles from './styles.module.scss';
import SearchProfile from '../search';
import LiConnectionData from './data/index';
import { setIsDisabledButton } from '@/slices/steps';
import { useDispatch } from 'react-redux';

export default function ConnectionProfile() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setcurrentPage] = useState(0);
  const [golbalProfiles, setGolbalProfiles] = useState<any>(null);
  const router = useRouter();
  const { data: connectionProfile } = useFetchConnection();

  const dispatch = useDispatch();
  if (connectionProfile?.length >= 5) {
    dispatch(setIsDisabledButton(false));
  } else {
    dispatch(setIsDisabledButton(true));
  }

  return (
    <div className={styles.container}>
      <div className={styles.contactProfile}>
        <SearchProfile
          setProfiles={setGolbalProfiles}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setcurrentPage={setcurrentPage}
          setIsSearchActive={setIsSearchActive}
          onSearch={() => null}
        />
      </div>
      <div className={styles.connectionProfile}>
        <div className={styles.connectionHead}>
          <h5 className={styles.heading}>LinkedIn Connections</h5>
          <p className={styles.description}>
            Choose at least 5 connections that best represent your ideal network.
          </p>
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
