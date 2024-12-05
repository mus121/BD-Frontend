import React from 'react';
import { ProfilesListProps } from '@/types/ProfileList';
import { renderSuggestionProfiles, renderMutualConnections } from '@/utils/renderCard';
import styles from './styles.module.scss';

function ProfilesList({
  profiles,
  mutualConnections,
  followprofile,
  setFollowprofile,
}: ProfilesListProps) {
  return (
    <div className={styles.profileListContainer}>
      {profiles && renderSuggestionProfiles(profiles, followprofile, setFollowprofile)}
      {!profiles && renderMutualConnections(mutualConnections, followprofile, setFollowprofile)}
    </div>
  );
}

export default ProfilesList;
