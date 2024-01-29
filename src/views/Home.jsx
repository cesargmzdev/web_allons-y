import MobileHeader from "../components/MobileHeader";
import imagenGrupo2 from "../assets/Imgs/Fotos presentación home/imagenGrupo2.jpg";
import imagen2 from "../assets/Imgs/Fotos presentación home/imagen2.jpg";
import imagenGrupo from "../assets/Imgs/Fotos presentación home/imagenGrupo.jpg";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";

const Home = () => {
  return (
    <>
      <MobileHeader />
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
        <h3 className="text-center text-xl p-4 text-[#49A87C]">ACCIÓN, FORMACIÓN Y AVENTURA</h3>
        <section>
          <ul className="text-[#49A87C] flex justify-around  text-sm">
            <li className="grid place-items-center">
              <p>Voluntariados</p>
              <img src={icon1} alt="icon1" className="w-8" />
            </li>
            <li className="grid place-items-center">
              <p>Conferencias</p>
              <img src={icon2} alt="icon2" className="w-8" />
            </li>
            <li className="grid place-items-center">
              <p>Convivencias</p>
              <img src={icon3} alt="icon3" className="w-8" />
            </li>
            <li className="grid place-items-center">
              <p>Excursiones</p>
              <img src={icon4} alt="icon4" className="w-8" />
            </li>
            <li className="grid place-items-center">
              <p>Actividades</p>
              <img src={icon5} alt="icon5" className="w-8" />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;