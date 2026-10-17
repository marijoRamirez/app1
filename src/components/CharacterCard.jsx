import PropTypes from "prop-types";

function CharacterCard({ character }) {
  return (
    <li className="card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>
        <>
          {character.species} - {character.status}
        </>
      </p>
    </li>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;