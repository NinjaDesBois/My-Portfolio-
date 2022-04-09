import './index.scss';
import {Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
     <Link className='logo' to="/">
         <img src={LogoS} alt="logo" />
         <img className='sub-logo' src={LogoSubtitle} alt="MyNameSouhib" />
     </Link>
     <nav>
         <NavLink exact="true" activeclassname="active" to="/" >
             <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
         </NavLink>
         <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
             <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
         </NavLink>
         <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
             <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
         </NavLink>
     </nav>
     <ul>
         <li>
             <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/souhib-bahassi-5ba950176/">
             <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
             </a>
         </li>
         <li>
             <a target="_blank" rel='noreferrer' href="https://github.com/NinjaDesBois">
             <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
             </a>
         </li>
         <li>
             <a target="_blank" rel='noreferrer' href="https://dev.to/ninjadesbois">
             <FontAwesomeIcon icon={faDev} color="#4d4d4e"/>
             </a>
         </li>
         <li>
             <a target="_blank" rel='noreferrer' href="https://discordapp.com/users/712416187551580251">
             <FontAwesomeIcon icon={faDiscord} color="#4d4d4e"/>
             </a>
         </li>
     </ul>
    </div>
)

export default Sidebar