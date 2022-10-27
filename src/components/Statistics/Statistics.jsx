import { getRandomHexColor } from '../../utils/getRandomHexColor';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(el => {
          return (
            <li
              className={styles.item}
              key={el.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
