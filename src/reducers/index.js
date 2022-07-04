import { combineReducers } from 'redux';
import locale from './localeReducer';
import theme from './themeReducer';
import products from './productsReducer';

export default combineReducers({ locale, theme, products });
