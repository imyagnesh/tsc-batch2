import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider, { ThemeContext } from './context/themeContext';
import AuthLayout from './layouts/authLayout';
import MainLayout from './layouts/mainLayout';
// import Categories from './pages/Categories/categories';
// import Favorites from './pages/Favorites/favorites';
// import Home from './pages/Home/home';
// import Login from './pages/Login/login';
// import Products from './pages/Products/products';
// import Register from './pages/Register/register';

const Categories = lazy(() => import('./pages/Categories/categories'));
const Favorites = lazy(() => import('./pages/Favorites/favorites'));
const Home = lazy(() => import('./pages/Home/home'));
const Login = lazy(() => import('./pages/Login/login'));
const Products = lazy(() => import('./pages/Products/products'));
const Register = lazy(() => import('./pages/Register/register'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
