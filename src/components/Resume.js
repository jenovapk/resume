import React from 'react';
//import { Container } from '@material-ui/core';
import profileimg from '../assets/img/main-photo.svg';
import education from '../assets/img/icon-education.svg';
import experience from '../assets/img/icon-experience.svg';

export default function Resume() {
	return (
		<div class="container gutter-top">
			<div class="header box">
				<div class="header__left">
					<div class="header__photo">
						<img class="header__photo-img" src={profileimg} alt="Ronald Robertson" />
					</div>
					<div class="header__base-info">
						<h4 class="title titl--h4">Ronald Robertson</h4>
						<div class="status">Creative Director</div>
						<ul class="header__social">
							<li><a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
							<li><a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
							<li><a href="https://www.instagram.com"><i class="fa fa-instagram"></i></a></li>
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

			<div class="row sticky-parent">
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

			{/* Resume Start */}
			<div class="col-12 col-md-12 col-lg-10">
				    <div class="box box-content">
					    <div class="pb-2">
		                    <h1 class="title title--h1 first-title title__separate">Resume</h1>
					    </div>
						
						{/* <!-- Experience --> */}
						<div class="row">
							<div class="col-12">
								<h2 class="title title--h3"><img class="title-icon" src={education} alt="" /> Education</h2>
								<div class="timeline">
									{/* <!-- Item --> */}
									<article class="timeline__item">
									    <h5 class="title title--h5 timeline__title">University School of the Arts</h5>
										<span class="timeline__period">2007 — 2009</span>
										<p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
									</article>
                                        
									{/* <!-- Item --> */}
									<article class="timeline__item">
									    <h5 class="title title--h5 timeline__title">New York Academy of Art</h5>
										<span class="timeline__period">2005 — 2007</span>
										<p class="timeline__description">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>
									</article>
                                        
									{/* <!-- Item --> */}
									<article class="timeline__item">
									    <h5 class="title title--h5 timeline__title">High School of Art and Design</h5>
										<span class="timeline__period">2003 — 2005</span>
										<p class="timeline__description">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas  mag odit aut fugit, sed consequuntur magni dolores eos.</p>
									</article>
								</div>	
							</div>
								
							<div class="col-12">
							<h2 class="title title--h3"><img class="title-icon" src={experience} alt="" /> Experience</h2>
								<div class="timeline">
									{/* <!-- Item --> */}
									<article class="timeline__item">
									    <h5 class="title title--h5 timeline__title">Creative Director</h5>
										<span class="timeline__period">2015 — Present</span>
										<p class="timeline__description">Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.</p>
									</article>
                                        
									{/* <!-- Item --> */}
									<article class="timeline__item">
									    <h5 class="title title--h5 timeline__title">Art Director</h5>
										<span class="timeline__period">2013 — 2015</span>
										<p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
									</article>
                                        
									{/* <!-- Item --> */}
									<article class="timeline__item">
									    <h5 class="title title--h5 timeline__title">Web Designer</h5>
										<span class="timeline__period">2010 — 2013</span>
										<p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
									</article>
								</div>
							</div>
						</div>
						
						{/* <!-- Skills --> */}
						<div class="row">
							<div class="col-12">
						        <h2 class="title title--h3">My Skills</h2>
								<div class="box box__border">
									{/* <!-- Progress --> */}
									<div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
											<div class="progress-text"><span>Web Design</span><span>80%</span></div>
										</div>
										<div class="progress-text"><span>Web Design</span></div>
                                    </div>
										
									{/* <!-- Progress --> */}
									<div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
											<div class="progress-text"><span>Graphic Design</span><span>75%</span></div>
										</div>
										<div class="progress-text"><span>Graphic Design</span></div>
                                    </div>
										
									{/* <!-- Progress --> */}
									<div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
											<div class="progress-text"><span>Photoshop</span><span>90%</span></div>
										</div>
										<div class="progress-text"><span>Photoshop</span></div>
                                    </div>
										
									{/* <!-- Progress --> */}
									<div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
											<div class="progress-text"><span>Illustrator</span><span>50%</span></div>
										</div>
										<div class="progress-text"><span>Illustrator</span></div>
                                    </div>
								</div>
                            </div>
						</div>
					</div>
					
					{/* <!-- Footer --> */}
					<footer class="footer">Copyright © 2021 Resume. All Rights Reserved</footer>
		        </div>
			{/* Resume End */}

			</div>

		</div>
	);
}