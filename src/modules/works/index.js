import React from 'react';
import './index.css';
import image01 from '../../assets/img/image_01.jpg';
import image02 from '../../assets/img/image_02.jpg';
import image03 from '../../assets/img/image_03.jpg';
import image04 from '../../assets/img/image_04.jpg';
import image05 from '../../assets/img/image_05.jpg';
import image06 from '../../assets/img/image_06.jpg';
import image07 from '../../assets/img/image_07.jpg';
import image08 from '../../assets/img/image_08.jpg';
import image09 from '../../assets/img/image_09.jpg';

const Works = () => {
  return (
    <div className="col-12 col-md-12 col-lg-10" id="works">
      <div className="box box-content">
        <div className="pb-2">
          <h1 className="title title--h1 first-title title__separate">Portfolio</h1>
        </div>

        <div className="pb-0">
          {/* <!-- Filter --> */}
          <div className="select">
            <span className="placeholder">Select category</span>
            <ul className="filter">
              <li className="filter__item">Category</li>
              <li className="filter__item active" data-filter="*"><a className="filter__link active" href="#filter">All</a></li>
              <li className="filter__item" data-filter=".category-concept"><a className="filter__link" href="#filter">Concept</a></li>
              <li className="filter__item" data-filter=".category-design"><a className="filter__link" href="#filter">Design</a></li>
              <li className="filter__item" data-filter=".category-life"><a className="filter__link" href="#filter">Life</a></li>
            </ul>
            <input type="hidden" name="changemetoo" />
          </div>

          {/* <!-- Gallery --> */}
          <div className="gallery-grid js-grid-row js-filter-container" style={{position: "relative", height: "771px"}}>
            <div className="gutter-sizer"></div>
            {/* <!-- Item 1 --> */}
            <figure className="gallery-grid__item category-concept" style={{position: "absolute", left: "0%", top: "0px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image01} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Half Avocado</h4>
                <span className="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>

            {/* <!-- Item 2 --> */}
            <figure className="gallery-grid__item category-concept" style={{position: "absolute", left: "34.395%", top: "0px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image02} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Pink Flamingo</h4>
                <span className="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>

            {/* <!-- Item 3 --> */}
            <figure className="gallery-grid__item category-design" style={{position: "absolute", left: "68.79%", top: "0px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image03} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Abstract</h4>
                <span className="gallery-grid__category">Design</span>
              </figcaption>
            </figure>

            {/* <!-- Item 4 --> */}
            <figure className="gallery-grid__item category-design" style={{position: "absolute", left: "0%", top: "257px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image04} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Abstract #2</h4>
                <span className="gallery-grid__category">Design</span>
              </figcaption>
            </figure>

            {/* <!-- Item 5 --> */}
            <figure className="gallery-grid__item category-design" style={{position: "absolute", left: "34.395%", top: "257px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image05} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Abstract #3</h4>
                <span className="gallery-grid__category">Design</span>
              </figcaption>
            </figure>

            {/* <!-- Item 6 --> */}
            <figure className="gallery-grid__item category-life" style={{position: "absolute", left: "68.79%", top: "257px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image06} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Golden Gate</h4>
                <span className="gallery-grid__category">Life</span>
              </figcaption>
            </figure>

            {/* <!-- Item 7 --> */}
            <figure className="gallery-grid__item category-concept" style={{position: "absolute", left: "0%", top: "514px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image07} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Peach</h4>
                <span className="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>

            {/* <!-- Item 8 --> */}
            <figure className="gallery-grid__item category-design" style={{position: "absolute", left: "34.395%", top: "514px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image08} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Abstract #4</h4>
                <span className="gallery-grid__category">Design</span>
              </figcaption>
            </figure>

            {/* <!-- Item 9 --> */}
            <figure className="gallery-grid__item category-life" style={{position: "absolute", left: "68.79%", top: "514px"}}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded" src={image09} data-zoom="" alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">Hedgehog</h4>
                <span className="gallery-grid__category">Life</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works;