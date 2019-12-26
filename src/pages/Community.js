import React from 'react';

// link for whatsapp instead of a whole QnA section, with whatsapp groups segregated

class Community extends React.Component{
  componentDidMount() {
    document.title = "CrackEd | Community";
  }
  render() {
    return(
      <div>
        <br />
        <div className="description">
          <h2>Welcome to CrackEd Community</h2>
          <p>Here, you can put up all your doubts and concerns and get them cleared!
            <br />
            CrackEd community is always ready to help you out regarding any of the concerns...
          </p>
          <div className="community-contact">
            <a href="#" title="Join our WhatsApp group"><img src="https://image.flaticon.com/icons/png/512/124/124034.png" alt="WhatsApp logo" width="128" height="128"/></a>
            <a href="#" title="Write to us for any queries or collaborations!"><img src="https://image.flaticon.com/icons/png/512/732/732200.png" alt="WhatApp logo" width="128" height="128"/></a>
          </div>
          <p>
            What does CrackEd Community provide..?
            <ul>
              <li>You can contact us using the above provided links!</li>
              <li>Join our WhatsApp group where you can ask your doubts and get them solved!</li>
              <li>Either your peers answer your queries or we will get to the spot!</li>
              <li>We assure you that you will be provided with assistance within 6 hours!</li>
            </ul>
            <br />
            For those who wish to collaborate with us, drop a mail on the link provided above..!
          </p>
        </div>
      </div>
    )
  }
}

export default Community;
