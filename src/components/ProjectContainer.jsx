import { Link } from 'react-router-dom';
import ProjectShow from './ProjectShow';


export default function ProjectContainer(){

    const projectsArray =[
        {
            id:1,
            name:"Project 1",
            demo: "https://www.facebook.com/"
        },
        {
            id:2,
            name:"Project 2",
            demo: "https://www.facebook.com/"
    
        },
        {
            id:3,
            name:"Project 3",
            demo: "https://www.facebook.com/"
        },
        {
            id:4,
            name:"Project 4",
            demo: "https://www.facebook.com/"
        },
    
    ]

    return(
        <div id="project-div">
            <button><Link to="/"> ← </Link></button>
            {projectsArray.map((project) => (
                <ProjectShow key={project.id} project={project}/>
            ))}
        </div>
    )
}