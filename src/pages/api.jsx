import { Link } from '../components/Link.jsx'
import './api.css'

function ApiPage () {
    return <div>
        <header>
            <p>GatosLindos.com</p>
            <div className='headerButtons'>
                <Link url='./'>Home</Link>
                <Link url='./api'>Ver Gatos</Link>
                <Link url='./contact'>Contactar</Link>
            </div>
        </header>
        <h1>Gatos surtidos:</h1>
    </div>
}

export default ApiPage