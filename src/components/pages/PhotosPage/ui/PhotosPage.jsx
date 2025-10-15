import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import Slider from '@/components/ui/Slider';
import { DATA_FOR_COMMUNICATION } from '@/constants';
import styles from './style.module.css';

const PhotosPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({ address: 0, id: 0 });

  const { addresses } = DATA_FOR_COMMUNICATION;

  function openPhoto({ address, id }) {
    setCurrentPhoto({ address, id });
    setShowPhoto(true);
  }

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
              addresses.map(({ address, photos, video }, ind) => {
                return (
                  <div key={ind} className={styles.gallery__item}>
                    <h4 className={styles.gallery__item_text}>{address}</h4>
                    <div className={styles.gallery__item_photos}>
                      {photos?.length &&
                        photos.map(({ src }, index) => {
                          return (
                            <div
                              key={index}
                              className={styles.gallery__item_photo}
                              onClick={() => openPhoto({ address: ind, id: index })}
                            >
                              <img src={src} alt="" className={styles.gallery__item_img} loading="lazy" />
                            </div>
                          );
                        })}
                    </div>
                    <div className={styles.gallery__item_video}>
                      <div className={styles.gallery__item_video_box}>
                        <iframe src={video} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Modal active={showPhoto} setActive={setShowPhoto}>
        <Slider currentPhoto={currentPhoto} setCurrentPhoto={setCurrentPhoto} />
      </Modal>
    </section>
  );
};

export default PhotosPage;
