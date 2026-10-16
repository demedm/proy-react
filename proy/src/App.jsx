import "./App.css";
import Layout from "./componentes/Layout/Layout";
import ItemProductoListContainer from "./componentes/Card/ItemListContainer/Productos/ItemListContainer";
import FormularioProducto from "./componentes/Formulario/FormularioProducto";
import FormmularioContainer from "./componentes/FormularioContainer/FormularioContainer";

function App() {
  return(
    <Layout>

      <section className="productos">
        <ItemProductoListContainer Mensaje="Productos Destacados"/>
      </section>

      <FormmularioContainer/>

    </Layout>
  )
}

export default App;