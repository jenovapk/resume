import React from 'react';
import './index.css';

const Contact = () => {
  return (
    <div className="col-12 col-md-12 col-lg-10" id="contact">
      <div className="box box-content">
        <div className="pb-2">
          <h1 className="title title--h1 first-title title__separate">Contact</h1>
        </div>

        {/* <!-- Contact --> */}
        <div className="map">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6309.264960993626!2d-122.45068965551175!3d37.751765457168226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1631775381972!5m2!1sen!2s" width="860" height="380" style={{ border: "0", borderRadius: "13px", marginBottom: "1.5rem" }} allowFullScreen loading="lazy"></iframe>
        </div>
        <h2 className="title title--h3">Contact Form</h2>

        <form id="contact-form" className="contact-form" data-toggle="validator" noValidate>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <input type="text" className="form-control" id="nameContact" name="nameContact" placeholder="Full name" required="required" autoComplete="on" style={{ outline: "none" }} />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group col-12 col-md-6">
              <input type="email" className="form-control" id="emailContact" name="emailContact" placeholder="Email address" required="required" autoComplete="on"/>
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group col-12 col-md-12">
              <textarea className="textarea form-control" id="messageContact" name="messageContact" placeholder="Your Message" rows="4" required="required" style={{ overflow: "hidden", overflowWrap: 'break-word', height: "122px", outline: "none", resize: "none" }} tabIndex="1"></textarea>
              <div className="help-block with-errors"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
              <div id="validator-contact" className="hidden"></div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 text-right">
              <button type="submit" className="btn disabled"><i className="fa fa-paper-plane"></i> Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;