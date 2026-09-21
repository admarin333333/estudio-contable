
import { useState } from "react";

const novedades = [
  {
    id: 1,
    titulo: "Monotributo 2026",
    fecha: "20 de septiembre de 2026",
    texto: "Categorías y valores vigentes.",
    contenido: ["En este artículo encontrarás información sobre las categorías del Monotributo 2026.",

  "También podrás consultar los valores vigentes y los principales aspectos que deben tener en cuenta los contribuyentes.",

  "Esta información es de carácter general y debe verificarse según la normativa vigente."
]


  },
  {
    id: 2,
    titulo: "Novedades laborales",
    fecha: "20 de septiembre de 2026",
    texto: "Información laboral de interés.",
    contenido: ["En este artículo encontrarás información s........"
    ]

  },
  {
    id: 3,
    titulo: "Seguros para comercios",
    fecha: "20 de septiembre de 2026",
    texto: "Coberturas para proteger tu negocio.",
    contenido: ["En este artículo encontrarás información ......"
    ]

  },
];

function Novedades() {

const [seleccionada, setSeleccionada] = useState(null);


  return (
    <section className="section">
      <h2 className="novedades-titulo">Novedades</h2>

      <div className="container">
        <div className="row g-4">
          {novedades.map((novedad) => (
            <div className="col-12 col-md-4">
              <div className="card novedad-card">
                <div className="card-body">
                  <h5 className="card-title novedad-titulo">
                    {novedad.titulo}
                  </h5>
                  <p className="novedad-fecha"> {novedad.fecha}</p>
                  <p className="card-text"> {novedad.texto}</p>

                  <button
                    className="btn btn-primary novedad-boton"
                      onClick={() => setSeleccionada(novedad)}

                  >
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {seleccionada && (
        <div className="container mt-4 novedad-articulo">
            <h3>{seleccionada.titulo}</h3>
            <p>{seleccionada.fecha}</p>
            <p>{seleccionada.texto}</p>
            <div className="novedad-contenido">
            {seleccionada.contenido.map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
            ))}
            </div>
            <button
            className="btn btn-primary novedad-boton"
            onClick={() => setSeleccionada(null)}
            >
            Cerrar
            </button>

        </div>
        )}





    </section>
  );
}

export default Novedades;
