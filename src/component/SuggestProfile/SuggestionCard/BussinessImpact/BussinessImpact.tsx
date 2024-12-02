import Tooltip from '@/component/shared/tooltip';
import styles from './styles.module.scss';

function BussinessImpact() {
  return (
    <div className={styles.bussinessImpact}>
      <div className={styles.impactTitle}>
        <div className={styles.bussinessAlert}>
          <h5> BUSINESS IMPACT SCORE</h5>
          <Tooltip />
        </div>
        <p>Average Impact</p>
      </div>
    </div>
  );
}
export default BussinessImpact;
