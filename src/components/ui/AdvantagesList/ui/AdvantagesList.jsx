import { ADVANTAGES_LIST } from '@/constants';
import CHECK_MARK from '@assets/check-mark.svg?react';
import styles from './style.module.css';

const AdvantagesList = () => {
  return (
    <ul className={styles.advantages_list}>
      {ADVANTAGES_LIST?.length &&
        ADVANTAGES_LIST.map((advantages, index) => {
          return (
            <li key={index} className={styles.advantages_list__item}>
              <CHECK_MARK width={24} height={24} />
              {advantages}
            </li>
          );
        })}
    </ul>
  );
};

export default AdvantagesList;
