import Card from "./Card/Card";

import classes from "./ProcessList.module.css";

const contents = [
  {
    id: 1,
    title: "Introducción",
    description:
      "Hace referencia al nombre y la ubicación del proyecto en revisión.",
  },
  {
    id: 2,
    title: "Descripción Detallada del Proyecto",
    description:
      "Reseña que proporciona información respecto a los datos generales de estructura que van desde la calidad topológica, geométrica hasta la composición de las propiedades mecánicas de cada material.",
  },
  {
    id: 3,
    title: "Detalle de las Normas Utilizadas",
    description: "Se describe la normativa utilizada a los largo del proyecto",
  },
  {
    id: 4,
    title: "Cuadro explicativo de la Memoria de Cálculo",
    description:
      "Constituye un apartado donde se detallan las verificaciones y los cálculos realizados, los elementos de la estructura.",
  },
  {
    id: 5,
    title: "Observaciones Generales",
    description:
      "Se valoran los resultados obtenidos durante el desarrollo de la documento.",
  },
  {
    id: 6,
    title: "Planos arquitectónicos",
    description: "Se incluyen los planos arquitectónicos.",
  },
  {
    id: 7,
    title: "Firma de Responsable Proyectista y Anexos",
    description:
      "Se incluye la firma del responsable encargado y se agregan los anexos correspondientes.",
  },
];

const ProcessList = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        {contents.map((content, key) => (
          <Card key={key} {...content} />
        ))}
      </div>
    </section>
  );
};

export default ProcessList;
