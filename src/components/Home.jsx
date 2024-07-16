import { Link } from 'react-router-dom';

export default function Home() {
  return (
    
    <div id="home-div">
      <div id="home-content">
      <h2>Emily Daniels</h2>
      <h3>Web Developer and Educator</h3>
      <hr></hr>
      <nav id="nav-bar">
        <ul>
        <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Project Library</Link>
          </li>
        </ul>
      </nav>
      <hr></hr>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/em-daniels/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/gememmi">GitHub</a>
        </li>
        <li>
          <a href="https://www.instagram.com/web.emdee">Instagram</a>
        </li>
      </ul>
      </div>
    </div>
  );
}
