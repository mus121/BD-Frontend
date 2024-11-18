import React from 'react';
import styles from './Disable.module.scss';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

// eslint-disable-next-line react/function-component-definition
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, disabled = true }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
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

export default CustomCheckbox;
