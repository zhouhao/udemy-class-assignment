import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };
    return (
        <Card className="expense">
            <ExpensesFilter select={filteredYear} onChangeFilter={filterChangeHandler}/>
            {
                props.items.map(it =>
                    <ExpenseItem
                        key={it.id}
                        title={it.title}
                        amount={it.amount}
                        date={it.date}
                    />
                )
            }
        </Card>
    );
};

export default Expenses;