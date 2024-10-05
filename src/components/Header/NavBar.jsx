import './NavBar.css'
import ButtonComponent from '../Shared/ButtonComponent'
import CartWidget from '../Shared/CartWidget';
import LogoComponent from '../Shared/LogoComponent';
import SearchComponent from './SearchBarComponent';


export default function NavBar() {
  return (
    <section>
      <div className="container-fluid mt-3">
        <nav className="navbar">
          <div className="row w-100 align-items-center">

            <div className="col d-flex justify-content-start">
              <ButtonComponent className="btnPrincipal" nombre="Nuevo" />
              <ButtonComponent nombre="Accesorios" />
              <ButtonComponent nombre="Ropa" />
              <ButtonComponent nombre="Tendencias" />
            </div>

            <div className="col d-flex justify-content-center px-0">
              <LogoComponent />
            </div>

            <div className="col d-flex justify-content-end align-items-center">
              <SearchComponent />
              <ButtonComponent nombre="Contacto" />
              <CartWidget />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
