import styles from './styles.module.scss';
import LiConnectionCard from './LiConnectionCard/index';

function LiConnectionShimmerLoading() {
  return (
    <div className={styles.shimmerHead}>
      <div className={styles.profileHead}>
        <div className={styles.profileCardHead}>
          <LiConnectionCard />
          <LiConnectionCard />
          <LiConnectionCard />
          <LiConnectionCard />
          <LiConnectionCard />
          <LiConnectionCard />
          <LiConnectionCard />
          <LiConnectionCard />
        </div>
      </div>
      <div className={styles.footerHead}>
        <div className={styles.leftFoot} />
        <div className={styles.rightFoot} />
      </div>
    </div>
  );
}

export default LiConnectionShimmerLoading;
