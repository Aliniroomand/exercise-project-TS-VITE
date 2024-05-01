import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";


const App = () => {
  const[viewCart,setViewCart]=useState<boolean>(false)

  const pageContet=viewCart ? <Cart/> : <ProductList/>

  return (
  <>
    <Header viewCart={viewCart} setViewCart={setViewCart}/>
    {pageContet}
    <Footer viewCart={viewCart}/>
  </>
  );
};

export default App;