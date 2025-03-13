'use client';

import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function GoogleSuccessPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isSuccess = searchParams.get('success') === 'true';

    if (isSuccess) {
      redirect('/dashboard');
    } else {
      redirect('/');
    }
  }, []);

  if (loading) {
    return <p>Loading...........</p>;
  }
  return null;
}

export default GoogleSuccessPage;
