import Tooltip from '@/component/shared/tooltip';
import ImpactButton from '@/component/shared/button/ImpactButton';
import styles from './styles.module.scss';

function BussinessImpact() {
  return (
    <div className={styles.bussinessImpact}>
      <div className={styles.impactTitle}>
        <div className={styles.bussinessAlert}>
          <h5 className={styles.impactHeading}> BUSINESS IMPACT SCORE</h5>
          <Tooltip
            content='The Business Impact Score show the potential immediate (short-term) 
          and lasting (long-term) impact on your business growth from connecting with this person.'
            iconSize={16}
          />
        </div>
        <ImpactButton
          colorVariant='gray'
          sizeVariant='sm'
          text='Average Impact'
          impactButtonClassName={styles.average}
        />
      </div>
    </div>
  );
}
export default BussinessImpact;
