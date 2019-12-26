import React from 'react';

class Blog extends React.Component {
  componentDidMount() {
    document.title = "CrackEd | Blog";
  }
  render() {
    return(
      <div>
      <br />
        <div className="description">
          <h2>Blogs by CrackEd</h2>
          <img src="https://thumbs.dreamstime.com/b/coming-soon-neon-sign-brick-wall-background-87865865.jpg" alt="Coming soon"/>
        </div>
      </div>
    )
  }
}

export default Blog
