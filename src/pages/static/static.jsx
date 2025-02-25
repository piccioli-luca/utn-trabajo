import { Link } from '../../components/Link.jsx'
import './static.css'

function StaticPage () {
    return <div>
        <header>
            <p>GatosLindos.com</p>
            <div className='headerButtons'>
                <Link url='./'>Home</Link>
                <Link url='./api'>Ver Gatos</Link>
                <Link url='./contact'>Contactar</Link>
            </div>
        </header>
        <h1>Bienvenidos a GatosLindos.com!</h1>
        <h2>Colectamos gatos lindos mediante APIs sobre todo el internet.</h2>
    </div>
}

export default StaticPage