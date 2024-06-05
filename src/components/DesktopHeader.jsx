import logo from '../assets/svg/logo.svg';
import logo2 from '../assets/logos/Logo2-removebg 2.png';
import heart from '../assets/svg/heart.svg';
import { Link } from 'react-router-dom';

const DesktopHeader = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center bg-white p-5 drop-shadow-md">
      <Link to={'/'}>
        <section className="flex items-center gap-4 xl:gap-14 2xl:gap-20">
          <img src={logo} alt="logo" className="w-14" />
          <img src={logo2} alt="logo2" className="w-36" />
        </section>
      </Link>
      <nav className="flex-grow">
        <ul className="flex flex-nowrap items-center justify-end gap-4 text-nowrap text-[#3F936D] xl:gap-14 2xl:gap-20">
          <Link to={'/history'}>
            <li className="hover:scale-105 hover:font-extrabold hover:duration-100">HISTORIA</li>
          </Link>
          <Link to={'/team'}>
            <li className="hover:scale-105 hover:font-extrabold hover:duration-100">
              QUIENES SOMOS
            </li>
          </Link>
          <Link to={'/gallery'}>
            <li className="hover:scale-105 hover:font-extrabold hover:duration-100">
              GALERÍA Y TESTIMONIOS
            </li>
          </Link>
          <Link to={'/calendar'}>
            <li className="hover:scale-105 hover:font-extrabold hover:duration-100">
              CALENDARIO Y ACTIVIDADES
            </li>
          </Link>
          <Link to={'/contact'}>
            <li className="hover:scale-105 hover:font-extrabold hover:duration-100">CONTACTO</li>
          </Link>
          <Link to={'/join'}>
            <li className="hover:animate-bounce hover:font-extrabold hover:duration-100">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-[#3F936D] px-4 py-1 text-white"
              >
                APÚNTATE
                <img src={heart} alt="heart" className="h-5 w-5" />
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;
