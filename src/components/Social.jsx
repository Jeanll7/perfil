import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import '../styles/components/socialmid.scss'

const socialMid = [
  { name: "linkdin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const Social = () => {
  return (
    <section id="social-mid">
      {socialMid.map((network) => (       
        <a href="https://www.linkedin.com/in/jean-leal-31684217b/" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>        
      ))}
    </section>
  );
};

export default Social