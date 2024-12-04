import LoginButton from '../../LoginButton';
import PermissionCheck from '../../PermissionCheck';
import styles from './styles.module.scss';

function PopupBody() {
  return (
    <div className={styles.bdAppRight}>
      <div className={styles.bdAllow}>
        <h5 className={styles.bdText}>This will allow BD App to:</h5>
      </div>
      <div className={styles.PermissionContainer}>
        <PermissionCheck />
      </div>
      <div className={styles.makeHead}>
        <h5 className={styles.bdText}>Control what you share with us</h5>
        <div className={styles.textPara}>
          <p className={styles.description}>
            You control what you share with us—give access to what you’re comfortable with, and
            we’ll tailor the experience to match:
          </p>
        </div>
      </div>
      <LoginButton />
    </div>
  );
}
export default PopupBody;
