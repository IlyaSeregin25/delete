import SectionServices from '@/components/ui/SectionServices';
import SectionAdvantages from '@/components/ui/SectionAdvantages';
import styles from './style.module.css';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <SectionAdvantages />
      <SectionServices />
    </div>
  );
};

export default MainPage;
