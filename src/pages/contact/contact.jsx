import Layout from '../../components/Layout.jsx'
import './contact.css'

function ContactPage () {
    return <Layout>
                <h1>Aqui nos podes contactar y enviar sus fotos felinas!</h1>
                <form className="contact-form">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Tu nombre" />

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="Tu correo electrónico" />

                    <label htmlFor="message" className="form-label">Mensaje:</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Escribe tu mensaje"></textarea>

                    <button type="submit" className="form-button">Enviar</button>
                </form>
            </Layout>
}

export default ContactPage