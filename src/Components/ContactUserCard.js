import styles from "./ContactUserCard.module.css"

const ContactUserCard = () => {

    return (
        <article className={styles.ContacUserName}>
            <img src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-ilustracion-vectorial_268834-541.jpg" alt="user img" className={styles.img}></img>
            <div>
                <h1>Jordan Walke</h1>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
            </div>
        </article>
    )
    
}
export default ContactUserCard