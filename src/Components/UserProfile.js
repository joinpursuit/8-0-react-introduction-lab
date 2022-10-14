// Los componentes son funciones
// Su nombre debe iniciar con mayuscula
// Deben retornar una estructura HTML
// Deben ser exportados (export default <NOMBRE_DEL_COMPONENTE>)
import styles from './UserProfile.module.css'

const UserProfile = () => {
// https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-ilustracion-vectorial_268834-541.jpg
    return (
        <section className={styles.userProfile} >
            <img src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-ilustracion-vectorial_268834-541.jpg" alt="user img" className={styles.img}></img>
            <div className={styles.userDiv}>
                <h1>Jordan Walke</h1>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
            </div>    
        </section>
    )
}

export default UserProfile