import { ReactElement, useContext } from 'react';
import { ProductsContext} from '../context/ProductsProvider'
import { UseProductsContextType } from '../context/ProductsProvider';
import CartContext, { useCartContextType } from '../context/CartProvider';
import Product from './Product';

const ProductList = () => {
    const useProducts:UseProductsContextType = useContext(ProductsContext);
    const useCart:useCartContextType = useContext(CartContext);
    const {dispatch,REDUCER_ACTIONS,cart}=useCart;
    const {products}=useProducts;
    
    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>
    
    if (products?.length) {
        pageContent=products.map(product=>{
                const inCart:boolean=cart.some(item=>item.sku === product.sku)
                return(
                    <Product
                    key={product.sku} 
                    product={product}
                        dispatch={dispatch}
                        REDUCER_ACTIONS={REDUCER_ACTIONS}
                        inCart={inCart}
                    />
                )
            })
            
        }
    return (
        <main className="main main--products">
            {pageContent}
        </main>
    );
};

export default ProductList;
