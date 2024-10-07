import ButtonComponent from '../Shared/ButtonComponent'
import CartWidget from '../Cart/CartWidget'
import LoginWidget from '../Login/LoginWidget'
import './NavBar.css'
import logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'

export default function NavBar() {

  return (
    <nav>
      <section>
        <div className="container-fluid mt-3">
          <nav className="navbar">
            <div className="row w-100 align-items-center">

              <div className="col d-flex justify-content-start">

                <Link to={"/category/nuevo"}>
                <ButtonComponent nombre="Nuevo" color="#7f7679" hoverClass="hover-negro"/>
                </Link>

                <Link to={"/category/accesorios"}>
                <ButtonComponent nombre="Accesorios" color="#000000" hoverClass="hover-turquesa"/>
                </Link>

                <Link to={"/category/cuidado_personal"}>
                <ButtonComponent nombre="Cuidado Personal" color="#000000" hoverClass="hover-rubi"/>
                </Link>

                <Link to={"/category/tendencias"}>
                <ButtonComponent nombre="Tendencias" color="#000000" hoverClass="hover-ambar"/>
                </Link>

              </div>

              <div className="col d-flex justify-content-center px-0 logo">
                <Link to={"/"}>
                <ButtonComponent src={logo} />
                </Link>
              </div>

              <div className="col d-flex justify-content-end align-items-center">
                
                <Link to={"/contacto"}>
                <ButtonComponent nombre="Contacto" color="#000000"/>
                </Link>

                <LoginWidget />

                <CartWidget />

              </div>
            </div>
          </nav>
        </div>
      </section>
    </nav>
  )
}
