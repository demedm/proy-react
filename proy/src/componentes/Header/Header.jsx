import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.contenedorCarrito}>
                <a href="#" className={styles.enlaceCarrito}>Carrito</a>
            </div>

            <div className={styles.contenedor}>

                <div className={styles.contenedorLogo}>
                    <a href="#" className="logoLink">
                        <img className={styles.logo} src="/images/icon.png" alt="Icono de la página"></img>
                    </a>
                </div>

                <nav className={styles.nav}>
                    <ul type="none" className={styles.listaNav}>
                        <li className={styles.lista_elemento}>
                            <a href="#" className={styles.enlace}>
                                INICIO
                            </a>
                        </li>

                        <li className={styles.listaElemento}>
                            <a href="#" className={styles.enlace}>
                                NUESTROS PRODUCTOS
                            </a>
                        </li>

                        <li className={styles.listaElemento}>
                            <a href="#" className={styles.enlace}>
                                RESEÑAS
                            </a>
                        </li>

                        <li className={styles.listaElemento}>
                            <a href="#" className={styles.enlace}>
                                CONTACTO
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header;