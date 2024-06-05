import Footer from '../components/Footer';
import SelectHeader from '../features/SelectHeader';

const History = () => {
  return (
    <div>
      {SelectHeader()}
      <main className="grid h-[80dvh] place-items-center">
        <section className="text-center">
          <h1 className="pb-10 text-xl text-[#019F6C] lg:text-5xl">¿QUIENES SOMOS?</h1>
          <p className="text-pretty p-5 pb-10 sm:mx-[20%] lg:text-2xl">
            “Quiero ayudar pero no sé ni como ni donde”
            <br />
            “Me da miedo el compromiso”
            <br />
            “Quiero hacer voluntariado pero soy menor”
            <br />
            “Quiero formar parte de una familia”
          </p>
          <p className="text-pretty p-5 sm:mx-[20%] lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates voluptatibus
            sint quo est fugit molestias consectetur magni, fugiat quia libero, numquam nam
            architecto? Dolore vitae consectetur delectus asperiores hic! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Recusandae magni quo dolor itaque corrupti sint at
            doloribus cum harum! Cumque sed dolores numquam quo rerum maxime consequuntur sint ut
            veritatis? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section className="flex flex-col gap-5 text-center text-lg text-[#019F6C] lg:text-2xl">
          <h2>&quot;MÁS QUE VOLUNTARIADOS&quot;</h2>
          <h2>&quot;DAR SIN RECORDAR, RECIBIR SIN OLVIDAR&quot;</h2>
          <h2>&quot;ALMAS MISIONERAS&quot;</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default History;
