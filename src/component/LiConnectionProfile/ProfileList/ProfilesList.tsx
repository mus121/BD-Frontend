import React from 'react';
import { ProfilesListProps } from '@/types/ProfileList';
import { renderMutualConnections, renderGlobalProfiles } from '@/utils/renderCard';
import styles from './styles.module.scss';

function ProfilesList({
  globalProfiles,
  mutualConnections,
  followprofile,
  setFollowprofile,
}: ProfilesListProps) {
  return (
    <div className={styles.profileListContainer}>
      {globalProfiles?.response &&
        renderGlobalProfiles(globalProfiles?.response, followprofile, setFollowprofile)}
      {!globalProfiles?.response &&
        renderMutualConnections(mutualConnections, followprofile, setFollowprofile)}
    </div>
  );
}

export default ProfilesList;
