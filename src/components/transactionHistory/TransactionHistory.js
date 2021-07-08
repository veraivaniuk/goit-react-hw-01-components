import s from './TransactionHistory.module.css'
import Transaction from "./transaction/Transaction";


export default function TransactionHistory ({items}) {
    return (<table className={s.transaction}>
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({id, type, amount, currency}) => 
                        (<Transaction 
                            key={id} 
                            type={type} 
                            amount={amount} 
                            currency={currency} 
                        />)
                    )}
                </tbody>
        </table>);
};