import { ReactElement } from "react"
import { ReducerActionType ,ReducerAction} from "../context/CartProvider"
import { ProductType } from "../context/ProductsProvider"
type PropsType ={
    product:ProductType,
    dispatch: React.Dispatch<ReducerAction>
    REDUCER_ACTIONS:ReducerActionType,
    inCart:boolean
}
const Product = ({product,dispatch,REDUCER_ACTIONS,inCart}:PropsType):ReactElement => {
    const imgSrc:string= new URL(`../images/${product.sku}.jpg`,import.meta.url).href
    
    const onAddToCart= ()=>dispatch({type:REDUCER_ACTIONS.ADD,payload:{...product,qty:1}})

    const itemInCart = inCart && ' → Item in Cart: ✔️' ;

    return (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={imgSrc} alt={product.name} className="product__img" />
            <p>{new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"}).format(product.price)
                }{itemInCart}
            </p>
            <button onClick={onAddToCart}>+ to Cart</button>
        </article>
    );
};

export default Product;