import Close from '@/component/shared/svg/Close';
import { ModalProps } from '@/types/TModal';
import styles from './styles.module.scss';
import ProfileSuggestionCard from './ProfileSuggestionCard/index';
import EventsTab from './EventsTab';

function Modal({
  isOpen,
  onClose,
  personName,
  personLocation,
  personTitle,
  personCompany,
  score,
  roleDescription,
  title_reasoning,
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
        <ProfileSuggestionCard
          personName={personName}
          personLocation={personLocation}
          personTitle={personTitle}
          personCompany={personCompany}
          score={score}
        />
        <EventsTab
          score={score}
          roleDescription={roleDescription}
          title_reasoning={title_reasoning}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
