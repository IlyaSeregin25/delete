import styles from './style.module.css';

const ServiceCard = ({ data }) => {
  const { title, ageCategory, mainImage, price, priceSinglePayment, priceAbonement } = data;

  return (
    <article className={styles.card}>
      <div className={styles.card__img_wrapper}>
        <img src={mainImage} alt={title} className={styles.card__img} loading="lazy" />
      </div>
      <section className={styles.card__description}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__age_category}>{ageCategory}</p>
        <div className={styles.card__prices}>
          {price && <p>{price} ₽</p>}
          {priceSinglePayment && <p>{priceSinglePayment} ₽</p>}
          {priceAbonement && <p>{priceAbonement} ₽</p>}
        </div>
      </section>
    </article>
  );
};

export default ServiceCard;
