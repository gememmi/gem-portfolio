import { Link } from "react-router-dom";
import ProjectShow from "./ProjectShow";

export default function ProjectContainer() {
  const projectsArray = [
    {
      id: 1,
      name: "StarBright",
      demo: "https://www.loom.com/share/8a255f28f87c47918d30dd16102bba52",
      github: "https://github.com/gememmi/StarBright",
      image: "./moon 1.png"
    },
    {
      id: 2,
      name: "Project 2",
      demo: "https://www.facebook.com/",
       github: "https://github.com",
       image: "./moon 1.png"

    },
    {
      id: 3,
      name: "Project 3",
      demo: "https://www.facebook.com/",
       github: "https://github.com",
       image: "./moon 1.png"
    },
    // {
    //   id: 4,
    //   name: "Project 4",
    //   demo: "https://www.facebook.com/",
    //    github: "https://github.com",
    //    image: "./moon 1.png"
    // },
    // {
    //   id: 5,
    //   name: "Project 4",
    //   demo: "https://www.facebook.com/",
    //    github: "https://github.com",
    //    image: "./moon 1.png"
    // },
    // {
    //   id: 6,
    //   name: "Project 4",
    //   demo: "https://www.facebook.com/",
    //    github: "https://github.com",
    //    image: "./moon 1.png"
    // },
    // {
    //   id: 7,
    //   name: "Project 4",
    //   demo: "https://www.facebook.com/",
    //    github: "https://github.com",
    //    image: "./moon 1.png"
    // },
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
