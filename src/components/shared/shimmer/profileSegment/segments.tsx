import styles from './styles.module.scss';
import CardSegments from './cardSegment/cardSegments';
const Segments = () => {
  return (
    <div className={styles.container}>
      <CardSegments />
      <CardSegments />
      <CardSegments />
      <CardSegments />
      <CardSegments />
    </div>
  );
};

export default Segments;
