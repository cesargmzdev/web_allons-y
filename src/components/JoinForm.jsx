const JoinForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch('http://localhost:3000/volunteers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Formulario enviado \n Nos pondremos en contacto contigo pronto \n Muchas gracias!');
        e.target.reset();
      });
  };
  return (
    //form to join a volunteer
    <form
      className="m-5 flex flex-col gap-6 text-center lg:text-2xl"
      id="VolunteersForm"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl text-[#019F6C] lg:text-5xl">
        RELLENA ESTE FORMULARIO SI ESTÁS INTERESADO EN PARTICIPAR EN ALGÚN VOLUNTARIADO
      </h1>
      <h2 className="text-xl text-[#019F6C] lg:text-5xl">Nosotros te contactaremos</h2>
      <label htmlFor="name">Nombre y apellidos:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="self-center border-2 border-[#49A87C] sm:mx-[20%] lg:w-1/4"
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        className="self-center border-2 border-[#49A87C] sm:mx-[20%] lg:w-1/4"
        required
      />
      <label htmlFor="phone">Teléfono:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="self-center border-2 border-[#49A87C] sm:mx-[20%] lg:w-1/4"
        required
      />
      <label htmlFor="volunteering">Indica el voluntariado en el que te gustaría participar:</label>
      <input
        type="text"
        name="volunteering"
        id="volunteering"
        className="self-center border-2 border-[#49A87C] sm:mx-[20%] lg:w-1/4"
        required
      />
      <label htmlFor="comment">Comentario:</label>
      <textarea
        id="comment"
        name="comment"
        className="resize-none self-center border-2 border-[#49A87C] sm:mx-[20%] lg:w-1/4"
        required
      />
      <input
        type="submit"
        value="Enviar"
        className="w-fit cursor-pointer self-center rounded-md bg-[#b9e2b6] p-1 duration-100 hover:scale-110"
      />
    </form>
  );
};

export default JoinForm;
