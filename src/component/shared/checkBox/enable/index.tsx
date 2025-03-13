import styles from './Enable.module.scss';

type CheckProps = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
};

function CustomCheckbox({ checked, onChange, disabled = false }: CheckProps) {
  const uniqueId = `customCheckbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label
      htmlFor={uniqueId}
      className={styles.customCheckboxContainer}
    >
      <input
        type='checkbox'
        id={uniqueId}
        checked={checked}
        onChange={onChange}
        aria-label='Enable'
        disabled={disabled}
      />
      <span className={styles.customCheckbox} />
    </label>
  );
}

export default CustomCheckbox;
