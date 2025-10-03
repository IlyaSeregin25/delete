import { Link, NavLink } from 'react-router-dom';
import Phones from '../../Phones';
import Addresses from '../../Addresses';
import { PAGES } from '@/constants';
import LOGO from '@assets/logo.png';
import styles from './style.module.css';

const Header = () => {
  return (
    <div className={`${styles.header} `}>
      <div className={styles.header__top}>
        <div className={`${styles.header_top_line__inner} container`}>
          <div className={styles.header_top_line__box}>
            <Link
              to="/"
              className={styles.header_top_line__logo}
              title="Главная страница"
              aria-label="Главная страница"
            >
              <img src={LOGO} alt="true" width={300} height={100} />
            </Link>
            <div className={styles.header_top_line__contacts}>
              <Phones wide={'wide'} />
            </div>
          </div>
          <div className={styles.header_top_line__addresses}>
            <Addresses />
          </div>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <div className={`${styles.header__bottom_inner} container`}>
          <nav className={styles.header__menu}>
            <ul className={styles.menu__list}>
              {PAGES?.length &&
                PAGES.map((page, index) => {
                  return (
                    <li key={index} className={styles.menu__item}>
                      <NavLink to={page.path} className={props => (props.isActive ? styles.menu__item_active : '')}>
                        {page.name}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
