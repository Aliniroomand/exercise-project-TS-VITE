import { useContext } from "react";

//components
import Nav from "./Nav";
import CartContext from "../context/CartProvider";

export type PropsType ={
    viewCart:boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}
const Header = ({viewCart,setViewCart}:PropsType) => {
    const {totalItems,totalPrice}=useContext(CartContext);
    
    return (
        <header className="header">
            <div className="header__title-bar">
                <h1>Acme Co.</h1>
                <div className="header__price-box">
                    <p>total Items:{totalItems}</p>
                    <p>total Price:{totalPrice}</p>
                </div>
            </div>
                <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    );
};

export default Header;
