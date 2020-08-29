import React from 'react';
import Banner from './../component/Banner';
import Title from './../component/Title';
import NewCollections from './../component/NewCollections'
import NewProducts from './../component/NewProducts'


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
