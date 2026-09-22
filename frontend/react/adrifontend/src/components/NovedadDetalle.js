
import imagenMonotributo from "../assets/Monotributo .png";
function NovedadDetalle() {
  return (
    <div className="App">

      <main className="detalle-novedad">

        <div className="nota-layout">


        <section className="nota">

     

          <p className="nota-categoria">MONOTRIBUTO</p>

          <h1>Monotributo 2026</h1>

          <p className="nota-fecha">
            20 de septiembre de 2026
          </p>

          <h2>Categorías y valores vigentes</h2>

          <p>
            ARCA publica las categorías y los valores vigentes del
            Monotributo, junto con los parámetros que deben tenerse
            en cuenta para determinar la categoría correspondiente.
          </p>

          <p>
            Los valores pueden actualizarse, por lo que recomendamos
            consultar siempre la información oficial.
          </p>
          <img
             src={imagenMonotributo}
              alt="Categorías y valores del Monotributo 2026"
                className="tabla-monotributo"

            />

          <a
            href="https://www.arca.gob.ar/monotributo/categorias.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-arca"
          >
            Ver categorías y valores en ARCA
          </a>

          <p className="nota-final">
            ¿Necesitás ayuda para determinar tu categoría o realizar
            una recategorización?
          </p>

          <a href="/#contacto" className="boton-contacto">
            Consultanos
          </a>

        </section>

        <aside className="nota-lateral">

          <h3>¿Necesitás ayuda?</h3>

          <p>
            Te ayudamos con tus obligaciones impositivas
            y la gestión de tu actividad.
          </p>

          <a href="/#contacto" className="lateral-boton">
            Consultanos
          </a>

        </aside>

        </div>

      </main>

    </div>
  );
}

export default NovedadDetalle;