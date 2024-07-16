import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div id="about-div">
    <button className="button"><Link to="/"> ← </Link></button>
    <div id="about-text">
      <p>      Emily is a web developer and STEAM educator currently residing in
      Philadelpiha, PA. She is available for free-lance work and can be
      contacted <Link to="/contact">here</Link> ← </p>
    </div>
    </div>
  );
}
