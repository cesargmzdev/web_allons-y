import logo from "../assets/svg/logo.svg";
import logo2 from "../assets/logos/Logo2-removebg 2.png";
import heart from "../assets/svg/heart.svg";
import {Link} from "react-router-dom";

const DesktopHeader = () => {
  return (
    <header className="flex sticky top-0 bg-white z-10 drop-shadow-md items-center p-5">
      <Link to={'/'}>
        <section className="flex items-center gap-4 xl:gap-14 2xl:gap-20">
          <img src={logo} alt="logo" className="w-14" />
          <img src={logo2} alt="logo2" className="w-36" />
        </section>
      </Link>
      <nav className="flex-grow">
        <ul className="flex justify-end items-center flex-nowrap gap-4 text-nowrap text-[#3F936D] xl:gap-14 2xl:gap-20">
          <Link>
            <li>HISTORIA</li>
          </Link>
          <Link>
            <li>QUIENES SOMOS</li>
          </Link>
          <Link>
            <li>GALERÍA</li>
          </Link>
          <Link to={'/calendar'}>
            <li>CALENDARIO Y ACTIVIDADES</li>
          </Link>
          <Link>
            <li>CONTACTO</li>
          </Link>
          <Link>
            <li>
              <button type="button" className="bg-[#3F936D] rounded-xl text-white flex items-center py-1 px-4 gap-2">APÚNTATE
                <img src={heart} alt="heart" className="w-5 h-5" />
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;