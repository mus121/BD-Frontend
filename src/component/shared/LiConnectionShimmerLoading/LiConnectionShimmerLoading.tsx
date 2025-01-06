import styles from './styles.module.scss';
import LiConnectionCard from './LiConnectionCard/index';

function LiConnectionShimmerLoading() {
  return (
    <div className={styles.shimmerHead}>
      <div className={styles.profileHead}>
        {/* Main Component Start */}
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
        {/* Main Component End */}
      </div>

      {/* Footer Start */}
      <div className={styles.footerHead}>
        <div className={styles.leftFoot} />
        <div className={styles.rightFoot} />
      </div>
      {/* Footer End */}
    </div>
  );
}

export default LiConnectionShimmerLoading;
