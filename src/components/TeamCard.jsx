import PropTypes from 'prop-types';

const TeamCard = (props) => {
  const imageElements = props.images.map((image, index) => {
    return (
      <img className='lg:w-1/4' key={index} src={image} alt={`${props.title} image`} />
    );
  });

  return (
    <article className="p-5 flex flex-col gap-5 justify-center items-center">
      <h2 className="text-[#019F6C] text-lg">{props.title}</h2>
      {imageElements}
    </article>
  );
};

TeamCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

export default TeamCard;