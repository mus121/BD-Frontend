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
    {/* Render suggestion profiles only if profiles exist */}
    {profiles && renderSuggestionProfiles(profiles, followprofile, setFollowprofile)}

    {/* Render mutual connections only if profiles are not being searched */}
    {!profiles && renderMutualConnections(mutualConnections, followprofile, setFollowprofile)}
  </div>
);

export default ProfilesList;
