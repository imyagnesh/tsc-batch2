import React, { useCallback, useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/productsActions';
import Product from '../../components/Product';
import { CartContext } from '../../context/cartContext';
import { ProductsContext } from '../../context/productsContext';

function Home({ products: { loading, data, error }, loadData }) {
  const { loadProducts } = useContext(ProductsContext);
  const { cart, cartState, loadCart, updateCartItem, deleteCartItem, addToCart } =
    useContext(CartContext);

  // const loadData = useCallback(async () => {
  //   try {
  //     await Promise.all([loadProducts(), loadCart()]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // component did mount
  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <h1>Loading Products....</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-2">
      {data.map(product => {
        const cartItem = cart.find(item => item.productId === product.id);
        const isAdding = cartState.some(
          item => item.productId === product.id && item.type === 'add',
        );
        const isUpdating = cartState.some(
          item => item.productId === product.id && item.type === 'update',
        );

        return (
          <Product
            key={product.id}
            cartItem={cartItem}
            product={product}
            addToCart={addToCart}
            updateCartItem={updateCartItem}
            deleteCartItem={deleteCartItem}
            isAdding={isAdding}
            isUpdating={isUpdating}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => loadProducts()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
