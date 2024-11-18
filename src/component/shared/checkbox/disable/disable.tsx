'use client';

import React, { useState } from 'react';
import CustomCheckbox from './index';

function CheckDisable() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <CustomCheckbox
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default CheckDisable;
