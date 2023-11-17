import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./DesignSection.module.css";

const DesignSection = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <h2>Diseño y Cálculo del ​Sistema Hidrosanitario</h2>
          <p>
            Los proyectos de instalaciones sanitarias se desarrollan con el fin
            de que los servicios correspondientes, tengan suministro directo a
            la acometida facilitando su administración, dando cumplimiento a lo
            establecido por los reglamentos nacionales.
          </p>
          <p>
            Diseñar los sitemas hidrosanitarios y calcular los materiales
            necesarios para el desarrollo del proyecto es fundamental en
            cualquier tipo de construcción, ya que permite optimizar los
            recursos y evitar sistemas de distribución ineficentes, además de
            justificar las desiciones llevadas a cabo durante el transcurso de
            la obra.
          </p>
        </div>

        <div className={classes.rightSection}>
          <h3>En Grupo CONSAT</h3>
          <h4>Estamos capacitados en</h4>
          <ul className={classes.list}>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
              <div>
                Diseño y Cálculo de Red hidráulica general con tubería PVC, CPV
                o cobre.
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
              <div>
                Cálculo de diámetro de tubería de alimentación requerida por
                CESPT.
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
              <div>
                Diseño y dibujo de detalles de módulo de medidores de acuerdo a
                CESPT.
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
              <div>
                Diseño y cálculo de línea general de descarga con tubería ABS.
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
              <div>
                Cuadro de detalles de interconexión, hidráulicas y sanitarias.
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
              <div>
                Apoyo técnico para el dibujante de los planos hidrosanitarios
                para el proyecto ejecutivo.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
