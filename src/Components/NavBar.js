// Los componentes son funciones
// Su nombre debe iniciar con mayuscula
// Deben retornar una estructura HTML
// Deben ser exportados (export default <NOMBRE_DEL_COMPONENTE>)

// El atributo CLASS de HTML es sustituido por CLASSNAME en REACT (JSX)
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.buttonList}>
                <li><a href="#"><button className={styles.list}>What is pursuit?</button></a></li>
                <li><a href="#"><button className={styles.list}>Create an account</button></a></li>
                <li><a href="#"><button className={styles.list}>Sign in</button></a></li>
            </ul>
        </nav>
    )
}

export default NavBar