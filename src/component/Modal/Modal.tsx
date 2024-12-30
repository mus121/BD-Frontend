import Close from '@/component/common/svg/Close';
import styles from './styles.module.scss';
import SuggestModalCard from './SuggesModalCard/index';
import EventsTab from './EventsTab';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  personTitle: string;
  personCompany: string;
  personName: string;
  personLocation: string;
  score: number;
  roleDescription: any;
  reasoning: any;
  children?: React.ReactNode;
};

function Modal({
  isOpen,
  onClose,
  personName,
  personLocation,
  personTitle,
  personCompany,
  score,
  roleDescription,
  reasoning,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.close}>
          <button
            className={styles.closeIcon}
            onClick={onClose}
          >
            <Close size={24} />
          </button>
        </div>
        {/* SuggestModalCard */}
        <SuggestModalCard
          personName={personName}
          personLocation={personLocation}
          personTitle={personTitle}
          personCompany={personCompany}
          score={score}
        />
        <EventsTab
          score={score}
          roleDescription={roleDescription}
          reasoning={reasoning}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
