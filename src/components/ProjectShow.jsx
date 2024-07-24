export default function ProjectShow({ project }) {
  return (
    <div className="project">
      <h4>{project.name}</h4>
      <img alt="project image here"></img>
      <div id="project-buttons">
        <button>
          {"Demo"}
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
          </a>
        </button>
        <button>
          {" Github"}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            
          </a>
        </button>
      </div>
    </div>
  );
}
