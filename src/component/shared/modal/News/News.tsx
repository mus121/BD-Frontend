import { NewsProps } from '@/interfaces/modal';
import styles from './styles.module.scss';
import TertiaryButton from '../../button/TertiaryButton/index';

function News({ date, buttonText, title, onButtonClick }: NewsProps) {
  return (
    <div className={styles.news}>
      <div className={styles.newsHead}>
        <h5>{title}</h5>
      </div>
      <div className={styles.eventDates}>
        <h5>{date}</h5>
        <p className={styles.borderLine} />
        <TertiaryButton
          type='button'
          text={buttonText}
          tertiaryButtonClassName={styles.readNow}
          colorVariant='orange'
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
}

export default News;
