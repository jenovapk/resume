import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import About from '../modules/About';
import Resume from '../modules/Resume';
import Works from '../modules/Works';
import Contact from '../modules/Contact';
import Blog from '../modules/Blog';

const Router = () => {
  return (
    <React.Fragment>
      <div className="container gutter-top">
        <Profile />
        <div className="row sticky-parent">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>      
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Router;
