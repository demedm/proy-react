import styles from "./Footer.module.css";
import ItemEquipoListContainer from "../Card/ItemListContainer/Equipo/ItemListContainer";

function Footer() {
    return(
        <footer className={styles.footer}>
           
            <div className={styles.contenedorEquipo}>
                <ItemEquipoListContainer Mensaje="Conocé a nuestro Equipo"/>
            </div>

            <p className="footerText">© 2026 Tienda Online - Todos los derechos reservados</p>

        </footer>
    );
}

export default Footer;