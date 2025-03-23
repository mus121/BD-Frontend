'use client';

import React, { useState } from 'react';
import CustomCheckbox from './index';

export type CheckProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
  isFollowed: boolean;
};

const Check = ({ size = 16, className, onClick, isFollowed }: CheckProps) => {
  const handleCheckboxChange = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className={className}>
      <CustomCheckbox
        checked={isFollowed}
        onChange={handleCheckboxChange}
        size={size}
        className={className}
      />
    </div>
  );
};

export default Check;
