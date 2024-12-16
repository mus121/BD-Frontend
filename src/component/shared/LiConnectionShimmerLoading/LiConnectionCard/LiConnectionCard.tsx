import styles from './styles.module.scss';

function LiConnectionCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.container}>
        <div className={styles.profileImage} />
        <div className={styles.profileData}>
          <div className={styles.profileName} />
          <div className={styles.profileTitle} />
          <div className={styles.profileLocation} />
        </div>
      </div>
      <div className={styles.profileButton}></div>
    </div>
  );
}
export default LiConnectionCard;
