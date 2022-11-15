import styles from '../styles/Container.module.css'

export default function Container({ children, title }:{children: any, title: string}) {
    return (
        <article className={styles.article}>
            <h2 className={styles.h2}>{title}</h2>
            {children}
        </article>
    )
}