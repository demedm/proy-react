import ItemProductoList from "../../ItemList/Productos/ItemList";
import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from 'react';

function ItemProductoListContainer({ Mensaje}) {
    const [items, setItems] = useState([]);

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información.');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setItems(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando recursos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <br></br>
            <h1 className={styles.tittle}>{Mensaje}</h1>
            <br></br>
            <h3 className={styles.mensaje}>Selección de los productos más vendidos!</h3>
            <div>
                <ItemProductoList listaItems={items}/>
            </div>
        </>
    );
}

export default ItemProductoListContainer;