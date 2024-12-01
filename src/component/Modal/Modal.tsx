import styles from './styles.module.scss';
import Close from '@/component/common/svg/Close';
import SuggestModalCard from './SuggesModalCard/index';
import EventsTab from './EventsTab';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.Modal}>
        <div className={styles.ModalContent}>
          <span
            className={styles.Closeicon}
            onClick={onClose}
          >
            <Close size={24} />
          </span>
          <SuggestModalCard />
          <EventsTab />
        </div>
      </div>
    </>
  );
};

export default Modal;
