import styles from './styles.module.scss';
import ListUser from '../../common/svg/Listuser';
import Calendar from '../../common/svg/Calendar';
import Gmail from '../../common/svg/Gmail';
import Check from '../../shared/checkbox/enable/enable';
import CheckDisable from '../../shared/checkbox/disable/disable';

function PermissionCheck() {
  return (
    <div className={styles.Messagemain}>
      <div className={styles.Permissionitem}>
        <div className={styles.Iconbutton}>
          <ListUser size={24} />
        </div>
        <span className={styles.Text}>
          See your personal info, including any personal info you ve made publicly available
        </span>
        <CheckDisable />
      </div>

      <div className={styles.Permissionitem}>
        <div className={styles.Iconbutton}>
          <ListUser size={24} />
        </div>
        <span className={styles.Text}>See your primary Google Account email address</span>
        <CheckDisable />
      </div>

      <div className={styles.Permissionitem}>
        <div className={styles.Iconbutton}>
          <Calendar size={24} />
        </div>
        <span className={styles.Text}>See and download your contacts</span>
        <Check />
      </div>

      <div className={styles.Permissionitem}>
        <div className={styles.Iconbutton}>
          <Gmail size={24} />
        </div>
        <span className={styles.Text}>
          See and download any calendar you can access using your Google Calender.
        </span>
        <Check />
      </div>

      <div className={styles.Permissionitem}>
        <div className={styles.Iconbutton}>
          <ListUser size={24} />
        </div>
        <span className={styles.Text}>View your email messages and settings</span>
        <Check />
      </div>
    </div>
  );
}

export default PermissionCheck;
