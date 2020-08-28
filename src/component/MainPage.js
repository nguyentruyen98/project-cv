import React from 'react';
import TopHeader from './../component/TopHeader';
import Header from './../component/Header';
import Menu from './../component/Menu';
import Banner from './../component/Banner';
import Title from './../component/Title';
import NewCollections from './../component/NewCollections'
import NewProducts from './../component/NewProducts'
import Register from './../component/Register'
import Footer from './../component/Footer';

function MainPage() {
  return (
    <div className="App">
      {/* <TopHeader></TopHeader>
        <Header></Header> */}
      {/* <Menu></Menu> */}
      <Banner></Banner>
      <Title title='Bộ Sưu Tập Mới'></Title>
      <NewCollections></NewCollections>
      <Title title='SẢN PHẨM MỚI'></Title>
      <NewProducts type='newproducts'></NewProducts>
      <Title title='SẢN PHẨM BÁN CHẠY'></Title>
      <NewProducts type='sellingproducts'></NewProducts>

      {/* <NewProducts></NewProducts>
        <NewProducts></NewProducts> */}

    </div>
  );
}

export default MainPage;
