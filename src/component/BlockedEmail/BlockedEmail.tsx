'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WelcomeCredentials from '@/component/WelcomeCredentials/index';
import styles from './styles.module.scss';
import CustomCloseButton from './ClosedButton/index';

function BlockedEmail() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('error') === 'restricted') {
      toast.error('Only work emails are allowed. Please try again with a company email address.', {
        position: 'top-center',
        autoClose: false,
        onClose: () => {
          window.location.href = 'http://localhost:3000';
        },
        className: styles.Customtoast,
        closeButton: (
          <CustomCloseButton
            closeToast={() => {
              window.location.href = 'http://localhost:3000';
            }}
          />
        ),
      });
    } else {
      window.location.href = 'http://localhost:3000/dashboard';
    }
  }, [searchParams]);

  return (
    <>
      <ToastContainer />
      <WelcomeCredentials />
    </>
  );
}

export default function GoogleCallback() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlockedEmail />
    </Suspense>
  );
}
