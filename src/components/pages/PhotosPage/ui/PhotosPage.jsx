import Gallery from '@/components/ui/Gallery';
import { DATA_FOR_COMMUNICATION, SHARED_PHOTOS } from '@/constants';
import styles from './style.module.css';

const PhotosPage = () => {
  const { addresses } = DATA_FOR_COMMUNICATION;

  return (
    <section className={styles.photos_page} aria-labelledby="photos-title">
      <div className={`${styles.photos_page__inner} container`}>
        <header className={styles.photos_page__header}>
          <h2 className={styles.photos_page__title} id="photos-title">
            Наш фотоальбом
          </h2>
          <p className={styles.photos_page__subtitle}>
            Насладитесь атмосферой веселья и вдохновения на фотографиях наших мероприятий. Увидите счастливые лица
            малышей и увлечённых педагогов, почувствуйте радость каждого мгновения, проведенного в нашем центре детского
            развития.
          </p>
        </header>
        <div className={styles.photos_page__gallery}>
          <div className={styles.gallery}>
            {addresses.length &&
              addresses.map(({ show, address, photos, video }, ind) => {
                if (!show) return null;
                return (
                  <div key={ind} className={styles.gallery__item}>
                    <h4 className={styles.gallery__item_title}>{address}</h4>
                    <Gallery data={photos} theme="night" />
                    <div className={styles.gallery__item_video}>
                      <div className={styles.gallery__item_video_box}>
                        <p>Видео загружается</p>
                        <iframe
                          src={video}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                );
              })}
            {SHARED_PHOTOS.length && (
              <div className={styles.gallery__item}>
                <h4 className={styles.gallery__item_title}>Жизнь Теремка</h4>
                <Gallery data={SHARED_PHOTOS} theme="night" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosPage;
