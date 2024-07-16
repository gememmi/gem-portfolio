import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
    <button><Link to="/"> ← </Link></button>
    <div id="about-div">
      Emily is a web developer and STEAM educator currently residing in
      Philadelpiha, PA. She is available for free-lance work and can be
      contacted <Link to="/contact">Contact</Link>
    </div>
    </>
  );
}
