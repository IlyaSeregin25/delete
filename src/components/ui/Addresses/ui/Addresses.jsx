import React from 'react';
import { DATA_FOR_COMMUNICATION } from '@/constants';
import styles from './style.module.css';

const Addresses = ({ withImage }) => {
  return (
    <div className={styles.addresses}>
      {DATA_FOR_COMMUNICATION?.addresses?.length && (
        <ul className={`${styles.addresses__list} ${withImage && styles.addresses__list_images}`}>
          {DATA_FOR_COMMUNICATION.addresses.map(({ address, img }, index) => {
            return !withImage ? (
              <li key={index}>{address}</li>
            ) : (
              <li key={index}>
                <p>{address}</p>
                <img src={img} alt="" width={350} height={350} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Addresses;
