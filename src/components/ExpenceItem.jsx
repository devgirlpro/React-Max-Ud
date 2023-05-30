import React from "react";
import "./ExpenceItem.css";

function ExpenceItem(props) {
/*     const ExpenceDate = props.ExpenceDate;
    const expenceTitle = props.expenceTitle;
    const ExpenceAmount = props.ExpenceAmount; */

    return (
        <div className="expense-item">
            <div>{props.ExpenceDate}</div>
            <div className="expense-item__description">
                <h2>{props.expenceTitle}</h2>
                <div className="expense-item__price">{props.ExpenceAmount}</div>
            </div>
        </div>
    );
}

export default ExpenceItem;
