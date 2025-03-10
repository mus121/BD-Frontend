import { ProfilesListProps } from '@/types/TProfileList';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { renderMutualConnections } from '../Renders/renderMutualConnections';
import { renderGlobalProfiles } from '../Renders/renderGlobalProfiles';
import styles from './styles.module.scss';

function ProfilesList({
  globalProfiles,
  mutualConnections,
  followProfile,
  setFollowProfile,
}: ProfilesListProps) {
  const profileData = useSelector((state: RootState) => state.dropDownProfiles.profiles);

  return (
    <div className={styles.profileListContainer}>
      {profileData && renderGlobalProfiles([profileData], followProfile, setFollowProfile)}
      {!profileData &&
        globalProfiles?.response &&
        renderGlobalProfiles(globalProfiles?.response, followProfile, setFollowProfile)}
      {!profileData &&
        !globalProfiles?.response &&
        renderMutualConnections(mutualConnections, followProfile, setFollowProfile)}
    </div>
  );
}

export default ProfilesList;
