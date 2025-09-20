import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store/shopping-cart-context.jsx';

export default function App() {
  
    // <CartContext.Provider>
    //   <Header
    //     cart={shoppingCart}
    //     onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
    //   />
    //   <Shop>
    //     {DUMMY_PRODUCTS.map((product) => (
    //       <li key={product.id}>
    //         <Product {...product} onAddToCart={handleAddItemToCart} />
    //       </li>
    //     ))}
    //   </Shop>
    // </CartContext.Provider>
    
  return(
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}