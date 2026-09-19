
import './App.css';
import { useState, useEffect } from 'react';

import imagen1 from './assets/inicio_img1.jpg';
import imagen2 from './assets/inicio_img2.jpg';

const imagenes = [imagen1, imagen2];

function App() {

  const [imagenActual, setImagenActual] = useState(0);

  const [fade, setFade] = useState(true);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [mail, setMail] = useState("");

  const [dni, setDni] = useState("");

  const [nombre, setNombre] = useState("");

  const [apellido, setApellido] = useState("");

  const [fechaNacimiento, setFechaNacimiento] = useState("");


  useEffect(() => {
  const intervalo = setInterval(() => {
    setImagenActual((actual) => (actual + 1) % imagenes.length);
  }, 10000);

  return () => clearInterval(intervalo);
  }, []);




  return (
    <div className="App">

      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="logo">
          PAISAJISMO PREMIUMz
        </div>

        <div className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Quiénes somos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* Página principal */}
      <main>

        {/* Inicio */}
        
    <section id="inicio" className="hero">

    <img
    src={imagenes[imagenActual]}
    alt="Paisajismo Premium"
    className={fade ? "fade-in" : ""}
    />
    <div className="hero-content">

    <h1>PAISAJISMO PREMIUM</h1>

    <p>
      Diseñamos y transformamos espacios verdes
      para crear ambientes únicos.
    </p>

    <button>CONSULTANOS</button>

    </div>

    </section>




        {/* Quiénes somos */}
        <section id="nosotros" className="section">
          <h2>Quiénes somoss</h2>

          <p>
            Creamos proyectos de paisajismo pensados para
            transformar jardines y espacios exteriores.
          </p>
        </section>

        {/* Servicios */}
        <section id="servicios" className="section">
          <h2>Nuestros servicios</h2>

          <div className="services">

            <div className="service">
              <h3>Diseño de jardines</h3>
              <p>
                Diseñamos espacios verdes adaptados a cada necesidad.
              </p>
            </div>

            <div className="service">
              <h3>Mantenimiento</h3>
              <p>
                Cuidamos y mantenemos jardines durante todo el año.
              </p>
            </div>

            <div className="service">
              <h3>Proyectos</h3>
              <p>
                Desarrollamos proyectos completos de paisajismo.
              </p>
            </div>

          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="section contact">
          <h2>Contacto</h2>

          <p>
            ¿Queres un jardín soñado? Contactanos.
          </p>


          <button onClick={() => setMostrarFormulario(true)}>
            CONTACTAR
          </button>

          {mostrarFormulario && (
          <form className='formulario' 

              onSubmit={(event) => {
              event.preventDefault();

                const datos = {
                mail: mail,
                dni: dni,
                apellido: apellido,
                nombre: nombre,
                fechaNacimiento: fechaNacimiento
                };

                console.log(datos);

                fetch("http://localhost:8000/clientes", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(datos)
                })
                
                .then(() => {
                setMail("");
                setDni("");
                setApellido("");
                setNombre("");
                setFechaNacimiento("");
                });
                
                
                
                }}
          
          
          
          >
                
                
                
                <h3>Datos del cliente</h3>

                <label>Mail</label>
                <input 
                type="email"
                value={mail}
                onChange={(event) => setMail(event.target.value)}
                
                />

                <label>DNI</label>
                <input 
                type="text"
                value={dni} 
                onChange={ (event)=> setDni(event.target.value)}
                 
                
                />

                <label>Apellido</label>
                <input 
                type="text"
                value={apellido}
                onChange={(event) => setApellido(event.target.value)} />

                <label>Nombre</label>
                <input 
                type="text"
                value={nombre} 
                onChange={(event)=> setNombre(event.target.value)}
                />

                <label>Fecha de nacimiento</label>
                <input 
                type="date"
                value={fechaNacimiento}
                onChange={(event) => setFechaNacimiento(event.target.value)}
                
                />


                <button type="submit">ENVIAR</button>


          </form>
          )}

        </section>

      </main>

    </div>
  );
}

export default App;