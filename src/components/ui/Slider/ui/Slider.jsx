import ARROW_RIGHT from '@assets/arrow-right-circle.svg?react';
import ARROW_LEFT from '@assets/arrow-left-circle.svg?react';
import styles from './style.module.css';
import { PHOTOS } from '@/constants';

const Slider = ({ setCurrentPhoto, currentPhoto }) => {
  function changePhoto(num) {
    if (num >= 0 && PHOTOS.length - 1 >= num) {
      setCurrentPhoto(num);
    }
  }
  return (
    <div className={styles.slider}>
      <div className={styles.slider__navigation}>
        <button
          className={styles.slider__btn_left}
          disabled={currentPhoto <= 0 ? true : false}
          onClick={() => changePhoto(currentPhoto - 1)}
        >
          <ARROW_LEFT width={40} height={40} />
        </button>
        <button
          className={styles.slider__btn_right}
          disabled={currentPhoto >= PHOTOS.length - 1 ? true : false}
          onClick={() => changePhoto(currentPhoto + 1)}
        >
          <ARROW_RIGHT width={40} height={40} />
        </button>
      </div>
      <div className={styles.slider__content}>
        <img src={PHOTOS[currentPhoto].src} alt="" />
      </div>
    </div>
  );
};

export default Slider;
