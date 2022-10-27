import styles from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem/TransactionItem';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.cell}>Type</th>
          <th className={styles.cell}>Amount</th>
          <th className={styles.cell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ amount, currency, type, id }) => {
          return (
            <TransactionItem
              amount={amount}
              currency={currency}
              type={type}
              key={id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
