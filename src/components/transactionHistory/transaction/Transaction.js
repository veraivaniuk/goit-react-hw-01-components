import PropTypes from 'prop-types'; 

export default function TransactionHistory ({id, type, amount, currency}) {
    return (
        <tr key = {id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
    );
}

TransactionHistory.prototype = {
    key: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}
