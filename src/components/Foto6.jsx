import foto6 from '../assets/img/foto6.jpg'
import PropTypes from 'prop-types';

export const Foto6 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={foto6} alt="Paisaje de Coveñas, Sucre" className="image" />
    </div>
  )
}

Foto6.propTypes = {
  className: PropTypes.string
};
