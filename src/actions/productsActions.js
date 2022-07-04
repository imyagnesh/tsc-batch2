import axiosInstance from '../utils/axiosInstance';

export const loadProducts = () => async dispatch => {
  dispatch({ type: 'LOAD_PRODUCTS_REQUEST' });
  try {
    const res = await axiosInstance.get('660/products');
    dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: res });
  } catch (error) {
    dispatch({ type: 'LOAD_PRODUCTS_FAIL', payload: error });
  }
};

export const a = 1;
