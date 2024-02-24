import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SelectHeader from "../features/SelectHeader";

const Contact = () => {
  return (
    <>
      {SelectHeader()}
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Contact;