import React from 'react';
import './index.css';
import education from '../../assets/img/icon-education.svg';
import experience from '../../assets/img/icon-experience.svg';

const Resume = () => {
  return (
    <div className="col-12 col-md-12 col-lg-10" id="resume" >
      <div className="box box-content">
        <div className="pb-2">
          <h1 className="title title--h1 first-title title__separate">Resume</h1>
        </div>

        {/* <!-- Experience --> */}
        <div className="row">
          <div className="col-12">
            <h2 className="title title--h3"><img className="title-icon" src={education} alt="" /> Education</h2>
            <div className="timeline">
              {/* <!-- Item --> */}
              <article className="timeline__item">
                <h5 className="title title--h5 timeline__title">University School of the Arts</h5>
                <span className="timeline__period">2007 — 2009</span>
                <p className="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </article>

              {/* <!-- Item --> */}
              <article className="timeline__item">
                <h5 className="title title--h5 timeline__title">New York Academy of Art</h5>
                <span className="timeline__period">2005 — 2007</span>
                <p className="timeline__description">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>
              </article>

              {/* <!-- Item --> */}
              <article className="timeline__item">
                <h5 className="title title--h5 timeline__title">High School of Art and Design</h5>
                <span className="timeline__period">2003 — 2005</span>
                <p className="timeline__description">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas  mag odit aut fugit, sed consequuntur magni dolores eos.</p>
              </article>
            </div>
          </div>

          <div className="col-12">
            <h2 className="title title--h3"><img className="title-icon" src={experience} alt="" /> Experience</h2>
            <div className="timeline">
              {/* <!-- Item --> */}
              <article className="timeline__item">
                <h5 className="title title--h5 timeline__title">Creative Director</h5>
                <span className="timeline__period">2015 — Present</span>
                <p className="timeline__description">Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.</p>
              </article>

              {/* <!-- Item --> */}
              <article className="timeline__item">
                <h5 className="title title--h5 timeline__title">Art Director</h5>
                <span className="timeline__period">2013 — 2015</span>
                <p className="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </article>

              {/* <!-- Item --> */}
              <article className="timeline__item">
                <h5 className="title title--h5 timeline__title">Web Designer</h5>
                <span className="timeline__period">2010 — 2013</span>
                <p className="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </article>
            </div>
          </div>
        </div>

        {/* <!-- Skills --> */}
        <div className="row">
          <div className="col-12">
            <h2 className="title title--h3">My Skills</h2>
            <div className="box box__border">
              {/* <!-- Progress --> */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%", zIndex: 2}}>
                  <div className="progress-text"><span>Web Design</span><span>80%</span></div>
                </div>
                <div className="progress-text"><span>Web Design</span></div>
              </div>

              {/* <!-- Progress --> */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%", zIndex: 2}}>
                  <div className="progress-text"><span>Graphic Design</span><span>75%</span></div>
                </div>
                <div className="progress-text"><span>Graphic Design</span></div>
              </div>

              {/* <!-- Progress --> */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%", zIndex: 2}}>
                  <div className="progress-text"><span>Photoshop</span><span>90%</span></div>
                </div>
                <div className="progress-text"><span>Photoshop</span></div>
              </div>

              {/* <!-- Progress --> */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%", zIndex: 2}}>
                  <div className="progress-text"><span>Illustrator</span><span>50%</span></div>
                </div>
                <div className="progress-text"><span>Illustrator</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;