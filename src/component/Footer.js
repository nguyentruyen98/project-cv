import React from 'react'
import '../css/footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
function Footer() {
  return (
    <div className = 'footer'>
        <div className="footer__conten">
          <h2 className = 'footer__header'>Công ty</h2>
          <p>Giới Thiệu Về Routine</p>
          <p>Giới Thiệu Về Routine</p>
          <p>Giới Thiệu Về Routine</p>
          <p>Giới Thiệu Về Routine</p>
        </div>
        <div className="footer__conten">
          <h2 className = 'footer__header'>Chính Sách Khách Hàng</h2>
          <p>Chính Sách Khách Hàng Thân Thiết</p>
          <p>Chính Sách Khách Hàng Thân Thiết</p>
          <p>Chính Sách Khách Hàng Thân Thiết</p>
          <p>Chính Sách Khách Hàng Thân Thiết</p>
        </div>
        <div className="footer__conten">
          <h2 className = 'footer__header'>Kết nối với Routine</h2>
          <div className="footer__icon">
            <FacebookIcon fontSize='large'></FacebookIcon>
            <InstagramIcon fontSize='large'></InstagramIcon>
            <YouTubeIcon fontSize='large'></YouTubeIcon>
            <PinterestIcon fontSize='large'></PinterestIcon>
          </div>
          <img className = 'footer__img' src="http://theme.hstatic.net/1000341789/1000533258/14/logo-bct.png?v=259" alt=""/>
        </div>
        <div className="footer__conten">
          <h2 className = 'footer__header'>Thông Tin Cửa Hàng</h2>
          <p>Chính Sách Khách Hàng Thân Thiết</p>
          <p>Chính Sách Khách Hàng Thân Thiết</p>
          <p>Chính Sách Khách Hàng Thân Thiết</p>
          <p>Chính Sách Khách Hàng Thân Thiết</p>
        </div>
        
    </div>
  )
}

export default Footer
