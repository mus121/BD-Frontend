import styles from './styles.module.scss';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image} />
      <div className={styles.rightContainer}>
        <div className={styles.name} />
        <div className={styles.description} />
      </div>
    </div>
  );
};

export default Card;
