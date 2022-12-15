import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Precious Adelaja</h2>
        <p><a href="mailto:lajaprecious@gmail.com">lajaprecious@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Precious. I like building things.
        I am a <a href="https://emu.edu.tr/">EMU</a> graduate, Lautech Alumni, and
        the co-founder and CTO of <a href="https://eyita.com">Eyita</a>. Before Eyita I was
        at <a href="https://matroid.com">Matroid</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Precious Adelaja <Link to="/">lajaprecious.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
