import {Carousel} from "keep-react";
import aventura from '../assets/Imgs/Voluntariados/aventura.jpg';
// import voluntariado1 from '../assets/Imgs/Voluntariados/voluntariado1.jpg';
// import voluntariado2 from '../assets/Imgs/Voluntariados/voluntariado2.HEIC';
// import voluntariado3 from '../assets/Imgs/Voluntariados/voluntariado3.HEIC';
// import voluntariado4 from '../assets/Imgs/Voluntariados/voluntariado4.HEIC';

export const CarouselComponent = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true} className="sm:h-[50dvh] md:h-[50dvh] xl:h-[50dvh] 2xl:h-[60dvh] p-5">
      <img src={aventura} alt="" />
      <img src={aventura} alt="" />
      <img src={aventura} alt="" />
    </Carousel>
  );
};
