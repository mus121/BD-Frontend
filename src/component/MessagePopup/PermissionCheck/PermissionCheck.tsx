import styles from './styles.module.scss';
import ListUser from '../../common/svg/Listuser';
import Calendar from '../../common/svg/Calendar';
import Gmail from '../../common/svg/Gmail';
import Check from '../../shared/checkbox/enable/enable';
import CheckDisable from '../../shared/checkbox/disable/disable';

function PermissionCheck() {
  return (
    <div className={styles.messageMain}>
      <div className={styles.permissionItem}>
        <div className={styles.iconButton}>
          <ListUser size={24} />
        </div>
        <span className={styles.text}>
          See your personal info, including any personal info you ve made publicly available
        </span>
        <CheckDisable />
      </div>

      <div className={styles.permissionItem}>
        <div className={styles.iconButton}>
          <ListUser size={24} />
        </div>
        <span className={styles.text}>See your primary Google Account email address</span>
        <CheckDisable />
      </div>

      <div className={styles.permissionItem}>
        <div className={styles.iconButton}>
          <Calendar size={24} />
        </div>
        <span className={styles.text}>See and download your contacts</span>
        <Check />
      </div>

      <div className={styles.permissionItem}>
        <div className={styles.iconButton}>
          <Gmail size={24} />
        </div>
        <span className={styles.text}>
          See and download any calendar you can access using your Google Calender.
        </span>
        <Check />
      </div>

      <div className={styles.permissionItem}>
        <div className={styles.iconButton}>
          <ListUser size={24} />
        </div>
        <span className={styles.text}>View your email messages and settings</span>
        <Check />
      </div>
    </div>
  );
}

export default PermissionCheck;
