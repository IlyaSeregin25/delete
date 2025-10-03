import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { PHOTOS } from '@/constants';
import styles from './style.module.css';
import Slider from '@/components/ui/Slider';

const PhotosPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  function openPhoto(num) {
    setCurrentPhoto(num);
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
            {PHOTOS.length &&
              PHOTOS.map((photo, ind) => {
                return (
                  <div key={ind} className={styles.gallery__item}>
                    <img src={photo.src} alt="" className={styles.gallery__item_img} onClick={() => openPhoto(ind)} />
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
