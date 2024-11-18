import styles from './styles.module.scss';

interface CustomCloseButtonProps {
  closeToast: () => void;
}

export default function CustomCloseButton({ closeToast }: CustomCloseButtonProps) {
  return (
    <button
      onClick={closeToast}
      className={styles.Customclosebutton}
    >
      ✖
    </button>
  );
}
