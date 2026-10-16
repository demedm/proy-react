import ItemEquipoList from "../../ItemList/Equipo/ItemList";
import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from 'react';

function ItemEquipoListContainer({ Mensaje }) {
    const [items, setItems] = useState([]);

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/equipo.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información del equipo.');
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
            <h1>{Mensaje}</h1>
            <div className={styles.contenedor}>
                <ItemEquipoList listaItems={items}/>
            </div>
        </>
    );
}

export default ItemEquipoListContainer;