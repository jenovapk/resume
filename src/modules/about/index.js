import React from 'react';
import './index.css';
import icondesign from '../../assets/img/icon-design.svg';
import icondev from '../../assets/img/icon-dev.svg';
import iconapp from '../../assets/img/icon-app.svg';
import iconphoto from '../../assets/img/icon-photo.svg';

const About = () => {
  return (
    <div class="col-12 col-md-12 col-lg-10" id="about" >
      <div class="box box-content">
        <div class="pb-2">
          <h1 class="title title--h1 first-title title__separate">About Me</h1>
          <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
          <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
        </div>
        <div class="mt-1">
          <h2 class="title title--h3">What I'm Doing</h2>
          <div class="row">
            {/* <!-- Case Item --> */}
            <div class="col-case-item col-padding">
              <div class="case-item">
                <img class="case-item__icon" src={icondesign} alt="" />
                <div>
                  <h3 class="title title--h4">Web Design</h3>
                  <p class="case-item__caption">The most modern and high-quality design made at a professional level.</p>
                </div>
              </div>
            </div>

            {/* <!-- Case Item --> */}
            <div class="col-case-item col-padding">
              <div class="case-item">
                <img class="case-item__icon" src={icondev} alt="" />
                <div>
                  <h3 class="title title--h4">Web Development</h3>
                  <p class="case-item__caption">High-quality development of sites at the professional level.</p>
                </div>
              </div>
            </div>

            {/* <!-- Case Item --> */}
            <div class="col-case-item col-padding">
              <div class="case-item">
                <img class="case-item__icon" src={iconapp} alt="" />
                <div>
                  <h3 class="title title--h4">Mobile Apps</h3>
                  <p class="case-item__caption">Professional development of applications for iOS and Android.</p>
                </div>
              </div>
            </div>

            {/* <!-- Case Item --> */}
            <div class="col-case-item col-padding">
              <div class="case-item">
                <img class="case-item__icon" src={iconphoto} alt="" />
                <div>
                  <h3 class="title title--h4">Photography</h3>
                  <p class="case-item__caption">I make high-quality photos of any category at a professional level.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;