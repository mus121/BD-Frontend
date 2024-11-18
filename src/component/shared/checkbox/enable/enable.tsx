'use client';

import React, { useState } from 'react';
import CustomCheckbox from './index';

function Check() {
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

export default Check;
