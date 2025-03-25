import styles from './styles.module.scss';
import ProfileSegments from './labels/index';

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <ProfileSegments />
    </aside>
  );
};

export default Sidebar;
