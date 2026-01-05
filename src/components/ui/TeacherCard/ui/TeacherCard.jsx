import styles from './style.module.css';

const TeacherCard = ({ data }) => {
  const { title, ageCategory, mainImage } = data;

  return (
    <article className={styles.card}>
      <div className={styles.card__img_wrapper}>
        <img src={mainImage} alt={title} className={styles.card__img} loading="lazy" />
      </div>
      <section className={styles.card__description}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__subtitle}>{ageCategory}</p>
      </section>
    </article>
  );
};

export default TeacherCard;
