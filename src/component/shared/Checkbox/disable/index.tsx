/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './Disable.module.scss';

type CustomCheckboxProps = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
};

function CustomCheckbox({ checked, onChange, disabled = true }: CustomCheckboxProps) {
  return (
    <label className={styles.customCheckboxContainer}>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={styles.customCheckbox} />
    </label>
  );
}

export default CustomCheckbox;
