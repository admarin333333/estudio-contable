
import './App.css';
import { useState, useEffect } from 'react';


import imagen3 from './assets/estud1.avif';
import imagen4 from './assets/mesadetrabajo.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaShieldAlt,
  FaCalculator,
  FaUsers
} from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import Novedades from "./components/Novedades";

const imagenes = [ imagen3, imagen4];


function App() {

  const [imagenActual, setImagenActual] = useState(0);

  const [fade, setFade] = useState(true);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [mail, setMail] = useState("");

  const [dni, setDni] = useState("");

  const [nombre, setNombre] = useState("");

  const [apellido, setApellido] = useState("");

  const [consulta, setConsulta] = useState("");


  useEffect(() => {
  const intervalo = setInterval(() => {
    setImagenActual((actual) => (actual + 1) % imagenes.length);
  }, 6000);

  return () => clearInterval(intervalo);
  }, []);




  return (
    <div className="App">

      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="logo">
          Estudio Integral de Contabilidad, Gestión y Seguros
        </div>

        <div className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Quiénes somos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>

          <a
            href="https://wa.me/549352293372"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            WhatsApp
          </a>

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

    <h1>Asesoramiento Integral Contable y de Seguros</h1>

    <p>
      Acompañamos a empresas, comercios, profesionales y emprendedores con soluciones contables, impositivas, financieras y de seguros.

      Contabilidad · Impuestos · Gestión · Seguros

     Encontrá la solución que tu negocio necesita.
    </p>

    <button>CONSULTANOS</button>

    </div>

    </section>




        {/* Quiénes somos */}
        <section id="nosotros" className="section">
          <h2>Quiénes somoss</h2>

          <p>
            Te acompañamos de forma integral, acompañando tu crecimiento y resolviendo tus necesidade con compromiso y seriedad.  
            Vos te ocupás de tu negocio y nosotros de la gestión diaria

          </p>

        </section>

        {/* Servicios */}
        <section id="servicios" className="section">
          <h2>Nuestros servicios</h2>

          <div className="services">

            <div className="service">
              <FaShieldAlt className="service-icon" />

              <h3>Seguros</h3>

              <p>
                Te asesoramos para encontrar coberturas
                adecuadas a tus necesidades.
               </p>
          </div>


              <div className="service">
                <FaCalculator className="service-icon" />

                <h3>Balances</h3>

                <p>
                  Elaboramos balances contables y brindamos
                  información para la toma de decisiones.
                </p>
              </div>


              <div className="service">
                <FaUsers className="service-icon" />

                <h3>Liquidación de sueldos</h3>

                <p>
                  Gestionamos la liquidación de haberes y las
                  obligaciones laborales correspondientes.
                </p>
              </div>

          <div className="service">
            <FaFileSignature className="service-icon" />

            <h3>Documentación formal</h3>

            <p>
              Elaboración de contratos, actas, notas y otros
              documentos administrativos.
            </p>
          </div>


</div>
          {/* Novedades */}
        <Novedades />

        </section>

        {/* Contacto */}
        <section id="contacto" className="section contact">
          <h2>Contacto</h2>

          <p>
            Solicita asesoramiento. Contactanos.
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
                consulta: consulta
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
                setConsulta("");
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
                onChange={(event) => {
                const valor = event.target.value;

                if (/^\d*$/.test(valor)) {
                setDni(valor);
                }
                }}
                
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

                <label htmlFor="consulta">Consulta</label>
                  <textarea
                    name="consulta1"
                    id="consulta1"

                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                    placeholder="Escribí tu consulta o solicitud"
                    rows="6"
                  ></textarea>



                <button type="submit">ENVIAR</button>


          </form>
          )}

        </section>

      </main>

      <footer className="footer">

          <div className="footer-columna">
            <h3>Estudio Integral</h3>
            <p>Contabilidad · Gestión · Seguros</p>
            <p>Productor seguros: Mat 87-702</p>


          </div>

          <div className="footer-columna">
            <h3>Contacto</h3>
            <p>WhatsApp</p>
            <p>Email</p>
          </div>

          <div className="footer-columna">
            <h3>Redes</h3>
            <p>Instagram:


            </p>
            <p>Facebook</p>
            
            <p>
            <a
              href="https://www.linkedin.com/in/adriana-beatr%C3%ADz-marin-213a55122/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
            </p>


          </div>

      </footer>

     <a
        href="https://wa.me/5493512293372"
        className="whatsapp-flotante"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
    </a>     

    </div>
  );
}

export default App;