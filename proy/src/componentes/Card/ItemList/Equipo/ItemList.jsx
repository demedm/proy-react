import ItemEquipo from "../../Item/Integrante/ItemEquipo.jsx";
import styles from "./ItemList.module.css";

function ItemEquipoList({ listaItems }) {
    return(
        <div className={styles.contenedor}>
            {
                listaItems.map((item) => (
                    <ItemEquipo 
                        key={item.id}
                       {...item}
                    />
                ))
            }
        </div>
    );
}

export default ItemEquipoList;