import PropTypes from "prop-types";
import "../styles/ClimaCard.css"; 


function ClimaCard({ 
  latitude, 
  longitude, 
  elevation, 
  timezone,
  temperature 
}) {
  return (
    <article className="card" style={{ "--card-color": "#4A90E2" }}>
      <div className="card__header">
        <h2 className="card__title">{timezone}</h2>
      </div>

      <span className="card__badge">elevación: {elevation}m</span>
      
      <p className="card__description">
        <strong>latitud:</strong> {latitude} <br/>
        <strong>longitud:</strong> {longitude} <br/>
        {temperature && <><strong>temperatura:</strong> {temperature}°C</>}
      </p>

      <>
        <footer className="card__footer">
          zona: <strong>{timezone}</strong>
        </footer>
      </>
    </article>
  );
}

// PropTypes
ClimaCard.propTypes = {
  latitude: PropTypes.number.isRequired, 
  longitude: PropTypes.number.isRequired, 
  elevation: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
  temperature: PropTypes.number
};

export default ClimaCard;