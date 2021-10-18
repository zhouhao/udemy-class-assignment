import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    }

    return (
        <ul className="expenses-list">
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
        </ul>
    );
};

export default ExpensesList;