import styles from './Enable.module.scss';

type CheckProps = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
};

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
        aria-label='Enable'
      />
      <span className={styles.customCheckbox} />
    </label>
  );
}

export default Check;
