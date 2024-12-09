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
  // Check to render profiles or mutual connections
  const hasProfiles =
    profiles?.response?.data?.searchDashTypeaheadByGlobalTypeahead?.elements?.length > 0;

  const handleSelectProfile = (profile: any) => {
    setFollowprofile(profile);
  };

  return (
    <div className={styles.profileListContainer}>
      {hasProfiles
        ? renderSuggestionProfiles(profiles, followprofile, handleSelectProfile)
        : renderMutualConnections(mutualConnections, followprofile, handleSelectProfile)}
    </div>
  );
}

export default ProfilesList;
