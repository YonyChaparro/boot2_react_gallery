import foto2 from '../assets/img/foto2.jpg'
import PropTypes from 'prop-types';

export const Foto2 = ( {className} ) => {
  return (
<div className={`image-container ${className}`}>
      <img src={foto2} alt="Sabana, soga y compás en Cali, Colombia" className="image" />
    </div>
  )
}

Foto2.propTypes = {
  className: PropTypes.string
};