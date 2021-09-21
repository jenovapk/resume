import React from 'react';
import './index.css';
import profileimg from '../../assets/img/main-photo.svg';

const Profile = () => {
  return (
    <div className="header box">
      <div className="header__left">
        <div className="header__photo">
          <img className="header__photo-img" src={profileimg} alt="Ronald Robertson" />
        </div>
        <div className="header__base-info">
          <h4 className="title titl--h4">Ronald Robertson</h4>
          <div className="status">Creative Director</div>
          <ul className="header__social">
            <li><a href="https://www.github.com"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="header__right">
        <ul className="header__contact">
          <li><span className="overhead">Email</span>ronald@example.com</li>
          <li><span className="overhead">Phone</span>+1 (070) 123–8459</li>
        </ul>
        <ul className="header__contact">
          <li><span className="overhead">Birthday</span>17 March, 1995</li>
          <li><span className="overhead">Location</span>San-Francisco, USA</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;