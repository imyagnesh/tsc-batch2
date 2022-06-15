import React, { useCallback, useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Reviews from '../../components/Reviews';
import { AuthContext } from '../../context/authContext';
import { currency } from '../../utils';
import axiosInstance from '../../utils/axiosInstance';

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);

  const loadData = useCallback(async () => {
    try {
      const res = await Promise.all([
        axiosInstance.get('660/products'),
        axiosInstance.get('660/cart'),
      ]);
      setProducts(res[0]);
      setCart(res[1]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addToCart = useCallback(async product => {
    try {
      // object of cart
      const res = await axiosInstance.post('http://localhost:3000/660/cart', {
        productId: product.id,
        quantity: 1,
        userId: user.user.id,
      });
      // added cart object into existing array
      setCart(val => [...val, res]);
    } catch (error) {}
  }, []);

  const updateCart = useCallback(async cartItem => {
    try {
      const res = await axiosInstance.put(
        `http://localhost:3000/660/cart/${cartItem.id}`,
        cartItem,
      );
      setCart(val => {
        const index = val.findIndex(x => x.id === cartItem.id);
        return [...val.slice(0, index), res, ...val.slice(index + 1)];
      });
    } catch (error) {}
  });

  // component did mount
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="max-w-7xl mx-auto px-2">
      {products.map(product => {
        const cartItem = cart.find(item => item.productId === product.id);
        return (
          <div
            key={product.id}
            className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8 py-4"
          >
            <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden col-span-3">
              <img src={product.image} alt={product.title} className="object-center object-cover" />
            </div>
            <div className="col-span-9 flex flex-col h-full">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.title}</h2>

              <section aria-labelledby="information-heading" className="mt-2 flex-1">
                <h3 id="information-heading">{product.description}</h3>

                <p className="text-2xl text-gray-900">{currency(product.price)}</p>

                <Reviews {...product.rating} />
              </section>

              {cartItem ? (
                <div className="flex items-center py-4">
                  <Button
                    type="button"
                    className="flex-1"
                    onClick={() => updateCart({ ...cartItem, quantity: cartItem.quantity + 1 })}
                  >
                    +
                  </Button>
                  <p className="text-2xl text-center font-bold flex-1">{cartItem.quantity}</p>
                  <Button
                    type="button"
                    className="flex-1"
                    onClick={() => updateCart({ ...cartItem, quantity: cartItem.quantity - 1 })}
                  >
                    -
                  </Button>
                </div>
              ) : (
                <Button onClick={() => addToCart(product)}>Add to bag</Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
