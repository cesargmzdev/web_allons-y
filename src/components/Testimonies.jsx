import { useState, useEffect } from 'react';

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/testimonies')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTestimonies(data.reverse());
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const testimonyText = document.getElementById('TestimonyText').value;
    fetch('http://localhost:3000/testimonies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: testimonyText })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Testimonio enviado');
        setTestimonies((prevTestimonies) => [data, ...prevTestimonies]);
        form.reset();
      });
  };

  return (
    <>
      <form
        id="TestimonyForm"
        className="m-5 mb-10 flex flex-col gap-5 text-center lg:text-2xl"
        onSubmit={handleSubmit}
      >
        <label htmlFor="TestimonyText">Escribe aqui tu testimonio anónimo</label>
        <textarea
          name="TestimonyText"
          form="TestimonyForm"
          id="TestimonyText"
          cols="30"
          rows="5"
          className="resize-none border-2 border-[#49A87C] sm:mx-[20%]"
          required
        />
        <input
          type="submit"
          value="Enviar"
          className="w-fit cursor-pointer self-center rounded-md bg-[#b9e2b6] p-1 duration-100 hover:scale-110"
        />
      </form>
      <section>
        {testimonies.length === 0 ? (
          <>
            <hr className="m-5 sm:mx-[20%]" />
            <article className="mb-5 lg:text-2xl">
              <p className="text-center sm:mx-[20%]">no hay testimonios</p>
            </article>
          </>
        ) : (
          testimonies.map((testimony, index) => {
            return (
              <>
                <hr
                  className={
                    index === 0
                      ? 'm-5 border-2 border-[#49A87C] sm:mx-[20%]'
                      : 'm-5 border-2 sm:mx-[20%]'
                  }
                />
                <article key={index} className="mb-5 lg:text-2xl">
                  <p className="text-pretty p-5 text-center sm:mx-[20%]">{testimony.text}</p>
                </article>
              </>
            );
          })
        )}
      </section>
    </>
  );
};

export default Testimonies;
