import { DATA_FOR_COMMUNICATION } from '@/constants';
import VKONTAKTE from '@assets/vk.svg?react';
import TELEGRAM from '@assets/telegram.svg?react';
import styles from './style.module.css';

const Socials = () => {
  const { vk, telegram } = DATA_FOR_COMMUNICATION.socials;
  return (
    <>
      {DATA_FOR_COMMUNICATION?.socials && (
        <ul className={styles.soc1als_list}>
          {vk && (
            <>
              <li key={vk.path}>
                <a href={vk.path} target="_blank" className={styles.soc1als__link}>
                  <VKONTAKTE width={40} height={40} />
                  Вконтакте
                </a>
              </li>
              <li key={telegram.path}>
                <a href={telegram.path} target="_blank" className={styles.soc1als__link}>
                  <TELEGRAM width={40} height={40} />
                  Телеграм
                </a>
              </li>
            </>
          )}
        </ul>
      )}
    </>
  );
};

export default Socials;
