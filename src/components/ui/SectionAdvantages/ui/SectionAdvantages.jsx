import { NavLink } from 'react-router-dom';
import AdvantagesList from '../../AdvantagesList';
import ARROW_RIGHT_UP from '@assets/arrow-right-up.svg?react';
import { PATHS } from '@/constants';
import BG from '@assets/bg2.jpg';
import BG_900 from '@assets/bg2_900.jpg';
import BG_600 from '@assets/bg2_600.jpg';
import styles from './style.module.css';

const SectionAdvantages = () => {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : null;
  let urlBg;
  if (windowWidth) {
    urlBg = BG;
    if (windowWidth <= 900) {
      urlBg = BG_900;
    }
    if (windowWidth <= 600) {
      urlBg = BG_600;
    }
  }

  return (
    <>
      <section className={styles.advantages} style={{ backgroundImage: `url(${urlBg})` }} aria-labelledby="Advantages">
        <div className={`${styles.advantages__inner} container`}>
          <h2 className={styles.advantages__title} id="Advantages">
            Добро пожаловать в Детский развивающий центр «Теремок»!
          </h2>
          <p className={styles.advantages__subtitle}>
            Через игру развиваем интеллект, творческое мышление и мелкую моторику у детей от 1 до 7 лет
          </p>
          <div className={styles.advantages__wrapper}>
            <div className={styles.advantages__preview}>
              <div className={styles.advantages__preview_main}>
                <h3 className={styles.advantages__preview_title}>Наши преимущества:</h3>
                <div className={styles.advantages__preview_subtitle}>
                  <p>Наш «Теремок» — это удивительный мир, наполненный детскими голосами, играми, музыкой и смехом.</p>
                  <p>
                    Наш Главный принцип – получение удовольствия от игры, а через игру интересные и незабываемые знания.
                  </p>
                  <p>
                    Наше главное богатство - это наши педагоги, именно они прививают детям веру в себя, любовь к миру,
                    потребность задавать вопросы и узнавать новое.
                  </p>
                  <p>
                    У нас атмосфера семейного уюта и комфорта, которая дарят отличное настроение и помогает приобрести
                    новые знания, умения, навыки нашим малышам.
                  </p>
                </div>
                <div className={styles.advantages__preview_advantages}>
                  <AdvantagesList />
                </div>
                <NavLink to={PATHS.aboutUs} className={styles.advantages__preview_link}>
                  Подробнее о нас <ARROW_RIGHT_UP width={16} height={16} />
                </NavLink>
              </div>
            </div>
            <div className={styles.advantages__body}>
              <AdvantagesList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionAdvantages;
