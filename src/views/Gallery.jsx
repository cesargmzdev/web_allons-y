import selectHeader from '../features/SelectHeader.jsx';
import Footer from '../components/Footer';
import { CarouselComponent } from '../components/Carousel.jsx';
import Testimonies from '../components/Testimonies.jsx';
const Gallery = () => {
  return (
    <>
      {selectHeader()}
      <main>
        <CarouselComponent />
        <h1 className="p-4 text-center text-2xl text-[#49A87C] lg:pb-8 lg:pt-14 lg:text-5xl">
          TESTIMONIOS
        </h1>
        <Testimonies />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
