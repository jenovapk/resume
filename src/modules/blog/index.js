import React from 'react';
import './index.css';
import image01 from '../../assets/img/image_01.jpg';
import image02 from '../../assets/img/image_02.jpg';
import image05 from '../../assets/img/image_05.jpg';
import image06 from '../../assets/img/image_06.jpg';
import image07 from '../../assets/img/image_07.jpg';
import image08 from '../../assets/img/image_08.jpg';

const Blog = () => {
  return (
    <div className="col-12 col-md-12 col-lg-10" id="blog">
      <div className="box box-content">
        <div className="pb-2">
          <h1 className="title title--h1 first-title title__separate">Blog</h1>
        </div>
        <div className="news-grid">
          {/* <!-- Post --> */}
          <article className="news-item box">
            <div className="news-item__image-wrap overlay overlay--45">
              <div className="news-item__date">16<span>Jun</span></div>
              <a className="news-item__link" href="/"> </a>
              <img className="cover ls-is-cached lazyloaded" src={image02} alt="" />
            </div>
            <div className="news-item__caption">
              <h2 className="title title--h4">Design Conferences in 2019</h2>
              <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
            </div>
          </article>

          {/* <!-- Post --> */}
          <article className="news-item box">
            <div className="news-item__image-wrap overlay overlay--45">
              <div className="news-item__date">15<span>Jun</span></div>
              <a className="news-item__link" href="/"> </a>
              <img className="cover ls-is-cached lazyloaded" src={image06} alt="" />
            </div>
            <div className="news-item__caption">
              <h2 className="title title--h4">Best Fonts Every Designer</h2>
              <p>Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.</p>
            </div>
          </article>

          {/* <!-- Post --> */}
          <article className="news-item box">
            <div className="news-item__image-wrap overlay overlay--45">
              <div className="news-item__date">14<span>Jun</span></div>
              <a className="news-item__link" href="/"> </a>
              <img className="cover ls-is-cached lazyloaded" src={image08} alt="" />
            </div>
            <div className="news-item__caption">
              <h2 className="title title--h4">Design Digest #80</h2>
              <p>Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.</p>
            </div>
          </article>

          {/* <!-- Post --> */}
          <article className="news-item box">
            <div className="news-item__image-wrap overlay overlay--45">
              <div className="news-item__date">13<span>Jun</span></div>
              <a className="news-item__link" href="/"> </a>
              <img className="cover ls-is-cached lazyloaded" src={image07} alt="" />
            </div>
            <div className="news-item__caption">
              <h2 className="title title--h4">UI Interactions of the week</h2>
              <p>Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.</p>
            </div>
          </article>

          {/* <!-- Post --> */}
          <article className="news-item box">
            <div className="news-item__image-wrap overlay overlay--45">
              <div className="news-item__date">12<span>Jun</span></div>
              <a className="news-item__link" href="/"> </a>
              <img className="cover ls-is-cached lazyloaded" src={image05} alt="" />
            </div>
            <div className="news-item__caption">
              <h2 className="title title--h4">The Forgotten Art of Spacing</h2>
              <p>Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </article>

          {/* <!-- Post --> */}
          <article className="news-item box">
            <div className="news-item__image-wrap overlay overlay--45">
              <div className="news-item__date">10<span>Jun</span></div>
              <a className="news-item__link" href="/"> </a>
              <img className="cover ls-is-cached lazyloaded" src={image01} alt="" />
            </div>
            <div className="news-item__caption">
              <h2 className="title title--h4">Design Digest #79</h2>
              <p>Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Blog;