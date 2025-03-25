import styles from './styles.module.scss';

const LiProfileLoading = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.image} />
      <div className={styles.containerHead}>
        <div className={styles.name} />
        <div className={styles.title} />
      </div>
      <div className={styles.location} />
    </div>
  );
};

export default LiProfileLoading;
