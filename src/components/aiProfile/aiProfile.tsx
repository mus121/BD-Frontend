/* eslint-disable react/jsx-no-bind */

'use client';

import styles from './styles.module.scss';
import Filters from '../suggestedProfile/filter';
import AiSuggestDataProfiles from './profileData/index';

export default function aiProfile() {
  return (
    <div className={styles.conatiner}>
      <div className={styles.heading}>
        <h5 className={styles.expandNetwork}>Expand Your Network</h5>
      </div>
      <div className={styles.description}>
        <p className={styles.expandNetworkDescription}>
          Boost your business development by connecting with industry leaders and relevant
          professionals.
        </p>
      </div>
      <div className={styles.top}>
        <div className={styles.connection}>
          <h5 className={styles.profileConnection}>Suggested Profiles</h5>
          <div className={styles.filter}>
            <Filters />
          </div>
        </div>
      </div>
      <AiSuggestDataProfiles />
    </div>
  );
}
