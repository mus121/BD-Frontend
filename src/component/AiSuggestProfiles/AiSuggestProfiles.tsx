/* eslint-disable react/jsx-no-bind */

'use client';

import { SetStateAction } from 'react';
import { Profile } from '@/types/TProfiles';
import styles from './styles.module.scss';
import SearchProfile from '../SearchProfile';
import Filters from '../Filters';
import AiSuggestDataProfiles from './AiSuggestDataProfiles/index';

function AiSuggestProfiles() {
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
          <div className={styles.searchAndfilterContainer}>
            {/* <SearchProfile
              setProfiles={null}
              searchQuery={undefined}
              setSearchQuery={undefined}
              setcurrentPage={undefined}
              setIsSearchActive={undefined}
            /> */}
            <Filters />
          </div>
        </div>
      </div>
      <AiSuggestDataProfiles />
    </div>
  );
}

export default AiSuggestProfiles;
