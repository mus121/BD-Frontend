import React from 'react';
import { ProfilesListProps } from '@/types/ProfileList';
import styles from './styles.module.scss';
import {
  renderSuggestionProfiles,
  renderMutualConnections,
} from './ProfileCardRenderer/ProfileCardRenderer';

const ProfilesList: React.FC<ProfilesListProps> = ({
  profiles,
  mutualConnections,
  followprofile,
  setFollowprofile,
}) => (
  <div className={styles.profileListContainer}>
    {profiles && renderSuggestionProfiles(profiles, followprofile, setFollowprofile)}
    {!profiles && renderMutualConnections(mutualConnections, followprofile, setFollowprofile)}
  </div>
);

export default ProfilesList;
