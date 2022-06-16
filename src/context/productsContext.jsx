import React, { createContext, useCallback, useMemo, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    const res = await axiosInstance.get('660/products');
    setProducts(res);
  }, []);

  const value = useMemo(
    () => ({
      products,
      loadProducts,
    }),
    [products],
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}
