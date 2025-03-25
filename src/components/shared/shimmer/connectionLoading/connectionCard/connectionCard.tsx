import styles from './styles.module.scss';

export default function connectionCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.container}>
        <div className={styles.profileImage} />
        <div className={styles.profileData}>
          <div className={styles.profileName} />
          <div className={styles.profileTitle} />
        </div>
      </div>
    </div>
  );
}
