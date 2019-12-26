import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return(
      <div>
        <div className="footer">
          <p>&copy; <Link to="/home">CrackEd</Link> 2019</p>
        </div>
      </div>
    )
  }
}

export default Footer;
