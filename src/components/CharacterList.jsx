import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharacterList({ character }) {
  return (
    <ul className="grid">
      {character?.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </ul>
  );
}

CharacterList.propTypes = {
  character: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;