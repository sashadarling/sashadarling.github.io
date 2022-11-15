import styles from '../styles/Container.module.css'

export default function Container({ children , title }:{children:any, title:string}) {
    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>{title}</h2>
            <article className={styles.article}>
                {children}
            </article>
        </section>
    )
}