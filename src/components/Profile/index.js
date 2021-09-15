import React from 'react';
import './index.css';
import profileimg from '../../assets/img/main-photo.svg';

const Profile = () => {
  return (
    <div class="header box">
      <div class="header__left">
        <div class="header__photo">
          <img class="header__photo-img" src={profileimg} alt="Ronald Robertson" />
        </div>
        <div class="header__base-info">
          <h4 class="title titl--h4">Ronald Robertson</h4>
          <div class="status">Creative Director</div>
          <ul class="header__social">
            <li><a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="header__right">
        <ul class="header__contact">
          <li><span class="overhead">Email</span>ronald@example.com</li>
          <li><span class="overhead">Phone</span>+1 (070) 123–8459</li>
        </ul>
        <ul class="header__contact">
          <li><span class="overhead">Birthday</span>17 March, 1995</li>
          <li><span class="overhead">Location</span>San-Francisco, USA</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;