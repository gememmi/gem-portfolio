import { Link } from "react-router-dom";
import ProjectShow from "./ProjectShow";

export default function ProjectContainer() {
  const projectsArray = [
    {
      id: 1,
      name: "Project 4",
      demo: "https://www.facebook.com/",
       github: "https://github.com",
       image: "./moon 1.png"
    },
    {

      
      id: 2,
      name: "StarBright",
      demo: "https://www.loom.com/share/8a255f28f87c47918d30dd16102bba52",
      github: "https://github.com/gememmi/StarBright",
      image: "./starbright.png"
    },
    {
      id: 3,
      name: "Rome",
      demo: "https://www.facebook.com/",
       github: "https://github.com",
       image: "./rome.png"

    },
    {
      id: 4,
      name: "Journey Back to Flatiron",
      demo: "https://www.facebook.com/",
       github: "https://github.com",
       image: "./journeytoflatiron.png"
    },
    {
      id: 5,
      name: "Aaron and Emily's Bookshop",
      demo: "https://www.facebook.com/",
       github: "https://github.com",
       image: "./aaronandemilybookshopt.png"
    },
    {
      id: 6,
      name: "Project 4",
      demo: "https://www.facebook.com/",
       github: "https://github.com",
       image: "./5oclocksomewhere.png"
    },
  ];

  return (
    <div id="project-div">
      <button className="button">
        <Link to="/" id="back-btn"> ← </Link>
      </button>
      <div id="project-library">
        {projectsArray.map((project) => (
          <ProjectShow key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
