import React from 'react';
import './index.css';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-12 col-md-12 col-lg-2" id="sidebar">
      <div className="sidebar box sticky-column is_stuck">
        <ul className="nav">
          <li className="nav__item"><NavLink exact to="/"><i className="fas fa-user-alt"></i>About</NavLink></li>
          <li className="nav__item"><NavLink exact to="/resume"><i className="far fa-file-alt"></i>Resume</NavLink></li>
          <li className="nav__item"><NavLink exact to="/works"><i className="fas fa-briefcase"></i>Works</NavLink></li>
          <li className="nav__item"><NavLink exact to="/blog"><i className="fas fa-book"></i>Blog</NavLink></li>
          <li className="nav__item"><NavLink exact to="/contact"><i className="fas fa-phone"></i>Contact</NavLink></li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;