import React from 'react';
import { ProfilesListProps } from '@/types/ProfileList';
import { renderMutualConnections, renderGlobalProfiles } from '@/utils/renderCard';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

function ProfilesList({
  globalProfiles,
  mutualConnections,
  followprofile,
  setFollowprofile,
}: ProfilesListProps) {
  const ProfileData = useSelector((state: any) => state.dropDownProfiles.profiles);
  return (
    <div className={styles.profileListContainer}>
      {ProfileData && renderGlobalProfiles([ProfileData], followprofile, setFollowprofile)}
      {!ProfileData &&
        globalProfiles?.response &&
        renderGlobalProfiles(globalProfiles?.response, followprofile, setFollowprofile)}
      {!ProfileData &&
        !globalProfiles?.response &&
        renderMutualConnections(mutualConnections, followprofile, setFollowprofile)}
    </div>
  );
}

export default ProfilesList;
