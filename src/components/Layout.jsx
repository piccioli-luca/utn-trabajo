import { Link } from '../components/Link.jsx'
import './Layout.css'

function Layout (props) {
    return <div>
        <header>
            <p>GatosLindos.com</p>
            <div className='headerButtons'>
                <Link url='./'>Home</Link>
                <Link url='./api'>Ver Gatos</Link>
                <Link url='./contact'>Contactar</Link>
            </div>
        </header>
        {props.children}
    </div>
}

export default Layout