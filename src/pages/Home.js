import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    document.title = "CrackEd";
  }
  render() {
    return(
      <div>
        <div className="jumbotron">
          <h1>CrackEd</h1>
          <h3>Where search ends and solutions begin..!</h3>
        </div>
        <div className="description">
          <div className="overview">
            <h1>Overview</h1>
            <p>CrackEd is a one stop solution for your last minute revisions, specially design from the examination point of view. Confused about the options available out there to buy a refernce book? Don't worry, we are here to provide you the notes after explaining each topic.</p>
          </div>
          <div className="vision">
            <h1>Our Vision</h1>
            <p>Fostering learning through the use of technology</p>
          </div>
          <div className="aim">
            <h1>Aim</h1>
            <p>To provide an engineered solution to help students crack their exams..!</p>
          </div>
          <div className="trends">
            <h1>Trending topics</h1>
            <p>Blog coming soon...!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
