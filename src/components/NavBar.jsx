import './NavBar.css'
import ButtonComponent from './ButtonComponent'
import CartWidget from './CartWidget';
import LogoComponent from './LogoComponet';




export default function NavBar() {
  return (
    <section>
        <div className='row'>
            <div className='col-12'>
                <nav className="navbar">
                    <LogoComponent/>
                    <ButtonComponent nombre="Inicio" />
                    <ButtonComponent nombre="Productos" />
                    <ButtonComponent nombre="Contacto" />
                    <CartWidget/>
                </nav>
            </div>

        </div>
        
    </section>
  );
}
