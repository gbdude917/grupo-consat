import Card from "./Card/Card";

import classes from "./Memoria.module.css";

const contents = [
  {
    id: 1,
    title: "Revisión de condiciones estructurales",
    text: "Estudio en el cual se detalla el análisis de toda la estructura, con sus respectivas justificaciones correspondientes, esto con el fin de determinar el nivel de seguridad con el que cuenta la construcción o si es necesario realizar recomendaciones necesarias para dar cumplimiento a los establecido por la normativa.",
  },
  {
    id: 2,
    title: "Prueba de resistencia de elementos estructurales",
    text: "Se basan en pruebas que certifiquen la resistencia de una estructura durante sus acciones de servicio permiten incorporar cambios en las estructuras con el fin de mejorar su servicio, revisando la frecuencia de la vibración y la no aparición de fisuras en la estructura.",
  },
  {
    id: 3,
    title: "Prueba de uniformidad del concreto",
    text: "Dichas pruebas se realizan para conocer las características del concreto como lo son la resistencia, consistencia, flexibilidad y tensión. Con el fin de saber si cumplen con las especificaciones necesarias para la obra.",
  },
  {
    id: 4,
    title: "Refuerzo de edificaciones vulnerables",
    text: "Se realizan propuestas de mejora de la infraestructura ya sea con el fin de realizar expansiones en la construcción o reparar secciones con algún daño.",
  },
  {
    id: 5,
    title: "Evaluación técnica",
    text: "Desarrollo de los cálculos enfocados en las cargas de la infraestructura como vigas, columnas, paredes, etc.",
  },
  {
    id: 6,
    title: "Dictámenes técnicos",
    text: "Informe donde se detallan los resultados de la evaluación estructural, se muestran los antecedentes, inspección y desarrollo del cálculo y observaciones.",
  },
];

const Memoria = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <h2>Memoria de cálculo estructural</h2>
        <p>Se incluyen los siguientes apartados</p>
      </div>

      <div className={classes.content}>
        {contents.map((index, key) => (
          <Card key={key} id={index.id} title={index.title} text={index.text} />
        ))}
      </div>

      <form
        className={classes.buttonContainer}
        action="/construccion"
        method="get"
      >
        <button>Más información</button>
      </form>
    </section>
  );
};

export default Memoria;
