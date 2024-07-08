import foto4 from '../assets/img/foto4.jpg'
import PropTypes from 'prop-types';

export const Foto4 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={foto4} alt="Paisaje de Coveñas, Sucre" className="image" />
    </div>
  )
}

Foto4.propTypes = {
  className: PropTypes.string
};