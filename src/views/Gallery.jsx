import selectHeader from '../features/SelectHeader.jsx';
import Footer from '../components/Footer';
import {CarouselComponent} from '../components/Carousel.jsx';
import Testimonies from '../components/Testimonies.jsx';
const Gallery = () => {
  return (
    <>
      {selectHeader()}
      <main>
        <CarouselComponent />
        <h1 className="text-center text-2xl p-4 lg:pt-14 lg:pb-8 lg:text-5xl text-[#49A87C]">TESTIMONIOS</h1>
        <Testimonies />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;