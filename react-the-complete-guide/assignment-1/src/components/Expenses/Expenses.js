import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <Card className="expense">
            {
                props.items.map(it =>
                    <ExpenseItem
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