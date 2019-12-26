import React from 'react';

class Contact extends React.Component {
  componentDidMount() {
    document.title = "CrackEd | Contact Us"
  }
  render() {
    return(
      <div>
        <div className="jumbotron contact">
          <h1>CrackEd | Contact Us</h1>
          <h3>We are here to help you..!</h3>
        </div>
        <div className="description">
          <h2>Fill the form below, and let us know how can we help you..</h2>
          <form>
            <label>What best describes your concern ?<span className="required">*</span>
            <br />
              <select required className="dropdown" name="category">
                <option></option>
                <option>Help and Support</option>
                <option>Report something..</option>
                <option>Other</option>
              </select>
            </label>
            <br />
            <br />
            <label>Name:<span className="required">*</span>
              <br />
              <input type="text" name="name" required/>
            </label>
            <br />
            <br />
            <label>E-Mail:<span className="required">*</span>
              <br />
              <input type="email" name="name" required/>
            </label>
            <br />
            <br />
            <label>Your message:<span className="required">*</span>
              <br />
              <textarea name="msg" rows="10" cols="50" required></textarea>
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
          <br />
          <hr />
          <h2>OR</h2>
          <p>Directly drop a mail to us on:</p>
          <a href="#" className="community-contact" title="Write to us for any queries or collaborations!"><img src="https://image.flaticon.com/icons/png/512/732/732200.png" alt="WhatApp logo" width="128" height="128"/></a>
        </div>
      </div>
    );
  }
}

export default Contact;
