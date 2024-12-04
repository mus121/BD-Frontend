import ImpactScore from '@/component/shared/score';
import styles from './styles.module.scss';

function Progress() {
  return (
    <div className={styles.scoresContainer}>
      <ImpactScore term='Short Term' />
      <ImpactScore term='Long Term' />
    </div>
  );
}
export default Progress;
