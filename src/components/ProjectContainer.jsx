import { Link } from "react-router-dom";
import ProjectShow from "./ProjectShow";

export default function ProjectContainer() {
  const projectsArray = [
    {
      id: 1,
      name: "Kasia's Catering",
      demo: "https://kasialemanek.netlify.app/",
      github: "https://github.com/gememmi/kasia-site-1.0",
      image: "./kasiasite.png",
      alt: "black catering site screenshot"
    },
    {
      id: 2,
      name: "StarBright",
      demo: "https://www.loom.com/share/8a255f28f87c47918d30dd16102bba52",
      github: "https://github.com/gememmi/StarBright",
      image: "./starbright.png",
      alt: "pink and purple log in screen to mood tracker"
    },
    {
      id: 3,
      name: "Rome",
      demo: "https://www.loom.com/share/43bc1bbc37a04093ab0e085206a40735",
      github: "https://github.com/gememmi/Rome",
      image: "./rome.png",
      alt:"white and black forum screenshot"
    },
    {
      id: 4,
      name: "Journey Back to Flatiron",
      demo: "https://www.loom.com/share/1c85e7c990e7429eb0c78705f3a813c8",
      github: "https://github.com/gememmi/Journey-Back-to-Flatiron",
      image: "./journeytoflatiron.png",
      alt:"black videogame start screenshot"
    },
    {
      id: 5,
      name: "Aaron and Emily's Bookshop",
      demo: "https://www.loom.com/share/8af0d2232ec747a586a822040a8f4c86?sid=31d736c7-d1dd-40ff-9ec7-e5aa2ec3a086",
      github: "https://github.com/gememmi/AaronEmilyBookshop",
      image: "./aaronandemilybookshopt.png",
      alt: "red online bookshop screenshot"
    },
    {
      id: 6,
      name: "5 o'Clock Somewhere!",
      demo: "https://www.loom.com/share/3c983c68eb8747258fc1e75f09422141?sid=d0b39b93-7245-4686-8539-5d07c32bbf64",
      github: "https://github.com/gememmi/5oClockSomewhere",
      image: "./5oclocksomewhere.png",
      alt: "nyc beer index screenshot"
    },
  ];

  return (
    <div id="project-div">
      <button className="button">
        <Link to="/" id="back-btn">
          {" "}
          ←{" "}
        </Link>
      </button>
      <div id="project-library">
        {projectsArray.map((project) => (
          <ProjectShow key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
