import './Header.css'
import ButtonComponent from '../Shared/ButtonComponent'
import CartWidget from '../Shared/CartWidget';
import LogoComponent from '../Shared/LogoComponent';
import SearchComponent from './SearchBarComponent';




export default function NavBar() {
  return (
    <section>
        <div className='row'>
            <div className='col-12'>
                <nav className="navbar">
                    <ButtonComponent nombre="Nuevo" />
                    <ButtonComponent nombre="Accesorios" />
                    <ButtonComponent nombre="Ropa" />
                    <ButtonComponent nombre="Tendencias" />
                    <LogoComponent/>
                    <SearchComponent/>
                    <ButtonComponent nombre="Contacto" />
                    <CartWidget/>
                </nav>
            </div>

        </div>
        
    </section>
  );
}
