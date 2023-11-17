import HeroSectionList from "@/components/ContentFormat/HeroFormat/HeroSectionList/HeroSectionList";

import classes from "./MemoriaSection.module.css";
import ProcessList from "./ProcessList/ProcessList";

const contents = [
  {
    id: 1,
    title: "¿Qué es una memoria de cálculo estructural?",
    description:
      "Es un documento descriptivo donde se reflejan de manera exhaustiva los procedimientos aplicados para el cálculo de determinada estructura y el dimensionamiento de cada uno de sus elementos.",
    list: null,
  },
  {
    id: 2,
    title: "¿Para qué sirve​ una memoria de cálculo estructural?",
    description:
      "Su función es transmitir, de forma veraz y detallada, los procedimientos y los resultados que ha generado el calculista a segundos y terceros. De manera que se cumplan los siguientes puntos.",
    list: [
      "Verificación de la información y cálculos",
      "Obtención de un coste, lo más aproximado a la realidad que sea posible",
      "Es un requisito a la hora de obtener permisos para casi cualquier tipo de construcción",
    ],
  },
];

const MemoriaSection = () => {
  return (
    <section className={classes.section__hero}>
      <div className={classes.section__hero__header}>
        <h2>MEMORIA DE CÁLCULO ESTRUCTURAL</h2>
      </div>

      <HeroSectionList
        image="/images/Calculo2.jpg"
        sectionName="MEMORIA DE CÁLCULO ESTRUCTURAL"
        contents={contents}
      />

      <ProcessList />
    </section>
  );
};

export default MemoriaSection;
