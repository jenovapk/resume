import React from 'react';
import './index.css';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside class="col-12 col-md-12 col-lg-2">
      <div class="sidebar box sticky-column is_stuck">
        <ul class="nav">
          <li class="nav__item"><NavLink to="/"><i class="fas fa-user-alt"></i>About</NavLink></li>
          <li class="nav__item"><NavLink to="/resume"><i class="far fa-file-alt"></i>Resume</NavLink></li>
          <li class="nav__item"><NavLink to="/works"><i class="fas fa-briefcase"></i>Works</NavLink></li>
          <li class="nav__item"><NavLink to="/contact"><i class="fas fa-book"></i>Blog</NavLink></li>
          <li class="nav__item"><NavLink to="/blog"><i class="fas fa-phone"></i>Contact</NavLink></li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;