import React from 'react';
import { ProfilesListProps } from '@/types/ProfileList';
import { renderSuggestionProfiles, renderMutualConnections } from '@/utils/renderCard';
import styles from './styles.module.scss';

function ProfilesList({
  globalProfiles,
  mutualConnections,
  followprofile,
  setFollowprofile,
}: ProfilesListProps) {
  return (
    <div className={styles.profileListContainer}>
      {globalProfiles && renderSuggestionProfiles(globalProfiles, followprofile, setFollowprofile)}
      {!globalProfiles &&
        renderMutualConnections(mutualConnections, followprofile, setFollowprofile)}
    </div>
  );
}

export default ProfilesList;
