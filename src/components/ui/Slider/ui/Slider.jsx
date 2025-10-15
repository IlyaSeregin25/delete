import ARROW_RIGHT from '@assets/arrow-right-circle.svg?react';
import ARROW_LEFT from '@assets/arrow-left-circle.svg?react';
import { DATA_FOR_COMMUNICATION } from '@/constants';
import styles from './style.module.css';

const Slider = ({ setCurrentPhoto, currentPhoto }) => {
  const { address, id } = currentPhoto;

  function changePhoto(num) {
    if (num >= 0 && DATA_FOR_COMMUNICATION.addresses[address].photos.length - 1 >= num) {
      setCurrentPhoto({ address, id: num });
    }
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider__navigation}>
        <button
          className={styles.slider__btn_left}
          disabled={id <= 0 ? true : false}
          onClick={() => changePhoto(id - 1)}
        >
          <ARROW_LEFT width={40} height={40} />
        </button>
        <button
          className={styles.slider__btn_right}
          disabled={id >= DATA_FOR_COMMUNICATION.addresses[address].photos.length - 1 ? true : false}
          onClick={() => changePhoto(id + 1)}
        >
          <ARROW_RIGHT width={40} height={40} />
        </button>
      </div>
      <div className={styles.slider__content}>
        <img src={DATA_FOR_COMMUNICATION.addresses[address].photos[id].src} alt="" />
      </div>
    </div>
  );
};

export default Slider;
