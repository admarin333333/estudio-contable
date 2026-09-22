import { useEffect, useState } from "react";

function Novedades() {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    console.log("Novedades se está ejecutando");

    fetch("http://127.0.0.1:8000/novedades")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setNovedades(datos);
      });
  }, []);

  return (
    <section>
      <h2>Novedades</h2>

      {novedades.map((novedad) => (
        <div key={novedad.titulo}>
          <h3>{novedad.titulo}</h3>
          <p>{novedad.texto}</p>
        </div>
      ))}
    </section>
  );
}

export default Novedades;
