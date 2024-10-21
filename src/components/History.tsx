import React from "react";

interface Transaction{
    amnt: number;
    type: "credit"| "debit";
    date: Date;
}

interface TransactionProps{
    transactions: Transaction[]
}

const History: React.FC<TransactionProps> = ({ transactions }) =>{
    return(
        <div>
            <h2>Transaction History:</h2>
            <div className="hs-content">
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Credit/Debit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.amnt}</td>
                                    <td>{transaction.date.toLocaleString()}</td>
                                    <td>{transaction.type}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} style={{ textAlign: 'center' }}>No transactions available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;