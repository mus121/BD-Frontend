import { useDispatch } from 'react-redux';
import { closePopup } from '@/slices/popUp';
import styles from './styles.module.scss';
import CloseButton from './component/closeIcon';
import PopupBody from './component/body';
import PopupHeader from './component/header';

export default function MessagePopup() {
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
