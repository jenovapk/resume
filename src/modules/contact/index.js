import React from 'react';
import './index.css';

const Contact = () => {
  return (
    <div class="col-12 col-md-12 col-lg-10">
      <div class="box box-content">
        <div class="pb-2">
          <h1 class="title title--h1 first-title title__separate">Contact</h1>
        </div>

        {/* <!-- Contact --> */}
        <div class="map">
          <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6309.264960993626!2d-122.45068965551175!3d37.751765457168226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1631775381972!5m2!1sen!2s" width="860" height="380" style={{ border: "0", borderRadius: "13px", marginBottom: "1.5rem" }} allowfullscreen="" loading="lazy"></iFrame>
        </div>
        <h2 class="title title--h3">Contact Form</h2>

        <form id="contact-form" class="contact-form" data-toggle="validator" novalidate="true">
          <div class="row">
            <div class="form-group col-12 col-md-6">
              <input type="text" class="form-control" id="nameContact" name="nameContact" placeholder="Full name" required="required" autocomplete="on" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')" style={{ outline: "none" }} />
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group col-12 col-md-6">
              <input type="email" class="form-control" id="emailContact" name="emailContact" placeholder="Email address" required="required" autocomplete="on" oninvalid="setCustomValidity('Email is incorrect')" onkeyup="setCustomValidity('')" />
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group col-12 col-md-12">
              <textarea class="textarea form-control" id="messageContact" name="messageContact" placeholder="Your Message" rows="4" required="required" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')" style={{ overflow: "hidden", overflowWrap: 'break-word', height: "122px", outline: "none", resize: "none" }} tabindex="1"></textarea>
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
              <div id="validator-contact" class="hidden"></div>
            </div>
            <div class="col-12 col-md-6 order-1 order-md-2 text-right">
              <button type="submit" class="btn disabled"><i class="fa fa-paper-plane"></i> Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;