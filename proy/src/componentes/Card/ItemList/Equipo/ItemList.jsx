import ItemEquipo from "../../Item/Integrante/ItemEquipo.jsx";

function ItemEquipoList({ listaItems }) {
    return(
        <div>
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