import { DATA_FOR_COMMUNICATION } from '@/constants';
import TELEGRAM from '@assets/telegram.svg?react';
import styles from './style.module.css';

const Phones = ({ className, wide, icon = true }) => {
  let cl = className === 'column' && styles.column;
  cl = wide ? `${styles.wide} + ${cl}` : cl;
  return (
    <>
      {DATA_FOR_COMMUNICATION?.telephones?.length && (
        <ul className={`${styles.telephones} ${cl}`}>
          {DATA_FOR_COMMUNICATION.telephones.map((people, index) => {
            return (
              <li key={index}>
                {icon && (
                  <a
                    href={`https://telegram.me/${people.telegram}`}
                    target="_blank"
                    className={styles.telephones__messenger}
                  >
                    <TELEGRAM width={40} height={40} />
                  </a>
                )}
                <a
                  href={`tel:${people.phone}`}
                  target="_blank"
                  title="Позвонить"
                  aria-label={`Позвонить по номеру ${people.phone}`}
                >
                  {people.display}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Phones;
