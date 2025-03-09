import Layout from '../../components/Layout.jsx'
import { useState } from 'react';
import './contact.css'

function ContactPage () {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]:value, 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const alertMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
        `;
        window.alert(alertMessage);
    }

    return <Layout>
                <h1>Send us your cat photos!</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" value={formData.name} onChange={handleInputChange}/>

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="Your mail" value={formData.email} onChange={handleInputChange}/>

                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Write your message" value={formData.message} onChange={handleInputChange}></textarea>

                    <button type="submit" className="form-button">Send</button>
                </form>
            </Layout>
}

export default ContactPage