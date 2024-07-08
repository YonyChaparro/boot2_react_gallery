import foto5 from '../assets/img/foto5.jpg'
import PropTypes from 'prop-types';

export const Foto5 = ( {className} ) => {
  return (
<div className={`image-container ${className}`}>
      <img src={foto5} alt="Paisaje de Coveñas, Sucre" className="image" />
    </div>
  )
}

Foto5.propTypes = {
  className: PropTypes.string
};
