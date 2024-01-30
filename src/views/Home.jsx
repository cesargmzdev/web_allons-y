import MobileHeader from "../components/MobileHeader";
import imagenGrupo2 from "../assets/Imgs/Fotos presentación home/imagenGrupo2.jpg";
import imagen2 from "../assets/Imgs/Fotos presentación home/imagen2.jpg";
import imagenGrupo from "../assets/Imgs/Fotos presentación home/imagenGrupo.jpg";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import mercadillo2 from "../assets/Imgs/Voluntariados/Mercadillo Solidario/mercadillo2.jpg";
import formacion2 from "../assets/Imgs/Formación/formacion2.jpg";
import adventure from "../assets/Imgs/Voluntariados/aventura.jpg";
import Footer from "../components/Footer";
import DesktopHeader from "../components/DesktopHeader";

const selectHeader = () => {
  if (window.innerWidth < 1024) {
    return <MobileHeader />;
  } else {
    return <DesktopHeader />;
  }
};

const Home = () => {
  return (
    <>
      {selectHeader()}
      <main>
        <section className="bg-[#019F6C] text-white px-5 text-xl">
          <h3>
            &quot;QUE NADIE VENGA A TI,
          </h3>
          <h3 className="text-right">
            SIN IRSE MEJOR Y MÁS FELIZ&quot;
          </h3>
        </section>
        <section>
          <img src={imagen2} alt="imagen2" />
          <img src={imagenGrupo} alt="imagenGrupo" />
          <img src={imagenGrupo2} alt="imagenGrupo2" />
        </section>
        <section className="my-10">
          <h2 className="text-center text-2xl p-4 text-[#49A87C]">ACCIÓN, FORMACIÓN Y AVENTURA</h2>
          <ul className="text-[#49A87C] flex justify-around  text-sm">
            <li className="grid place-items-center">
              <p>Voluntariados</p>
              <img src={icon1} alt="icon1" className="w-7" />
            </li>
            <li className="grid place-items-center">
              <p>Conferencias</p>
              <img src={icon2} alt="icon2" className="w-7" />
            </li>
            <li className="grid place-items-center">
              <p>Convivencias</p>
              <img src={icon3} alt="icon3" className="w-7" />
            </li>
            <li className="grid place-items-center">
              <p>Excursiones</p>
              <img src={icon4} alt="icon4" className="w-7" />
            </li>
            <li className="grid place-items-center">
              <p>Actividades</p>
              <img src={icon5} alt="icon5" className="w-7" />
            </li>
          </ul>
        </section>
        <section>
          <article className="px-5 pb-8">
            <h3 className="text-[#019F6C] text-2xl pb-5">ACCIÓN SOCIAL</h3>
            <img src={mercadillo2} className="pb-3" alt="imagen acción social" />
            <p className="text-pretty">En Allons-y organizamos voluntariados a escala local (Madrid), nacional (Trujillo) e internacional (Perú).
              Existen voluntariados para todo tipo de perfiles y para todo tipo de disponibilidades.
              Únete a los más 200 voluntarios que somos ya!</p>
          </article>
          <article className="px-5 pb-9">
            <h3 className="text-[#019F6C] text-2xl pb-5">ACCIÓN SOCIAL</h3>
            <img src={formacion2} className="pb-3" alt="imagen acción social" />
            <p className="text-pretty">En Allonsy, creemos en el poder de la formación continua. Nuestras conferencias son oportunidades envolventes donde voluntarios adquieren conocimientos prácticos, desarrollan habilidades esenciales y se inspiran mutuamente. Estos eventos no solo fortalecen la capacidad de nuestra red para impactar positivamente, sino que también fomentan un sentido de comunidad y colaboración entre aquellos comprometidos con el servicio solidario.</p>
          </article>
          <article className="px-5 pb-9">
            <h3 className="text-[#019F6C] text-2xl pb-5">ACCIÓN SOCIAL</h3>
            <img src={adventure} className="pb-3" alt="imagen acción social" />
            <p className="text-pretty">En Allonsy, la solidaridad va más allá de las acciones individuales; es una aventura compartida que construimos juntos. Nuestros voluntarios no solo se dedican a actividades altruistas, sino que también se sumergen en emocionantes aventuras colectivas. Desde vibrantes excursiones que estrechan lazos hasta convivencias que fortalecen nuestra conexión, cada experiencia es una oportunidad para crecer, aprender y forjar amistades duraderas. ¡Embárcate en esta aventura solidaria con Allonsy!</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;