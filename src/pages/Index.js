import React from 'react';
import { Link } from 'react-router-dom';

import Pricing from '../components/Pricing/PricingTable';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Precious Adelaja's personal website. First class graduate of Pure and Applied Mathematics, "
    + 'co-founder and CTO of Eyita Multi Global Nig. Ltd.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/lajaprecious/personal-site">here</a>.</p>
      <Pricing />
    </article>
  </Main>
);

export default Index;
