import MobileHeader from "../components/MobileHeader";
import imagenGrupo2 from "../assets/Imágenes/Fotos presentación home/imagenGrupo2.jpg";

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
        <img src={imagenGrupo2} alt="imagenGrupo2" className="h-full" />
        <h3 className="text-center pt-5">ACCIÓN FORMACIÓN Y AVENTURA</h3>
      </main>
    </>
  );
};

export default Home;