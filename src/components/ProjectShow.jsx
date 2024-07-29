export default function ProjectShow({ project }) {
  return (
    <div className="project">
      <h4>{project.name}</h4>
      <div className="project-image-div">
        <img alt={project.alt} src={project.image}></img>
      </div>
      <div id="project-buttons">
        <button>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </button>
        <button>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </button>
      </div>
    </div>
  );
}
