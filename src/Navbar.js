import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <div className="navbar fixed-top">
          <ul>
            <li><Link to="/home"><strong>CrackEd</strong></Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar
