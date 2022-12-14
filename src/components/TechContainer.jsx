import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from 'react-icons/di';
import '../styles/components/techcontainer.scss';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JS", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },  
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
];

const TechContainer = () => {
  return (
    <section className="technologies-container"> 
      <h2>Skills</h2>    
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Habilidades</p>
            </div>
          </div>
        ))}
      </div>  
    </section>
  )
}

export default TechContainer
