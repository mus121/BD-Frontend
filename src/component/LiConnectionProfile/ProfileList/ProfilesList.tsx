import React from 'react';
import { ProfilesListProps } from '@/types/ProfileList';
import {
  renderSuggestionProfiles,
  renderMutualConnections,
  renderGlobalProfiles,
} from '@/utils/renderCard';
import styles from './styles.module.scss';

function ProfilesList({
  globalProfiles,
  mutualConnections,
  followprofile,
  setFollowprofile,
}: ProfilesListProps) {
  console.log({ globalProfiles }, 'iojgriojgro');
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
