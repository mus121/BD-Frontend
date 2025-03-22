'use client';

import React from 'react';
// import Loader from '@/component/shared/loader';
import { IconSize } from '@/interfaces/loaderIcon';
import styles from './styles.module.scss';

function FullPageLoader({ width = '32', height = '32' }: { width?: IconSize; height?: IconSize }) {
  return (
    <div className={styles.Loader}>
      {/* <Loader
        width={width}
        height={height}
      /> */}
    </div>
  );
}

export default FullPageLoader;
