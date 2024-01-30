import logo from "../assets/svg/logo.svg";
import logo2 from "../assets/logos/Logo2-removebg 2.png";
import heart from "../assets/svg/heart.svg";

const DesktopHeader = () => {
  return (
    <header className="flex items-center p-5 px-36">
      <section className="flex items-center gap-16">
        <img src={logo} alt="logo" className="" />
        <img src={logo2} alt="logo2" className="" />
      </section>
      <nav className="flex-grow">
        <ul className="flex justify-end items-center flex-nowrap gap-24 text-[#3F936D]">
          <li>HISTORIA</li>
          <li>QUIENES SOMOS</li>
          <li>GALERÍA</li>
          <li>CALENDARIO Y ACTIVIDADES</li>
          <li>CONTACTO</li>
          <li>
            <button type="button" className="bg-[#3F936D] rounded-xl text-white flex items-center py-1 px-4 gap-2">APÚNTATE
              <img src={heart} alt="heart" className="w-5 h-5" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;