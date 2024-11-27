import styles from './styles.module.scss';
import ConnectionProfileCard from '../../ConnectionProfileCard/index';

function ProfileCard({
  profile,
  followprofile,
  setFollowprofile,
}: {
  profile: any;
  followprofile: string[];
  setFollowprofile: (profiles: string[]) => void;
}) {
  return (
    <div className={styles.connectioncolumn}>
      <ConnectionProfileCard
        profile={profile}
        followprofile={followprofile}
        setFollowprofile={setFollowprofile}
      />
    </div>
  );
}

export default ProfileCard;
