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
        I&apos;m a M.Sc. graduate of Applied Mathematics and Computer Science from <a href="https://emu.edu.tr/">EMU</a>, a Lautech Alumni, and
        the co-founder and CTO of <a href="https://eyita.com">Eyita</a>.
        I&apos;ll teach you how to solve leetcode efficiently and systematically.
        I&apos;ll simplify the concept so it&apos;s easy for you to understand.
        Improve your performance in a tech interview.
        I also offer detailed solutions and explanations for specific DSA questions.
        Plus mock interview service, guidance with school project etc.
        Please confirm a date with me before purchasing a gig.
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
