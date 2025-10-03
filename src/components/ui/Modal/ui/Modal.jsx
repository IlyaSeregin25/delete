import styles from './style.module.css';

const Modal = ({ children, active, setActive }) => {
  active ? document.body.classList.add('lock') : document.body.classList.remove('lock');
  return (
    <div className={`${styles.modal} ${active ? styles.modal_active : ''}`} onClick={() => setActive(false)}>
      <button className={styles.modal__btn_close} onClick={() => setActive(false)}></button>
      <div className={styles.modal__body} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
