import ItemProducto from "../../Item/Producto/ItemProducto.jsx";

function ItemProductoList({ listaItems }) {
    return(
        <div>
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