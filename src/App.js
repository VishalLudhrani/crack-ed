import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar.js'
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import Community from './pages/Community.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js'
import Footer from './Footer.js'

class App extends React.Component {
  render() {
    return(
      <div>
        <BrowserRouter>
        <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/community" exact component={Community} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
