import { Carousel } from 'keep-react';
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
    <Carousel
      slideInterval={5000}
      showControls={true}
      indicators={true}
      className="m-5 h-[70dvh] bg-[#47d693] sm:mx-[20%] sm:h-[70dvh] sm:rounded-2xl md:h-[70dvh] xl:h-[70dvh] 2xl:h-[70dvh]"
    >
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
