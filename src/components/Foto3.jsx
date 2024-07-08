import foto3 from '../assets/img/foto3.jpg'
import PropTypes from 'prop-types';

export const Foto3 = ( {className} ) => {
  return (
<div className={`image-container ${className}`}>
      <img src={foto3} alt="Paisaje de Coveñas, Sucre" className="image" />
    </div>
  )
}

Foto3.propTypes = {
  className: PropTypes.string
};