import React from 'react';

class About extends React.Component {
  componentDidMount() {
    document.title = "CrackEd | About Us";
  }
  render() {
    return(
      <div>
        <div className="jumbotron about">
          <h1>CrackEd | About Us</h1>
          <h3>Even we are learners!</h3>
          <h3>After all, learning is a part of life!</h3>
        </div>
        <div className="description">
          <p>Learn. Grow. Glow
          <br />
          <br />
          CrackEd is an initiative to provide engineering students with complete guidance throughout their course.
          <br />
          <br />
          We, being in the journey of engineering would love to help juniors to do smart work from our past experience and knowledge.
          <br />
          <br />
          If you are sick of browsing the whole web for finding out things like:
          <br />
          - What to study ?
          <br />
          - Where to study ?
          <br />
          - Succinct notes for the same.
          <br />
          <br />
          CrackEd is the perfect place to be.
          <br />
          <br />
          Alongside your academics, we even intend to provide free programming tutorials to help you sharpen your skillset.
          <br />
          <br />
          Let's Rock !</p>
        </div>
      </div>
    )
  }
}

export default About;
