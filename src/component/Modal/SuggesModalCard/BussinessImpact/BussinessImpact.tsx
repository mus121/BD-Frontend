import Tooltip from '@/component/shared/tooltip';
import ImpactButton from '@/component/shared/button/ImpactButton/index';
import styles from './styles.module.scss';

function BussinessImpact() {
  return (
    <div className={styles.impactTitle}>
      <div className={styles.bussinessAlert}>
        <h5> BUSINESS IMPACT SCORE</h5>
        <Tooltip
          content='The Business Impact Score show the potential immediate (short-term)
           and lasting (long-term) impact on your business growth from connecting with this person.'
          iconSize={16}
        />
      </div>
      <ImpactButton
        colorVariant='gray'
        text='Average Impact'
        impactButtonClassName={styles.average}
      />
    </div>
  );
}

export default BussinessImpact;
