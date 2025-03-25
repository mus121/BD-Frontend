import Sidebar from '@/components/suggestedProfile/sideBar';
import styles from './styles.module.scss';
import SelectOption from '@/components/suggestedProfile/selectOption';
import Search from '@/components/suggestedProfile/search';
import Filter from '@/components/suggestedProfile/filter';
import PeopleCard from '@/components/suggestedProfile/peopleCard/profileCard';

export default function () {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.expandNetwork}>
        <div className={styles.container}>
          <div className={styles.network}>
            <h2 className={styles.exploreNetwork}>Grow Your Professional Network</h2>
            <p className={styles.paragraph}>
              Here are profiles that match your professional vision.
            </p>
          </div>
        </div>
        <div className={styles.selectedContanier}>
          <SelectOption />
          <div className={styles.searchAndFilter}>
            <Search />
            <Filter />
          </div>
        </div>

        <div className={styles.profileCardContainer}>
          <PeopleCard />
        </div>
      </main>
    </div>
  );
}
