import BussinessImpact from '@/component/shared/BussinessImpact';
import styles from './styles.module.scss';
import Progress from './Progress/index';
import AiProfiles from '../../shared/AiProfiles/AiProfiles';

function SuggestModalCard({
  personTitle,
  personCompany,
  score,
}: {
  personTitle: string;
  personCompany: string;
  score: number;
}) {
  return (
    <div className={styles.cardContainer}>
      <AiProfiles
        personTitle={personTitle}
        personCompany={personCompany}
      />
      <hr className={styles.separator} />
      <div className={styles.bussinessImpact}>
        <BussinessImpact score={score} />
        <Progress score={score} />
      </div>
    </div>
  );
}
export default SuggestModalCard;
