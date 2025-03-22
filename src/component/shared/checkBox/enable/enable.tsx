'use client';

import React, { useState } from 'react';
import CustomCheckbox from './index';

export type CheckProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
  isFollowed: boolean;
};

const Check: React.FC<CheckProps> = ({ size = 16, className, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prev => !prev);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={className}>
      <CustomCheckbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        size={size}
        className={className}
      />
    </div>
  );
};

export default Check;
