import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        console.log("Expenses.js =>", selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    /*    let expenseContent = <h2>No Expense Found!</h2>;
    
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ));
    } */

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onchangeFilter={filterChangeHandler}
                />

                {/* {expenseContent} */}

                {filteredExpenses.length === 0 && <h2>No Expense Found!</h2>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((item) => (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    ))}

                {/*    {filteredExpenses.length === 0 ? (
                    <h2>No Expense Found!</h2>
                ) : (
                    filteredExpenses.map((item) => (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    ))
                )} */}
            </Card>
        </div>
    );
};

export default Expenses;
