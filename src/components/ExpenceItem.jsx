import React from "react";
import './ExpenceItem.css';

function ExpenceItem() {
    return (
        <div className="expense-item ">
            <div>March 28th 2022</div>
            <div className="expense-item__description">
                <h2>Care insurance</h2>
                <div className="expense-item__price">2580 €</div>
            </div>
        </div>
    );
}

export default ExpenceItem;
