import styles from './styles.module.scss';
import ConnectionCard from './connectionCard/index';

export default function connectionShimmer() {
  return (
    <div className={styles.container}>
      <div className={styles.profileHead}>
        <div className={styles.profileCardHead}>
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
          <ConnectionCard />
        </div>
      </div>
      <div className={styles.pagination}>
        <div className={styles.paginationLeft} />
        <div className={styles.paginationRight} />
      </div>
    </div>
  );
}
