import {useRef, useEffect, useState, useCallback} from 'react';
import logo from "../assets/svg/logo.svg";
import logo2 from "../assets/logos/Logo2-removebg 2.png";
import three_lines from "../assets/svg/3-lines.svg";
import logo_sidebar from "../assets/svg/logo-opened-sidebar.svg";
import hide_button from "../assets/svg/hide-button.svg";
import heart from "../assets/svg/heart.svg";
import {Link} from 'react-router-dom';

const MobileHeader = () => {
  const headerRef = useRef(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (isSidebarOpen) {
      return;
    }

    if (window.scrollY > 0) {
      headerRef.current.classList.remove('opacity-100');
      headerRef.current.classList.add('opacity-80');
    } else {
      headerRef.current.classList.remove('opacity-80');
      headerRef.current.classList.add('opacity-100');
    }
  }, [isSidebarOpen]);

  const sideBar = useCallback(() => {
    setSidebarOpen(!isSidebarOpen);
    const header = headerRef.current;
    header.classList.toggle('bg-[#019F6C]');
    header.classList.toggle('bg-white');
    if (window.scrollY !== 0) {
      header.classList.toggle('opacity-80');
    }
    const logo1_element = document.querySelector('#logo');
    const logo2_element = document.querySelector('#logo2');
    const three_lines_element = document.querySelector('#three_lines');
    logo2_element.classList.toggle('mix-blend-plus-lighter');
    logo1_element.setAttribute('src', logo1_element.getAttribute('src') === logo_sidebar ? logo : logo_sidebar);
    three_lines_element.setAttribute('src', three_lines_element.getAttribute('src') === hide_button ? three_lines : hide_button);
  }, [isSidebarOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header ref={headerRef} className="bg-white sticky top-0 flex justify-between items-center p-5 opacity-100 transition-opacity duration-75">
        <Link to={'/'}>
          <img src={logo} id="logo" alt="logo" className="h-10" />
        </Link>
        <Link to={'/'}>
          <img src={logo2} id="logo2" alt="logo2" className="h-7" />
        </Link>
        <button type="button" onClick={sideBar}>
          <img src={three_lines} id="three_lines" alt="three_lines" className="h-9 w-9" />
        </button>
      </header>
      <section id="side_bar" className={`${isSidebarOpen ? 'fixed w-dvw h-dvh' : 'hidden'} bg-[#019F6C] z-10`}>
        <nav className="mt-10 px-10">
          <ul className="space-y-14 text-xl text-[#B9E2B6]">
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
                <div className="flex items-center gap-6">
                  APÚNTATE
                  <img src={heart} alt="heart" className="h-8" />
                </div>
              </li>
            </Link>
          </ul>
        </nav>
        <section className="text-white px-5 mt-12 w-full text-2xl">
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