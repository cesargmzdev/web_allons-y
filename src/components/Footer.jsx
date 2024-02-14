import Whatsapp from '../assets/svg/Whatsapp.svg';
import Instragram from '../assets/svg/Instagram.svg';
import Linkedin from '../assets/svg/Linkedin.svg';
import {Link} from 'react-router-dom';

const Year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <section className='flex justify-between px-5 lg:px-10'>
        <Link className=''>
          <img src={Whatsapp} alt="Whatsapp icon" className='w-9 hover:scale-125 hover:duration-100' />
        </Link>
        <Link className=''>
          <img src={Instragram} alt="Instagram icon" className='w-9 hover:scale-125 hover:duration-100' />
        </Link>
        <Link className=''>
          <img src={Linkedin} alt="Linkedin icon" className='w-9 hover:scale-125 hover:duration-100' />
        </Link>
      </section>
      <section className='flex-col text-center pt-5 text-sm'>
        <p>&copy; Allons-y. Todos los derechos reservados</p>
        <p></p>
        <p>{Year}</p>
      </section>
    </footer>
  );
};

export default Footer;