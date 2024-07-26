export default function ProjectShow({ project }) {
  return (
    <div className="project">
      <h4>{project.name}</h4>
      <div className="project-image-div">
        <img alt={project.alt} src={project.image}></img>
      </div>
      <div id="project-buttons">
        <button>
          {"Demo"}
          <a href={project.demo} target="_blank" rel="noopener noreferrer"></a>
        </button>
        <button>
          {" Github"}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </button>
      </div>
    </div>
  );
}
