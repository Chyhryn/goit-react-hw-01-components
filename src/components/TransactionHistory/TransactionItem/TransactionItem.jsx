import styles from './TransactionItem.module.css';
import PropTypes from 'prop-types';

export const TransactionItem = ({ amount, currency, type }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{type}</td>
      <td className={styles.cell}>{amount}</td>
      <td className={styles.cell}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
