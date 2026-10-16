import { useState } from "react";
import styles from "./ItemProducto.module.css";

function ItemProducto({ nombre, precio, stock, imagen }) {
    const [cantidad, setCantidad] = useState(0);
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    const agregarCarrito = () => {
        alert(`${cantidad} unidades de ${nombre} agregado al carrito!`);
    }

    const [esFavorito, setFavorito] = useState(false);
    const agregarFavoritos = () => {
        if (!esFavorito) {
            setFavorito(true);
        } else {
            setFavorito(false);
        }
    }

    return (
        <article className={styles.card}>

            <img className={styles.imagen}
                src={imagen}
                alt={nombre}>
            </img>

            <div className={styles.contenidoCard}>

                <div className={styles.encabezado}>
                    <button className="styles.favorito" onClick={agregarFavoritos}>
                        {esFavorito ? ' ★ ' : ' ☆ '}
                    </button>
                    <h3 className={styles.nombreProducto}>{nombre}</h3>
                </div>

                <p className={styles.precioProducto}>
                    <span>${precio}</span>
                </p>
                <p className={styles.stockProducto}>Stock Disponible: {stock}</p>

                <div className={styles.contenedorContador}>
                    <button onClick={incrementar} className={styles.botonContador}>+</button>
                    <p className={styles.cantidadContador}>{cantidad}</p>
                    <button onClick={decrementar} className={styles.botonContador}>-</button>
                </div>
                <button onClick={agregarCarrito} className={styles.botonCarrito}>Agregar al Carrito</button>

            </div>
        </article>
    );
}

export default ItemProducto;