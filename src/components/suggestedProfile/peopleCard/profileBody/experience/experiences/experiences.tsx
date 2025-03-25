import ProfileImage from '@/components/shared/profileImage';
import styles from './styless.module.scss';

const Experiences = () => {
  return (
    <div className={styles.experiencesContainer}>
      <div className={styles.logoWrapper}>
        <div className={styles.container}>
          <ProfileImage
            src='/assets/images/iconnn.png'
            alt='Company logo'
            className={styles.profileImage}
          />
        </div>
        <div className={styles.header}>
          <div className={styles.experienceDetails}>
            <h2 className={styles.title}>Account Manager at MasterCard</h2>
            <h2 className={styles.date}>Jan 2018 - Now</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
