import { useDispatch } from 'react-redux';
import { closePopup } from '../../store/slices/popupSlice';
import styles from './styles.module.scss';
import CloseButton from './MessagePopupComponent/Close';
import PopupBody from './MessagePopupComponent/PopupBody';
import PopupHeader from './MessagePopupComponent/PopupHeader';

function MessagePopup() {
  const dispatch = useDispatch();

  const closePopupHandler = () => {
    dispatch(closePopup());
  };

  return (
    <div className={styles.popUpOverlay}>
      <div className={styles.popUp}>
        <CloseButton onClick={closePopupHandler} />
        <div className={styles.popContent}>
          <PopupHeader />
          <PopupBody />
        </div>
      </div>
    </div>
  );
}

export default MessagePopup;
