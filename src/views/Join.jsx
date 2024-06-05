import Footer from '../components/Footer';
import JoinForm from '../components/JoinForm';
import SelectHeader from '../features/SelectHeader';

const Join = () => {
  return (
    <>
      {SelectHeader()}
      <main>
        <JoinForm />
      </main>
      <Footer />
    </>
  );
};

export default Join;
