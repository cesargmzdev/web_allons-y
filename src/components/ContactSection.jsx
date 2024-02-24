import Whatsapp from '../assets/svg/Whatsapp.svg';
import Instragram from '../assets/svg/Instagram.svg';
import Linkedin from '../assets/svg/Linkedin.svg';
import Gmail from '../assets/svg/Gmail.svg';

const ContactSection = () => {
  return (
    <section className="pt-20 h-[80dvh] text-center flex flex-col gap-16 lg:gap-32">
      <h1 className="text-[#019F6C] text-xl lg:text-5xl">¿CÓMO NOS PUEDES CONTACTAR?</h1>
      <ul className="flex flex-col gap-20 lg:text-2xl">
        <li>Estamos localizados en Madrid, España</li>
        <li className='flex justify-center'>
          <a href="mailto:allonsy.coordinadoras@gmail.com" className='flex gap-5 hover:scale-105 hover:duration-100'><img src={Gmail} alt="Gmail icon" className='w-5 lg:w-7' />Correo: <strong>allonsy.coordinadoras@gmail.com</strong></a>
        </li>
        <li className='flex justify-center'>
          <a href="http://www.instagram.com/allonsy.es/" target="_blank" rel="noopener noreferrer" className='flex gap-5 hover:scale-105 hover:duration-100'><img src={Instragram} alt="Instragram icon" className='w-5 lg:w-7' />Instragram: <strong>@allonsy.es</strong></a>
        </li>
        <li className='flex justify-center'>
          <a href="http://www.linkedin.com/company/allonsy/about/" target="_blank" rel="noopener noreferrer" className='flex gap-5 hover:scale-105 hover:duration-100'><img src={Linkedin} alt="Linkedin icon" className='w-5 lg:w-7' />Linkedin: <strong>Allons-y</strong></a>
        </li>
        <li className='flex justify-center'>
          <a href="https://chat.whatsapp.com/C39yIsZwddhCtfhzffDg5q" target="_blank" rel="noopener noreferrer" className='flex gap-5 hover:scale-105 hover:duration-100'><img src={Whatsapp} alt="Whatsapp icon" className='w-5 lg:w-7' />Whatsapp: <strong>ALLONS-Y universitarios</strong></a>
        </li>
      </ul>
    </section>
  );
};

export default ContactSection;