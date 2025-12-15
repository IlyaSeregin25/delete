import BG from '@assets/main-bg.jpg';
import ANIMAL from '@assets/animal.png';
import Button from '@/components/ui/Button';
import styles from './style.module.css';
import { BUTTONS } from '@/constants';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <section className={styles.main_banner}>
        <div className={styles.main_banner__bg}>
          <img src={BG} alt="" />
        </div>
        <div className={`${styles.main_banner__content} container`}>
          <div className={styles.main_banner__content_info}>
            <p className={styles.main_banner__content_subtitle}>
              Групповые развивающие занятия а также индивидуальные консультации
            </p>
            <h2 className={styles.main_banner__content_title}>Приглашаем детей и их родителей</h2>
          </div>
          <div className={styles.main_banner__content_links}>
            <img src={ANIMAL} alt="" width={100} height={80} />
            {BUTTONS.map((button, ind) => {
              return (
                <Button key={ind} className="type_1" title={button.name} to={button.path}>
                  {button.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
