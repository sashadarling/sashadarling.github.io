/* eslint-disable @next/next/no-img-element */
import ContactForm from 'components/ContactForm'
import Container from 'components/Container'
import styles from 'styles/pages/Home.module.css'

export default function Home() {
  return (
    <>
      <section>
        <Container title="about me">
          <p>
            lorem ipsum
          </p>
          <img className={styles.profileImg} src="/images/IMG_0646.JPG" alt="stylized profile pic of the author" />
        </Container>
      </section>
      <section>
        <Container title="get in touch">
          <ContactForm />
        </Container>
      </section>
    </>
  )
}
