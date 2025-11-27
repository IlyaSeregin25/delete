import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Phones = props => {
  const { className, title, children, to = '/', target = '_self' } = props;
  return (
    <Link to={to} className={`${styles.button} ${styles[className]}`} title={title} aria-label={title} target={target}>
      {children}
    </Link>
  );
};

export default Phones;
