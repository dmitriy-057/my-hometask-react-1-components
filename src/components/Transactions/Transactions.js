import React from "react";
import "./Transactions.css";

function Transactions({items}) {
    return (
        <table className="transactionHistory">
        <thead className="head">
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
        {items.map(({id,type,amount,currency})=> {
        return (
        <tr key={id} className="tr">
            <td className="td">{amount}</td>
            <td className="td">{currency}</td>
            <td className="td">{type}</td>
        </tr>
        )
        })}
        </tbody>
      </table> 
    )
}
export default Transactions;