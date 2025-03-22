'use client';

import { useState } from 'react';
// import styles from './styles.module.scss';
import NextButton from '@/component/connection/button';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [stepState, setStepState] = useState(0);
  return <div>{children}</div>;
}
