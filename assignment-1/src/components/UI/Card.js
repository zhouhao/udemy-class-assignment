const Card = (props) => {
    const className = "Card " + props.className;
    return (
        <div className={className}>
            {props.children}
        </div>
    );
};

export default Card;