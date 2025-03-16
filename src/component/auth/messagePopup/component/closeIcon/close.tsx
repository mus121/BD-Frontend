import styles from './styles.module.scss';

export default function Close({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.closeBack}>
      <button
        type='button'
        className={styles.closeButton}
        onClick={onClick}
      >
        ×
      </button>
    </div>
  );
}
