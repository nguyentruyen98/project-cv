import React from 'react';
import './App.css';
import TopHeader from './component/TopHeader';
import Header from './component/Header';
import Menu from './component/Menu';
import Banner from './component/Banner';
import Title from './component/Title';
import NewCollections from './component/NewCollections'
import NewProducts from './component/NewProducts'
import Register from './component/Register'
import Footer from './component/Footer';
import routes from './routes.js';
import TemporaryDrawer from './component/Drawer'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
      $("#onTopButton").fadeIn(1000)

    } else {
      $("#onTopButton").fadeOut(1000)

    }
    position = scroll;
  });
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 16);
    }
  };
  return (
    <Router>
      <TopHeader></TopHeader>
      <Header></Header>
      <Menu></Menu>
      <Switch>
        {routes?.map((route, index) => <Route path={route.path} exact={route.exact} component={route.main}></Route>)
        }
      </Switch>
      <ArrowUpwardIcon style={{ fontSize: 40 }} className='onTopButton' id="onTopButton" onClick={scrollToTop}></ArrowUpwardIcon>

      <Register></Register>
      <Footer></Footer>
    </Router>
  );
}

export default App;
