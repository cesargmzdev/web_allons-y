import Whatsapp from '../assets/svg/Whatsapp.svg';
import Instragram from '../assets/svg/Instagram.svg';
import Linkedin from '../assets/svg/Linkedin.svg';
import Gmail from '../assets/svg/Gmail.svg';

const Year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <nav className="flex justify-between px-5 lg:px-10">
        <a
          href="https://chat.whatsapp.com/C39yIsZwddhCtfhzffDg5q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Whatsapp}
            alt="Whatsapp icon"
            className="w-9 hover:scale-125 hover:duration-100"
          />
        </a>

        <a href="http://www.instagram.com/allonsy.es/" target="_blank" rel="noopener noreferrer">
          <img
            src={Instragram}
            alt="Instagram icon"
            className="w-9 hover:scale-125 hover:duration-100"
          />
        </a>

        <a href="mailto:allonsy.coordinadoras@gmail.com">
          <img src={Gmail} alt="Whatsapp icon" className="w-9 hover:scale-125 hover:duration-100" />
        </a>

        <a
          href="http://www.linkedin.com/company/allonsy/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Linkedin}
            alt="Linkedin icon"
            className="w-9 hover:scale-125 hover:duration-100"
          />
        </a>
      </nav>
      <section className="flex-col pt-5 text-center text-sm">
        <p>&copy; Allons-y {Year}</p>
      </section>
    </footer>
  );
};

export default Footer;
