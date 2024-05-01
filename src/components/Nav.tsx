import { PropsType } from "./Header";

const Nav = ({viewCart,setViewCart}:PropsType) => {
    const buttonText= viewCart ? "show Products" : "show Cards" ;

    return (
    <nav className="nav">
        <button onClick={()=>{setViewCart(prev=>!prev)}}>{buttonText}</button>
        
    </nav>
    );
};

export default Nav;