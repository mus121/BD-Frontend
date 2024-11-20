'use client';

import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { openPopup, closePopup } from '../../../store/slices/popupSlice';
import styles from './styles.module.scss';
import MessagePopup from '../../MessagePopup/index';
import { RootState } from '../../../store/store';
import PrimaryButton from '../../shared/button/PrimaryButton';

function AuthenticationButton() {
  const dispatch = useDispatch();
  const isPopupOpen = useSelector((state: RootState) => state.popup.isOpen);

  const handleButtonClick = () => {
    dispatch(openPopup());
  };

  const closePopupHandler = () => {
    dispatch(closePopup());
  };
  return (
    <>
      <div className={`${styles.Authbutton} ${isPopupOpen ? styles.blurred : ''}`}>
        <PrimaryButton
          text='submit'
          type='button'
          sizeVariant='xs'
          colorVariant='orange'
          onClick={handleButtonClick}
          primaryButtonClassName={styles.Google}
        >
          <Image
            src='/assets/images/Google - Original.png'
            width={17}
            height={17}
            alt='Google'
            className={styles.Googleimg}
          />
          <span>Continue with Google</span>
        </PrimaryButton>
        <PrimaryButton
          text='submit'
          type='button'
          sizeVariant='xs'
          colorVariant='orange'
          primaryButtonClassName={styles.Buttonoutlook}
          onClick={handleButtonClick}
          disabled
        >
          <Image
            src='/assets/images/outlook_icon.png'
            width={17}
            height={17}
            alt='Outlook'
            className={styles.Googleimg}
          />
          <span>Continue with Outlook</span>
        </PrimaryButton>
      </div>
      {isPopupOpen && <MessagePopup />}
    </>
  );
}

export default AuthenticationButton;
