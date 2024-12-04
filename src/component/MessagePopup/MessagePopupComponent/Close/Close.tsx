import styles from './styles.module.scss';

function CloseButton({ onClick }: { onClick: () => void }) {
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
export default CloseButton;
