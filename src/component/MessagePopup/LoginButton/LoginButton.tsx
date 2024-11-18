import { useDispatch } from 'react-redux';
import { closePopup } from '../../../store/slices/popupSlice';
import styles from './styles.module.scss';

function LoginButton() {
  const dispatch = useDispatch();

  const closePopupHandler = () => {
    dispatch(closePopup());
  };

  const handleGoogleLogin = () => {
    window.location.href = process.env.NEXT_GOOGLE_API_LOGIN!;
  };
  return (
    <div className={styles.Button}>
      <button
        type='button'
        className={styles.Cancel}
        onClick={closePopupHandler}
      >
        <span>Cancel</span>
      </button>
      <button
        type='button'
        className={styles.Allow}
        onClick={handleGoogleLogin}
      >
        <span>Allow</span>
      </button>
    </div>
  );
}

export default LoginButton;
