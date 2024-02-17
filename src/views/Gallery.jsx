import selectHeader from '../features/SelectHeader.jsx';
import Footer from '../components/Footer';
import {CarouselComponent} from '../components/Carousel.jsx';
const Gallery = () => {
  return (
    <>
      {selectHeader()}
      {/* <main className='h-screen'> */}
      <CarouselComponent />
      {/* </main> */}
      <Footer />
    </>
  );
};

export default Gallery;