import styles from './styles.module.scss';

type CustomCloseButtonProps = {
  closeToast: () => void;
};

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
