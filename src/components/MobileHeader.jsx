import logo from "../assets/svg/logo.svg";
import logo2 from "../assets/logos/Logo2-removebg 2.png";
import three_lines from "../assets/svg/3-lines.svg";
import logo_sidebar from "../assets/svg/logo-opened-sidebar.svg";
import hide_button from "../assets/svg/hide-button.svg";
import heart from "../assets/svg/heart.svg";

const sideBar = () => {
  const header = document.querySelector('header');
  const three_lines_element = document.querySelector('#three_lines');
  const logo1_element = document.querySelector('#logo');
  const logo2_element = document.querySelector('#logo2');
  header.classList.toggle('bg-[#019F6C]');
  // Alternar los SVGs
  logo2_element.classList.toggle('mix-blend-difference');
  logo1_element.setAttribute('src', logo1_element.getAttribute('src') === logo_sidebar ? logo : logo_sidebar);
  three_lines_element.setAttribute('src', three_lines_element.getAttribute('src') === hide_button ? three_lines : hide_button);
  // Alternar el menú
  const side_bar = document.querySelector('#side_bar');
  side_bar.classList.toggle('hidden');
  // section.classList.toggle('fixed');
};


const MobileHeader = () => {
  return (
    <>
      <header className="bg-white flex justify-between items-center p-5">
        <img src={logo} id="logo" alt="logo" className="h-10" />
        <img src={logo2} id="logo2" alt="logo2" className="h-7" />
        <button type="button" onClick={sideBar}>
          <img src={three_lines} id="three_lines" alt="three_lines" className="h-9 w-9" />
        </button>
      </header>
      <section id="side_bar" className="hidden h-dvh bg-[#019F6C]">
        <nav className="flex-col absolute top-[15%] left-[15%] space-y-10 text-3xl text-[#B9E2B6]">
          <ul className="space-y-12">
            <li>HISTORIA</li>
            <li>QUIENES SOMOS</li>
            <li>GALERÍA</li>
            <li>CALENDARIO Y ACTIVIDADES</li>
            <li>CONTACTO</li>
            <li>
              <div className="flex items-center gap-6">
                APÚNTATE
                <img src={heart} alt="heart" className="h-8" />
              </div>
            </li>
          </ul>
        </nav>
        <section className="text-white absolute bottom-32 px-5 w-full text-2xl">
          <h3>
            &quot;QUE NADIE VENGA A TI,
          </h3>
          <h3 className="text-right">
            SIN IRSE MEJOR Y MÁS FELIZ&quot;
          </h3>
        </section>
      </section>
    </>
  );
};

export default MobileHeader;