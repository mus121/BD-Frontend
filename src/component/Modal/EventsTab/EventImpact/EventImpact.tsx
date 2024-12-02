import ProgressBar from '@/component/shared/progressbar/ProgressBar';
import styles from './styles.module.scss';
import Eventaccordian from '../Eventaccordian';

function EventImapct() {
  return (
    <div className={styles.Eventimpact}>
      <h5>IMPLICATION DETAILS</h5>
      <div className={styles.Impact}>
        <h5>IMPACT SCORE</h5>
        <div className={styles.Impactscore}>
          <div className={styles.Scoreterm}>
            <div className={styles.Score}>
              <span>Short Term</span>
              <ProgressBar />
            </div>
            <div className={styles.Score}>
              <span>Long Term</span>
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>

      <Eventaccordian />
    </div>
  );
}
export default EventImapct;
