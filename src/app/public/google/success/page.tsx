'use client';

import { redirect, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function GoogleSuccessPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const isSuccess = searchParams.get('success') === 'true';

    if (isSuccess) {
      redirect('/dashboard');
    } else {
      redirect('/');
    }
  }, []);

  return null;
}

export default GoogleSuccessPage;
