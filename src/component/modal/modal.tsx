import Close from '@/component/shared/svg/Close';
import { ModalProps } from '@/interfaces/modal';
import styles from './styles.module.scss';
import ProfileSuggestionCard from './profileCard/index';
import EventsTab from './eventTab';

export default function Modal({
  isOpen,
  onClose,
  personName,
  personLocation,
  personTitle,
  personCompany,
  companyScore,
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
          score={companyScore}
        />
        <EventsTab score={companyScore} />
        {children}
      </div>
    </div>
  );
}
