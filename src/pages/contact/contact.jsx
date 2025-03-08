import Layout from '../../components/Layout.jsx'
import './contact.css'

function ContactPage () {
    return <Layout>
                <h1>Send us your cat photos!</h1>
                <form className="contact-form">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" />

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="Your mail" />

                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Write your message"></textarea>

                    <button type="submit" className="form-button">Send</button>
                </form>
            </Layout>
}

export default ContactPage