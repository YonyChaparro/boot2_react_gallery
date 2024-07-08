import foto1 from '../assets/img/foto1.jpg'
import PropTypes from 'prop-types';

export const Foto1 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={foto1} alt="Yony, Fercho y una ovejita blanca" className="image" />
    </div>
  )
}

Foto1.propTypes = {
  className: PropTypes.string
};
