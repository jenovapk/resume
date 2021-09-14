import React from 'react';

export default function Sidebar() {
    return (
        <aside class="col-12 col-md-12 col-lg-2">
            <div class="sidebar box sticky-column is_stuck">
                <ul class="nav">
                    <li class="nav__item"><a href="about.html"><i class="fas fa-user-alt"></i>About</a></li>
                    <li class="nav__item"><a class="active" href="resume.html"><i class="far fa-file-alt"></i>Resume</a></li>
                    <li class="nav__item"><a href="works.html"><i class="fas fa-briefcase"></i>Works</a></li>
                    <li class="nav__item"><a href="blog.html"><i class="fas fa-book"></i>Blog</a></li>
                    <li class="nav__item"><a href="contact.html"><i class="fas fa-phone"></i>Contact</a></li>
                </ul>
            </div>
        </aside>
    );
}