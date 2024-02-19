import {Carousel} from "keep-react";
import voluntariado1 from '../assets/Imgs/Voluntariados/voluntariado1.jpg';
import voluntariado2 from '../assets/Imgs/Voluntariados/voluntariado2.webp';
import CasaST1 from '../assets/Imgs/Voluntariados/Casa Santa Teresa/1.jpg';
import CasaST2 from '../assets/Imgs/Voluntariados/Casa Santa Teresa/2.jpg';
import CasaST3 from '../assets/Imgs/Voluntariados/Casa Santa Teresa/3.jpg';
import CasaST4 from '../assets/Imgs/Voluntariados/Casa Santa Teresa/4.jpg';
import CasaST5 from '../assets/Imgs/Voluntariados/Casa Santa Teresa/5.jpg';
import CasaST6 from '../assets/Imgs/Voluntariados/Casa Santa Teresa/6.jpg';
import CasaST7 from '../assets/Imgs/Voluntariados/Casa Santa Teresa/7.jpg';


export const CarouselComponent = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true} className="h-[50dvh] sm:h-[50dvh] md:h-[50dvh] xl:h-[50dvh] 2xl:h-[50dvh] sm:mx-[20%] sm:rounded-2xl m-5 bg-[#47d693]">
      <img src={voluntariado1} alt="voluntariado" className="object-contain" />
      <img src={voluntariado2} alt="voluntariado" className="object-contain" />
      <img src={CasaST1} alt="CasaST" className="object-contain" />
      <img src={CasaST2} alt="CasaST" className="object-contain" />
      <img src={CasaST3} alt="CasaST" className="object-contain" />
      <img src={CasaST4} alt="CasaST" className="object-contain" />
      <img src={CasaST5} alt="CasaST" className="object-contain" />
      <img src={CasaST6} alt="CasaST" className="object-contain" />
      <img src={CasaST7} alt="CasaST" className="object-contain" />
    </Carousel>
  );
};
