'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

type ProfileImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
  className?: string;
};

function ProfileImage({
  src,
  alt,
  width = 80,
  height = 80,
  fallbackSrc = '/assets/images/Avatar.png',
  className = '',
}: ProfileImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${styles.profileImg} ${className}`}
      onError={handleError}
      priority
    />
  );
}

export default ProfileImage;
