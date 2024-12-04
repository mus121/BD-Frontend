import styles from './styles.module.scss';
import TertiaryButton from '../../button/TertiaryButton/index';

type NewsProps = {
  date: string;
  buttonText: string;
  title: string;
  onButtonClick?: () => void; // Optional callback for the button
};

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
