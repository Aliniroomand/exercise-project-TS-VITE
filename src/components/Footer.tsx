import { useContext } from "react";
import CartContext from "../context/CartProvider";

type PropsType = {
    viewCart: boolean,
}

const Footer = ({viewCart} :PropsType) => {

    const {totalItems,totalPrice}=useContext(CartContext);
    const year:number =new Date().getFullYear()

    return (
        <footer className="footer">
            {viewCart ?
                <p>Shopping Cart &copy; {year}</p>
            :(
                <>
                    <p>Total Items:{totalItems}</p>
                    <p>total Price:{totalPrice}</p>
                    <p>Shopping Cart &copy; {year}</p>
                </>
            )
            }
        </footer>
    );
};

export default Footer;