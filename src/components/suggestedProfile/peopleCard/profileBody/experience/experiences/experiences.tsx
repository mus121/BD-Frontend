import ProfileImage from '@/components/shared/profileImage';
import styles from './styless.module.scss';

const Experiences = () => {
  return (
    <div className={styles.experiencesContainer}>
      <div className={styles.logoWrapper}>
        <ProfileImage
          src=''
          alt='Company logo'
          className={styles.profileImage}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <div className={styles.experienceDetails}>
            <h2 className={styles.title}>Hello Mustafa kamal</h2>
            <button
              type='button'
              className={styles.company}
            >
              Jan 2018 - Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
