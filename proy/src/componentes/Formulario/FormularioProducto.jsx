import styles from "./FormularioProducto.module.css";

function FormularioProducto({ datosForm, handleChange, handleSubmit, handleSubmitImage }) {
    return(
        <>
        <form className={styles.form} onSubmit={handleSubmit}>

            <h3>Agregar producto nuevo</h3>

            <div className={styles.seccionForm}>
                <label className={styles.labelForm}  
                    htmlFor="id">ID </label>
                <input className={styles.formInput} 
                    type="number" name="id" placeholder="EJ: 01" 
                    onChange={handleChange}
                />
            </div>

            <div className={styles.seccionForm}>
                <label className={styles.labelForm}  
                    htmlFor="nombre">Nombre</label>
                <input className={styles.formInput} 
                    type="text" name="nombre" placeholder="EJ: Oso Polar Cariñoso" 
                    onChange={handleChange}
                />
            </div>

            <div className={styles.seccionForm}>
                <label className={styles.labelForm}  
                    htmlFor="precio">Precio</label>
                <input className={styles.formInput} 
                    type="number" name="precio" placeholder="EJ: 15000" 
                    onChange={handleChange}/>
            </div>

            <div className={styles.seccionForm}>
                <label className={styles.labelForm} 
                    htmlFor="stock">Stock disponible</label>
                <input className={styles.formInput} 
                    type="number" name="stock" placeholder="EJ: 10" 
                    onChange={handleChange}/>
            </div>

            <div className={styles.seccionForm}>
                <label className={styles.labelForm}  
                    htmlFor="imagen">Imagen del producto</label>
                <input className={styles.formInput} 
                    type="file" name="imagen"
                    onChange={handleSubmitImage}/>
            </div>

            <button className={styles.botonSubmit} type="submit">Guardar Producto</button>
        </form>
        </>
    );
}

export default FormularioProducto;