import { Link } from "react-router-dom";
import { Foto1 } from "./Foto1";
import { Foto2 } from "./Foto2";
import { Foto3 } from "./Foto3";
import { Foto4 } from "./Foto4";
import { Foto5 } from "./Foto5";
import { Foto6 } from "./Foto6";

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
      <Link to="/covenas1" className="links">
        <figure className="image-size">
          <Foto1 />
          <figcaption>Coveñas 1</figcaption>
        </figure>
      </Link>
      <Link to="/covenas2" className="links">
        <figure className="image-size">
          <Foto2 />
          <figcaption>Coveñas 2</figcaption>
        </figure>
      </Link>
      <Link to="/covenas3" className="links">
        <figure className="image-size">
          <Foto3 />
          <figcaption>Coveñas 3</figcaption>
        </figure>
      </Link>
      <Link to="/covenas4" className="links">
        <figure className="image-size">
          <Foto4 />
          <figcaption>Coveñas 4</figcaption>
        </figure>
      </Link>
      <Link to="/covenas5" className="links">
        <figure className="image-size">
          <Foto5 />
          <figcaption>Coveñas 5</figcaption>
        </figure>
      </Link>
      <Link to="/covenas6" className="links">
        <figure className="image-size">
          <Foto6 />
          <figcaption>Coveñas 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}
