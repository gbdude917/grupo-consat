import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import classes from "./ProyectoSection.module.css";

const ProyectoSection = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h2>PROYECTO EJECUTI​VO</h2>
          <div className={classes.line} />
        </div>

        <div className={classes.content}>
          <div className={classes.col1}>
            <div>
              <p>
                Nuestro equipo tiene la capacidad de brindarte los siguientes
                servicios.
              </p>
            </div>
          </div>

          <div className={classes.col2}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                <div>
                  Levantamiento topográfico y Digitalización del edificio
                  existente.
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                <div>Desarrollo o asesoramiento del anteproyecto.</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                <div>
                  Realización de planos Plantas Arquitectónicas, Planta
                  conjunto, localización, cortes, fachadas, acabados o detalles
                  de muros divisorios.
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                <div>
                  Diseño de láminas para Planos de Instalaciones Hidráulicas,
                  Sanitarias o Eléctrica.
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                <div>Firma de proyectista.</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                <div>Director de Obra.</div>
              </li>
            </ul>
          </div>

          <div className={classes.col3}>
            <div className={classes.col3__textContainer}>
              <div className={classes.col3__text1}>
                <h3>¿Qué es un proyecto ejecutivo?</h3>
                <p>
                  Conjunto de planos, documentos y especificaciones que indican
                  la solución constructiva y todas las características que
                  tendrá la obra programada, para el correcto desarrollo,
                  ejecución y control de una obra.
                </p>
              </div>

              <div className={classes.col3__text2}>
                <h3>¿Por qué es necesario?</h3>
                <p>
                  Un proyecto ejecutivo correcto y bien detallado garantiza la
                  fluidez de las obras, evitando sorpresas y errores
                  estructurales que puedan ocasionar pérdidas o incluso el
                  embargo de la empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectoSection;
