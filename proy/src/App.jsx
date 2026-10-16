import "./App.css";
import Layout from "./componentes/Layout/Layout";
import ItemProductoListContainer from "./componentes/Card/ItemListContainer/Productos/ItemListContainer";

function App() {
  return(
    <Layout>
      <section className="bienvenida">
        <h2>
          Descubri
        </h2>

        <p>
          Descripcion de la pagina!
        </p>
      </section>
      <section className="productos">

        <ItemProductoListContainer Mensaje="Productos Destacados"/>

      </section>
    </Layout>
  )
}

export default App;