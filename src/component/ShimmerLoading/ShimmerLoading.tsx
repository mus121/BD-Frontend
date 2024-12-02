import styles from './styles.module.scss';

function ShimmerLoading() {
  return (
    <div className={styles.shimmerHead}>
      <div className={styles.heading}>
        <div className={styles.topHeadLeft} />
        <div className={styles.topRight} />
      </div>
      <div className={styles.leftHeading} />
      <div className={styles.profileHead}>
        <div className={styles.yourProfiles}>
          <div className={styles.profileLeft} />
          <div className={styles.cardFilter}>
            <div className={styles.profileRight} />
            <div className={styles.filter} />
          </div>
        </div>

        {/* Main Component Start */}
        <div className={styles.profileCardHead}>
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
          <div className={styles.profileCard} />
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

export default ShimmerLoading;
