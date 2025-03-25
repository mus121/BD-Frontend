import Experiences from './experience/experience';
import styles from './styles.module.scss';

const ProfileBody = () => {
  return (
    <div className={styles.profileBody}>
      <div className={styles.experienceWrapper}>
        <div className={styles.experienceHeading}>
          <h3>Experience</h3>
        </div>
        <Experiences />
      </div>
    </div>
  );
};

export default ProfileBody;
