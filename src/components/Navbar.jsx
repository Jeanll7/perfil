import Social from './Social';
import '../styles/components/navbar.scss';
import '../styles/mixins.scss';
import Information from './Information';
import Avatar from '../img/eus.png'; 

const Navbar = () => {
  return (
    <aside id="navbar">
      <img src={Avatar} alt="Jean Leal" />
      <p className="title">Desenvolvedor FrontEnd</p>
      <Social />
      <Information />
      <a href="" className="btn">
        Download currículo 
      </a>
    </aside>
  );
};

export default Navbar