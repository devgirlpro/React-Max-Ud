import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData)
    };
    const displayForm = () => {
      setShowForm(true);
      console.log(showForm)
  };
  const hideFormHandler = () => {
    setShowForm(false);
    console.log(showForm);
};
    return (
        <div className='new-expense'>
           {!showForm && (
                <button onClick={displayForm}>Add New Expecse</button>
            )}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormHandler}/>}
            
        </div>
    );
};

export default NewExpense;
