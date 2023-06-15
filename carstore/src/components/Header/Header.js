import "./Header.css"
import CampoSelecction from '../CampoSeleccion/index';


function Header( ) {
    return <>
    <header className="header">
    <nav>
        <ul>
            <li>
            Autos usados
            </li>
            <li>
                Autos nuevos
            </li>
            <li>
                Vender mi auto
            </li>
            <li>
                Encontrar vendedores
            </li>
            

        </ul>
    </nav>
    <img src='/img/wall-papaer.jpg' alt='logo'></img>
    <CampoSelecction></CampoSelecction>
   
    </header>
    
    </>
}

export default Header