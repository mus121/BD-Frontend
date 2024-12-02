import { useDispatch } from 'react-redux';
import { closePopup } from '../../store/slices/popupSlice';
import styles from './styles.module.scss';
import PermissionCheck from './PermissionCheck/index';
import LoginButton from './LoginButton/index';

function MessagePopup() {
  const dispatch = useDispatch();

  const closePopupHandler = () => {
    dispatch(closePopup());
  };

  return (
    <div className={styles.popUpOverlay}>
      <div className={styles.popUp}>
        <div className={styles.closeBack}>
          <button
            type='button'
            className={styles.closeButton}
            onClick={closePopupHandler}
          >
            ×
          </button>
        </div>
        <div className={styles.popContent}>
          <div className={styles.head}>
            <h5>
              <span className={styles.bd}>Business Development App </span>
              <span>wants to access your work email account</span>
            </h5>
          </div>

          <div className={styles.bdAppRight}>
            <div className={styles.bdAllow}>
              <h5>This will allow BD App to:</h5>
            </div>
            <div className={styles.PermissionContainer}>
              <PermissionCheck />
            </div>
            <div className={styles.makeHead}>
              <h5>Control what you share with us</h5>
              <div className={styles.textPara}>
                <p>
                  You control what you share with us—give access to what you’re comfortable with,
                  and we’ll tailor the experience to match:
                </p>
              </div>
            </div>
            <LoginButton />
          </div>
        </div>
      </div>
      {/* <button
        className={styles.backDrop}
        onClick={closePopupHandler}
      /> */}
    </div>
  );
}

export default MessagePopup;
