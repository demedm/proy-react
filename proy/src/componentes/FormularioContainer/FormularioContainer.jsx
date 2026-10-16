import { useState } from "react";
import FormularioProducto from "../Formulario/FormularioProducto";

function FormmularioContainer() {

    const [datosForm, setDatosForm] = useState({
        id: "",
        nombre: "",
        precio: "",
        stock: "",
    }
    );

    const [imgFile, setImgFile] = useState(null);

    const handleChange = (evento) => {
        const { name, value } = evento.target;
        setDatosForm(
            {
                ...datosForm,
                [name]: value
            }
        );
    }

    const handleSubmitImage = (evento) => {
        setImgFile(evento.target.files[0]);
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        
        if (!imgFile) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }
     
        const apiKey = 'f3c014a7a3f77e1adb433304050c42de'; 
        const formData = new FormData();
        formData.append('image', imgFile);
        try {
            console.log("Subiendo imagen a Imgbb...");
            const respuestaImgbb = await
                fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });
            const datosImgbb = await respuestaImgbb.json();
            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);

                const productoCompleto = {
                    ...datosForm,
                    urlImagen: datosImgbb.data.url
                };
              
                console.log('Enviando los siguientes datos COMPLETOS a la API:', productoCompleto);
            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        }
    };

    return (
        <FormularioProducto
            datosForm={datosForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleSubmitImage={handleSubmitImage}
        />
    );
}

export default FormmularioContainer;