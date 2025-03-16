import BussinessImpact from '@/component/shared/bussinessImpact';
import { ModalCard } from '@/interfaces/modal';
import styles from './styles.module.scss';
import Progress from './progress/index';
import AiProfiles from '../../shared/aiProfile/AiProfiles';

export default function ProfileSuggestionCard({
  personName,
  personLocation,
  personTitle,
  personCompany,
  score,
}: ModalCard) {
  return (
    <div className={styles.cardContainer}>
      <AiProfiles
        personName={personName}
        personLocation={personLocation}
        personTitle={personTitle}
        personCompany={personCompany}
      />
      <hr className={styles.separator} />
      <div className={styles.bussinessImpact}>
        <BussinessImpact />
        <Progress score={score} />
      </div>
    </div>
  );
}
