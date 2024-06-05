import PropTypes from 'prop-types';

const TeamCard = (props) => {
  const imageElements = props.images.map((image, index) => {
    return <img className="lg:w-1/4" key={index} src={image} alt={`${props.title} image`} />;
  });

  return (
    <article className="flex flex-col items-center justify-center gap-5 p-5">
      <h2 className="text-lg text-[#019F6C] lg:text-2xl">{props.title}</h2>
      {imageElements}
    </article>
  );
};

TeamCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
};

export default TeamCard;
