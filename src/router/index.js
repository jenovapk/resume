import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import About from '../modules/About';
import Resume from '../modules/Resume';
import Works from '../modules/Works';
import Contact from '../modules/Contact';
import Blog from '../modules/Blog';

const Router = () => {
  return (
    <React.Fragment>
      <Profile />
      <Sidebar />
      {/* cho nay se nhay qua component khac tuong ung voi content khac nhau */}
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </React.Fragment>
  );
};

export default Router;
