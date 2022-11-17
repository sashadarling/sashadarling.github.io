import { useState } from 'react';
import styles from 'styles/components/ContactForm.module.css'

export default function ContactForm() {

    const [formMessage, setFormMessage] = useState("")

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const formData = new FormData(event.target);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch('https://polar-plateau-40223.herokuapp.com/', {
            method: 'POST',
            body: json
        })

        const result = await response.json()
        
        if (result.success) {
            setFormMessage('Your message has been sent. Thank you for reaching out!')
        } else {
            setFormMessage('An error has occurred with sending your message. Please try again later.')
        }
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
                <button type="submit">Send</button>
            </form>
            <b>{formMessage}</b>
        </>
    )
}