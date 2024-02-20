import {useState, useEffect} from 'react';
import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";

const SelectHeader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default SelectHeader;