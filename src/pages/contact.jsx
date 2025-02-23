import { Link } from '../components/Link.jsx'
import './contact.css'

function ContactPage () {
    return <div>
        <header>
            <p>GatosLindos.com</p>
            <div className='headerButtons'>
                <Link url='./'>Home</Link>
                <Link url='./api'>Ver Gatos</Link>
                <Link url='./contact'>Contactar</Link>
            </div>
        </header>
        <h1>Aqui nos podes contactar y enviar sus fotos felinas!</h1>
    </div>
}

export default ContactPage