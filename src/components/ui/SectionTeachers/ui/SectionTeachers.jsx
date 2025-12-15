import TeacherCard from '@/components/ui/TeacherCard';
import { OUR_TEAM } from '@/constants';
import styles from './style.module.css';

const SectionTeachers = () => {
  return (
    <section className={styles.teachers} aria-labelledby="teachers-title">
      <div className={`${styles.teachers__inner} container`}>
        <h2 className={styles.teachers__title} id="teachers-title">
          Наши педагоги
        </h2>
        <ul className={styles.teachers__list}>
          {OUR_TEAM.teachers_list?.map(teacher => {
            return (
              <li key={teacher.id} className={styles.teachers__item}>
                <TeacherCard data={teacher} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionTeachers;
