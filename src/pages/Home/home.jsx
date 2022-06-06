import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import axiosInstance from '../../utils/axiosInstance';

function Home() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  const loadProducts = useCallback(async () => {
    try {
      const res = await axiosInstance.get('660/products');
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  // component did mount
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}

export default Home;
