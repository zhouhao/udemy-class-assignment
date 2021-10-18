import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };

    const filteredExpenseList = props.items.filter(it => {
        console.log(it.date.getFullYear());
        return it.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expense">
            <ExpensesFilter select={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filteredExpenseList}/>
        </Card>
    );
};

export default Expenses;