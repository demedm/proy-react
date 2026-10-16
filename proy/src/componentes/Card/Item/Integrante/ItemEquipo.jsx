import styles from "./ItemEquipo.module.css";

function ItemEquipo({ nombre, email, puesto, imagen }) {
    return (
            <article className={styles.card}>
    
                <img className={styles.imagen}
                    src={imagen}
                    alt={nombre}>
                </img>
    
                <div className={styles.contenidoCard}>
                    <h3 className={styles.nombre}>
                        {nombre}
                    </h3>
                    <p>{email}</p>
                    <p className={styles.puesto}>{puesto}</p>
                </div>
            </article>
    );
}

export default ItemEquipo;