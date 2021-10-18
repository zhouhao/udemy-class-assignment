import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const addNewExpenseHandler = () => {
        setShowExpenseForm(true);
    };

    const hideFormHandler = () => {
        setShowExpenseForm(false);
    };

    return (
        <div className="new-expense">
            {showExpenseForm ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormHandler}/> :
                <button onClick={addNewExpenseHandler}>Add New Expense</button>
            }
        </div>
    );
};

export default NewExpense;