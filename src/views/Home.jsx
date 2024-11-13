import imagenGrupo2 from '../assets/Imgs/Fotos presentación home/imagenGrupo2.jpg';
import imagen2 from '../assets/Imgs/Fotos presentación home/imagen2.jpg';
import imagenGrupo from '../assets/Imgs/Fotos presentación home/imagenGrupo.jpg';
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';
import icon4 from '../assets/icons/icon4.png';
import icon5 from '../assets/icons/icon5.png';
import mercadillo2 from '../assets/Imgs/Voluntariados/Mercadillo Solidario/mercadillo2.jpg';
import formacion2 from '../assets/Imgs/Formación/formacion2.jpg';
import adventure from '../assets/Imgs/Voluntariados/aventura.jpg';
import Footer from '../components/Footer';
import selectHeader from '../features/SelectHeader';

const Home = () => {
  return (
    <>
      {selectHeader()}
      <main>
        <section className="bg-[#019F6C] px-5 text-xl text-white lg:h-[50dvh] lg:px-36 lg:py-8 lg:text-5xl xl:px-64 2xl:h-[58dvh] 2xl:px-[30%] 2xl:py-10">
          <h3>&quot;QUE NADIE VENGA A TI,</h3>
          <h3 className="text-right">SIN IRSE MEJOR Y MÁS FELIZ&quot;</h3>
          <div className="md:flex md:justify-center md:gap-6 md:pt-8">
            <img src={imagen2} alt="imagen2" className="rounded-2xl lg:w-[28dvw] 2xl:w-[18dvw]" />
            <img
              src={imagenGrupo}
              alt="imagenGrupo"
              className="rounded-2xl object-cover lg:w-[28dvw] 2xl:w-[18dvw]"
            />
            <img
              src={imagenGrupo2}
              alt="imagenGrupo2"
              className="rounded-2xl lg:w-[28dvw] 2xl:w-[18dvw]"
            />
          </div>
        </section>
        <section className="my-10">
          <h2 className="p-4 text-center text-2xl text-[#49A87C] lg:pb-8 lg:pt-14 lg:text-5xl">
            ACCIÓN, FORMACIÓN Y AVENTURA
          </h2>
          <ul className="flex justify-around text-sm text-[#49A87C] lg:text-2xl">
            <li className="grid place-items-center">
              <p>Voluntariados</p>
              <img src={icon1} alt="icon1" className="w-7 lg:w-16" />
            </li>
            <li className="grid place-items-center">
              <p>Conferencias</p>
              <img src={icon2} alt="icon2" className="w-7 lg:w-16" />
            </li>
            <li className="grid place-items-center">
              <p>Convivencias</p>
              <img src={icon3} alt="icon3" className="w-7 lg:w-16" />
            </li>
            <li className="grid place-items-center">
              <p>Excursiones</p>
              <img src={icon4} alt="icon4" className="w-7 lg:w-16" />
            </li>
            <li className="grid place-items-center">
              <p>Actividades</p>
              <img src={icon5} alt="icon5" className="w-7 lg:w-16" />
            </li>
          </ul>
        </section>
        <hr className="hidden lg:mx-10 lg:my-16 lg:block lg:h-2 lg:bg-[#019F6C]" />
        <section>
          <h3 className="px-5 pb-5 text-2xl text-[#019F6C] lg:px-10 lg:text-4xl">ACCIÓN SOCIAL</h3>
          <article className="px-5 pb-9 lg:flex lg:items-center lg:gap-5 lg:px-10">
            <img
              src={mercadillo2}
              className="rounded-2xl pb-3 lg:w-1/2"
              alt="imagen acción social"
            />
            <p className="text-pretty text-2xl">
              En Allons-y organizamos voluntariados a escala local (Madrid), nacional (Trujillo) e
              internacional (Perú). Existen voluntariados para todo tipo de perfiles y para todo
              tipo de disponibilidades. Únete a los más 200 voluntarios que somos ya!
            </p>
          </article>
          <h3 className="px-5 pb-5 text-2xl text-[#019F6C] lg:px-10 lg:text-right lg:text-4xl">
            CONFERENCIAS
          </h3>
          <article className="px-5 pb-9 lg:flex lg:flex-row-reverse lg:items-center lg:gap-5 lg:px-10">
            <img
              src={formacion2}
              className="rounded-2xl pb-3 lg:w-1/2"
              alt="imagen acción social"
            />
            <p className="text-pretty text-2xl">
              En Allonsy, creemos en el poder de la formación continua. Nuestras conferencias son
              oportunidades envolventes donde voluntarios adquieren conocimientos prácticos,
              desarrollan habilidades esenciales y se inspiran mutuamente. Estos eventos no solo
              fortalecen la capacidad de nuestra red para impactar positivamente, sino que también
              fomentan un sentido de comunidad y colaboración entre aquellos comprometidos con el
              servicio solidario.
            </p>
          </article>
          <h3 className="px-5 pb-5 text-2xl text-[#019F6C] lg:px-10 lg:text-4xl">AVENTURA</h3>
          <article className="px-5 pb-9 lg:flex lg:items-center lg:gap-5 lg:px-10">
            <img src={adventure} className="rounded-2xl pb-3 lg:w-1/2" alt="imagen acción social" />
            <p className="text-pretty text-2xl">
              En Allonsy, la solidaridad va más allá de las acciones individuales; es una aventura
              compartida que construimos juntos. Nuestros voluntarios no solo se dedican a
              actividades altruistas, sino que también se sumergen en emocionantes aventuras
              colectivas. Desde vibrantes excursiones que estrechan lazos hasta convivencias que
              fortalecen nuestra conexión, cada experiencia es una oportunidad para crecer, aprender
              y forjar amistades duraderas. ¡Embárcate en esta aventura solidaria con Allonsy!
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
