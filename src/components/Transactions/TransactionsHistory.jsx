import PropTypes from 'prop-types';
import css from 'components/Transactions/Transactions.module.css'

export default function TransactionsHistory ({items}){
    return (
    <table className={css.transaction}>
      <thead className={css.transaction_title}>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      {items.map(item=>( 
      <tbody key={item.id}>
        <tr>
          <td className={css.list}>{item.type}</td>
          <td className={css.list}>{item.amount}</td>
          <td className={css.list}>{item.currency}</td>
        </tr>
      </tbody>
      ))}
    </table>
    )
};

TransactionsHistory.poropTypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            amount:PropTypes.number.isRequired,
            currency:PropTypes.string.isRequired,
        })
    )
};