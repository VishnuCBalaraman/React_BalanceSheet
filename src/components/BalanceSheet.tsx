import React, { useState } from "react";
import History from "./History";


const BalanceSheet: React.FC = () => {
    const [totalAmnt, setTotalAmnt] = useState<number>(0);
    const [amnt, setAmnt] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<"credit" | "debit">("credit");
    const [transactions, setTransactions] = useState<any[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value as "credit" | "debit");
    };

    const handleTransaction = () => {
        if (amnt < 10 || amnt > 500) {
            alert("Amount must be between 10 and 500.");
            return;
        }

        if (selectedOption === "credit") {
            setTotalAmnt(prev => prev + amnt);
        } else if(selectedOption === "debit" && amnt<totalAmnt) {
            setTotalAmnt(prev => prev - amnt);
        }

        const newTransaction = {
            amnt,
            type: selectedOption,
            date: new Date().toLocaleString(), 
        };

  
        setTransactions(prev => [...prev, newTransaction]);

        setAmnt(0);
    };

    return (
        <div className="balancesheet">
            <h1>Balance Sheet</h1>
            <h2>Total Amount: ${totalAmnt.toLocaleString()}</h2>
            <div className="transaction-form">
                <label>
                    Select Credit/Debit:
                    <select value={selectedOption} onChange={handleChange} className="dropdown">
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                </label>
                
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amnt}
                        onChange={(e) => setAmnt(Number(e.target.value))}
                        max={500}
                        min={10}
                        placeholder="Enter amount"
                        className="amount-input"
                    />
                </label>

                <button onClick={handleTransaction} className="proceed-button">Proceed</button>
            </div>
            
            <div className="history-section">
                <History transactions={transactions} />
            </div>
        </div>
    );
};

export default BalanceSheet;


