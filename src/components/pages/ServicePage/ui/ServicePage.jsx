import { useParams } from 'react-router-dom';
import { SERVICES_LIST } from '@/constants';
import styles from './style.module.css';

const ServicePage = () => {
  const { pageId } = useParams();
  const data = SERVICES_LIST?.filter(({ url }) => url.replace('/', '') == pageId);
  const { ageCategory, mainImage, title, price, priceSinglePayment, priceAbonement, page } = data[0];

  return (
    <>
      <section className={styles.service_page}>
        <div className={`${styles.service_page__inner} container`}>
          <h2 className={styles.service_page__title}>{title}</h2>
          <div className={styles.service_page__image}>
            <img src={mainImage} alt="" width={410} height={450} />
          </div>
          <div className={styles.service_page__info}>
            <h2 className={`${styles.service_page__title} ${styles.service_page__title_info}`}>{title}</h2>
            <div className={styles.service_page__subtitle}>
              <p>{ageCategory}</p>
              {/*  <div className={styles.service_page__subtitle_prices}>
                {price && <p>{price} ₽</p>}
                {priceSinglePayment && <p>{priceSinglePayment} ₽</p>}
                {priceAbonement && <p>{priceAbonement} ₽</p>}
              </div> */}
            </div>
            <div className={styles.service_page__description}>
              {page.description?.map((elem, ind) => (
                <p key={ind}>{elem}</p>
              ))}
            </div>
          </div>
        </div>
        {page.goals && (
          <div className={styles.service_page__goals}>
            <div className={`${styles.service_page__goals_inner} container`}>
              <h2 className={styles.service_page__goals_title}>{page.goals_title && page.goals_title}</h2>
              <ul className={styles.service_page__goals_list}>
                {page.goals?.map(({ title, subtitle }, ind) => {
                  return (
                    <li key={ind} className={styles.service_page__goals_item}>
                      {title}
                      <span>{subtitle}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ServicePage;
