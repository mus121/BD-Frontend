import styles from './styles.module.scss';

function AiSuggestCard() {
  return (
    <div className={styles.containerCard}>
      <div className={styles.profileCard}>
        <div className={styles.container}>
          <div className={styles.profileImage} />
          <div className={styles.profileData}>
            <div className={styles.profileName} />
            <div className={styles.profileTitle} />
            <div className={styles.profileLocation} />
            <div className={styles.profileLocation} />
          </div>
        </div>
        <hr className={styles.seprator} />

        <div className={styles.rightContainer}>
          <div className={styles.bussinessImpact}>
            <div className={styles.impactContainer}>
              <div className={styles.impact} />
              <div className={styles.impactButton} />
            </div>
            <div className={styles.profileButton} />
          </div>
          <div className={styles.impactAverage} />
          <div className={styles.scoreContainer}>
            <div className={styles.score} />
            <div className={styles.scoreButton} />
          </div>
          <div className={styles.progresContainer}>
            <div className={styles.progress} />
            <div className={styles.progressButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AiSuggestCard;
