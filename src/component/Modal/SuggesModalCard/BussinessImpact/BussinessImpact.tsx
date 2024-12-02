import Tooltip from '@/component/shared/tooltip';
import styles from './styles.module.scss';

function BussinessImpact() {
  return (
    <div className={styles.Impacttitle}>
      <div className={styles.Bussinessalert}>
        <h5> BUSINESS IMPACT SCORE</h5>
        <Tooltip />
      </div>
      <p>Average Impact</p>
    </div>
  );
}

export default BussinessImpact;
