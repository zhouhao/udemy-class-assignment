import style from "./Header.module.css";
import image from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header className={style.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={style['main-image']}>
                <img src={image} alt="Delicious food"/>
            </div>
        </>
    );
};

export default Header;