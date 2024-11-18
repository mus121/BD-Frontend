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
    <div className={styles.Popupoverlay}>
      <div className={styles.Popup}>
        <div className={styles.Closeback}>
          <button
            type='button'
            className={styles.Clossebutton}
            onClick={closePopupHandler}
          >
            ×
          </button>
        </div>
        <div className={styles.Popcontent}>
          <div className={styles.Head}>
            <h5>
              <span className={styles.Bd}>Business Development App </span>
              <span>wants to access your work email account</span>
            </h5>
          </div>

          <div className={styles.Bdappright}>
            <div className={styles.Bdallow}>
              <h5>This will allow BD App to:</h5>
            </div>
            <div className={styles.Permissioncontainer}>
              <PermissionCheck />
            </div>
            <div className={styles.Makehead}>
              <h5>Control what you share with us</h5>
              <div className={styles.Textpara}>
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
      <div
        className={styles.Backdrop}
        onClick={closePopupHandler}
      />
    </div>
  );
}

export default MessagePopup;
