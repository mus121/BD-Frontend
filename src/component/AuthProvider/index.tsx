'use client';

import { useUserId } from '@/hooks/useMe';
import { redirect, usePathname } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const pathname = usePathname();
  const { userId, isLoading, isError } = useUserId();

  console.log({ userId, pathname });

  useEffect(() => {
    if (userId && pathname === '/') {
      redirect('/dashboard');
    }
  }, [userId, isLoading, isError]);

  if (isLoading) return <div>LOADING...</div>;

  return children;
};

export default AuthProvider;
