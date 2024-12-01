import styles from './styles.module.scss';
import Alertcircle from '@/component/common/svg/Alertcircle';

const Tooltip = () => {
  return (
    <div className={styles.Tool}>
      <span className={styles.Infoicon}>
        <Alertcircle size={16} />
        <span className={styles.Tooltip}>
          The Business Impact Score show the potential immediate (short-term) and lasting
          (long-term) impact on your business growth from connecting with this person.
        </span>
      </span>
    </div>
  );
};

export default Tooltip;
