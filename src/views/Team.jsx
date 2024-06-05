import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import selectHeader from '../features/SelectHeader';
import Copresidentas from '../assets/Imgs/Fotos equipo/Copresidentas.jpg';
import Copresidentas2 from '../assets/Imgs/Fotos equipo/Copresidentas2.jpg';
import GuioCopresidenta from '../assets/Imgs/Fotos equipo/GuioLopezSorsCopresidenta.jpg';
import MarcosTesorero from '../assets/Imgs/Fotos equipo/MarcosOjedaTesorero.jpg';
import JuliaSecretaria from '../assets/Imgs/Fotos equipo/Juliasecretaria.jpg';
const Team = () => {
  return (
    <>
      {selectHeader()}
      <main>
        <section className="flex flex-col gap-5 p-5 text-center">
          <h1 className="text-xl text-[#019F6C] lg:text-5xl">EQUIPO ALLONS-Y</h1>
          <p className="text-justify text-lg lg:text-center lg:text-2xl">
            En Allons-y somos estudiantes universitarios con infinitas ganas de darnos y ayudar a
            los demás y aportar un poquito de buen corazón allá donde vamos.
          </p>
        </section>
        <section>
          <TeamCard
            title="Guiomar López-Sors y Aian Martín - cofundadoras y copresidentas"
            images={[Copresidentas, Copresidentas2]}
          />
          <TeamCard title="Guiomar López-Sors - copresidenta" images={[GuioCopresidenta]} />
          <TeamCard title="Marcos Ojeda - tesorero" images={[MarcosTesorero]} />
          <TeamCard title="Julia Hernández Mora - secretaria general" images={[JuliaSecretaria]} />
          <article className="flex flex-col items-center justify-center gap-5 p-5 text-lg lg:text-2xl">
            <h2 className="text-[#019F6C]">Coordinadores</h2>
            <ul className="pl-5">
              <li>
                General
                <ul className="list-disc pl-10">
                  <li>Guiomar López-Sors</li>
                </ul>
              </li>
              <li>
                Voluntariado
                <ul className="list-disc pl-10">
                  <li>Isabel De Perier</li>
                  <li>Carmela Corral</li>
                  <li>Almudena Ortíz</li>
                  <li>Guiomar Figueroa</li>
                </ul>
              </li>
              <li>
                Formación
                <ul className="list-disc pl-10">
                  <li>María García</li>
                </ul>
              </li>
            </ul>
            <h2 className="text-[#019F6C]">Encargada de Redes Sociales</h2>
            <ul className="pl-5">
              <li>Andrea Orós</li>
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Team;
