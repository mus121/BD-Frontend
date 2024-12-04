import Alertcircle from '@/component/common/svg/Alertcircle';
import styles from './styles.module.scss';

type TooltipProps = {
  content: string;
  iconSize?: number;
};

function Tooltip({ content, iconSize = 16 }: TooltipProps) {
  return (
    <div className={styles.tool}>
      <span className={styles.infoIcon}>
        <Alertcircle size={iconSize} />
        <span className={styles.tooltip}>{content}</span>
      </span>
    </div>
  );
}

export default Tooltip;
