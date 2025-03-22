import styles from './Enable.module.scss';

type CheckProps = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  size?: number;
  className?: string;
};

function CustomCheckbox({ checked, onChange, disabled = false, size = 16, className }: CheckProps) {
  const uniqueId = `customCheckbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label
      htmlFor={uniqueId}
      className={`${styles.customCheckboxContainer} ${className}`}
      style={{ width: size, height: size }}
    >
      <input
        type='checkbox'
        id={uniqueId}
        checked={checked}
        onChange={onChange}
        aria-label='Enable'
        disabled={disabled}
      />
      <span
        className={styles.customCheckbox}
        style={{ width: size * 0.8, height: size * 0.8 }}
      />
    </label>
  );
}

export default CustomCheckbox;
