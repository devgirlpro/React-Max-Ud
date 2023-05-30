import React from "react";
import ExpenceItem from "./ExpenceItem";
import "./Expence.css";

function Expence() {
    return (
        <div className="expenses">
            <ExpenceItem
                date={new Date(2021, 5, 12)}
                title="Car Insurance"
                amount={234.45}
            />
            <ExpenceItem
                date={new Date(2021, 9, 19)}
                title="Home Insurance"
                amount={120567}
            />
            <ExpenceItem
                date={new Date(2020, 12, 12)}
                title="Health Insurance"
                amount={345.67}
            />
            <ExpenceItem
                date={new Date(2020, 4, 20)}
                title="Car Insurance"
                amount={678.78}
            />
        </div>
    );
}

export default Expence;
