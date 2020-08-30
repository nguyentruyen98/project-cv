import React from 'react';
import ProductsDetail from './component/ProductsDetail';
import QuanAo from './component/QuanAo';
import NewProducts from './component/NewProducts';
import MainPage from './component/MainPage';
import Login from './component/Login';
import RegisterPage from './component/RegisterPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: (match) => <MainPage match={match}></MainPage>
    },
    {
        path: '/newproducts',
        exact: true,
        main: (match) => <NewProducts match={match}></NewProducts>
    },
    {
        path: '/newproducts/:id',
        exact: true,
        main: (match) => <ProductsDetail match={match}></ProductsDetail>
    },
    {
        path: '/sellingproducts/:id',
        exact: true,
        main: (match) => <ProductsDetail match={match}></ProductsDetail>
    },
    {
        path: '/login',
        exact: true,
        main: () => <Login ></Login>
    },
    {
        path: '/register',
        exact: true,
        main: () => <RegisterPage ></RegisterPage>
    },
    {
        path: '/bosuutap',
        exact: false,
        main: () => <QuanAo></QuanAo>
    },

]
export default routes