import ServiceCard from '@components/ui/ServiceCard';
import { SERVICES_LIST } from '@/constants';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

const SectionServices = () => {
  return (
    <section className={styles.services} aria-labelledby="services-title">
      <div className={`${styles.services__inner} container`}>
        <h2 className={styles.services__title} id="services-title">
          Наши программы
        </h2>
        <ul className={styles.services__list}>
          {SERVICES_LIST?.map(service => {
            return (
              <li key={service.id} className={styles.services__item}>
                <Link to={service.url} className={styles.services__link}>
                  <ServiceCard data={service} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionServices;
