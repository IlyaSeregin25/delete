import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import SCROLL_UP from '@/assets/scroll_button_arrow_up.svg?react';
import styles from './style.module.css';

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.body}>
      <ScrollRestoration
      /* getKey={(location, matches) => {
          return location.pathname;
        }} */
      />
      <button className={showButton ? `${styles.scroll_btn} ${styles.show}` : styles.scroll_btn} onClick={scrollToTop}>
        <SCROLL_UP width="50" height="50" />
      </button>
      <header className={styles.body__header}>
        <Header />
      </header>
      <main className={styles.body__main}>
        <Outlet />
      </main>
      <footer className={styles.body__footer}>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Layout;
