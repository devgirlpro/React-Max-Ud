import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props) {
    return (
        <ul className="expenses-list">
            {props.items.length === 0 && <h2 className="expenses-list__fallback ">No Expense Found!</h2>}
            {props.items.length > 0 &&
                props.items.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
        </ul>
    );
}

export default ExpensesList;
