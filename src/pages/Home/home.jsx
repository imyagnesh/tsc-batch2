import React, { useCallback, useContext, useEffect } from 'react';
import Product from '../../components/Product';
import { CartContext } from '../../context/cartContext';
import { ProductsContext } from '../../context/productsContext';

function Home() {
  const { products, loadProducts } = useContext(ProductsContext);
  const { cart, loadCart, updateCartItem, deleteCartItem, addToCart } = useContext(CartContext);

  const loadData = useCallback(async () => {
    try {
      await Promise.all([loadProducts(), loadCart()]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // component did mount
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="max-w-7xl mx-auto px-2">
      {products.map(product => {
        const cartItem = cart.find(item => item.productId === product.id);

        return (
          <Product
            key={product.id}
            cartItem={cartItem}
            product={product}
            addToCart={addToCart}
            updateCartItem={updateCartItem}
            deleteCartItem={deleteCartItem}
          />
        );
      })}
    </div>
  );
}

export default Home;
