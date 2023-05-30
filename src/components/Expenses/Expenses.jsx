import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses() {
    return (
        <Card className="expenses">
            <ExpenseItem
                date={new Date(2021, 5, 12)}
                title="Car Insurance"
                amount={234.45}
            />
            <ExpenseItem
                date={new Date(2021, 9, 19)}
                title="Home Insurance"
                amount={120567}
            />
            <ExpenseItem
                date={new Date(2020, 12, 12)}
                title="Health Insurance"
                amount={345.67}
            />
            <ExpenseItem
                date={new Date(2020, 4, 20)}
                title="Car Insurance"
                amount={678.78}
            />
        </Card>
    );
}

export default Expenses;
