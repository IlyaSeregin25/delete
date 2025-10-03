import Phones from '../../Phones';
import Socials from '../../Socials';
import styles from './style.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footer__inner} container`}>
        <h2 className={styles.footer__title}>Запишитесь на пробное занятие прямо сейчас!</h2>
        <span></span>
        <div className={styles.footer__info}>
          <div className={styles.footer__contacts}>
            <Phones clName={'column'} />
            <Socials />
          </div>
        </div>
        <p className={styles.footer__rights}>© 2013 Центр детского раннего развития “Теремок”</p>
      </div>
    </div>
  );
};

export default Footer;
