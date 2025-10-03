import React from 'react';
import styles from './style.module.css';

const MapIFrame = () => {
  return (
    <div className={styles.map_iframe}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5957337b1787c7cf6a323d9cf9408ffee12f4fa6ee453da912cce9771a492c96&amp;source=constructor"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default MapIFrame;
