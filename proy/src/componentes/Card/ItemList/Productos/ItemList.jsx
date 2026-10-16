import ItemProducto from "../../Item/Producto/ItemProducto.jsx";
import styles from "./ItemList.module.css";

function ItemProductoList({ listaItems }) {
    return(
        <div className={styles.contenedor}>
            {
                listaItems.map((item) => (
                    <ItemProducto 
                        key={item.id}
                       {...item}
                    />
                ))
            }
        </div>
    );
}

export default ItemProductoList;