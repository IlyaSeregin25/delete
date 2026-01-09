import useFancybox from '@/hooks/useFancybox';
import styles from './style.module.css';

const Gallery = ({ data, loop = false, theme = 'night' }) => {
  const [fancyboxRef] = useFancybox({
    // Your custom options
    loop: loop, //Не работает, бесконечная прокрутка не отключается.
    theme: theme,
    hideScrollbar: false,
    Carousel: {
      Thumbs: { showOnStart: false },
      Toolbar: {
        display: {
          right: ['close'],
        },
      },
    },
  });

  return (
    <div className={styles.gallery} ref={fancyboxRef}>
      {data.length &&
        data.map(({ src }, index) => {
          return (
            <a data-fancybox="gallery__addresses_photos" href={src} key={index} className={styles.gallery__item}>
              <img src={src} alt="" className={styles.gallery__item_img} loading="lazy" />
            </a>
          );
        })}
    </div>
  );
};

export default Gallery;
