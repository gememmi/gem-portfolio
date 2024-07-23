export default function ProjectShow({ project }){



    return (
        <div>
            <h3>{project.name}</h3>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
    );
}
