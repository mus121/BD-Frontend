import React from 'react';
import styles from './Enable.module.scss';

interface CheckProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

function Check({ checked, onChange, disabled = false }: CheckProps) {
  return (
    <label
      htmlFor='customCheckbox'
      className={styles.customCheckboxContainer}
    >
      <input
        type='checkbox'
        id='customCheckbox'
        checked={checked}
        onChange={onChange}
        // disabled={disabled}
        aria-label='Enable'
      />
      <span className={styles.customCheckbox} />
    </label>
  );
}

export default Check;
