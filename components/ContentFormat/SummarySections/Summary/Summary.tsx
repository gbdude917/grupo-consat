"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import classes from "./Summary.module.css";
import SummaryCard from "../SummaryCards/SummaryCard";

const summaryData = [
  {
    id: 1,
    title: "Dictámenes técnicos",
    description:
      "Elaboramos y diseñamos a detalle los antecedentes, análisis y recomendaciones de los estudios que se realizan en Grupo CONSAT.",
    image: "/images/Dictamenes.png",
  },
  {
    id: 2,
    title: "Fotogrametría y levantamientos con dron",
    description:
      "La fotogrametría combina imágenes que contienen el mismo punto en el suelo desde múltiples puntos de vista para producir mapas detallados en 2D y 3D.",
    image: "/images/Drone.png",
  },
  {
    id: 3,
    title: "Dirección y supervisión de obra",
    description:
      "Se planea y se dirige la supervisión de los procedimientos que requieren un proyecto para el cumplimiento de las especificaciones técnicas y legales.",
    image: "/images/People.png",
  },
  {
    id: 4,
    title: "Análisis de mapas de riesgos y geomorfológicos",
    description:
      "Se aporta la representación de las formas de relieve combinando la expresión gráfica de los factores estructurales, características litológicas y disposición tectónica de las rocas.",
    image: "/images/Analisis.png",
  },
  {
    id: 5,
    title: "Geotecnia",
    description:
      "Es el estudio de las propiedades mecánicas de los materiales empleados, para la prevención de accidentes y desastres naturales.",
    image: "/images/GeotecniaIcon.png",
  },
];

const Summary = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes.header} ${classes.show}`
    : `${classes.header}`;

  return (
    <section className={classes.wrapper}>
      <div className={classes.imageContainer}>
        <Image
          src="/images/GreyCrane.png"
          width={2101}
          height={523}
          alt="Cranes"
          className={classes.img}
        />
      </div>

      <div className={classes.textContainer}>
        <div ref={ref} className={runAnimation}>
          <h3>EN GRUPO CONSAT</h3>
          <h2>SOMOS ESPECIALISTAS</h2>
          <div className={classes.line} />
        </div>

        <div className={classes.cardContainer}>
          {summaryData.map((data, key) => (
            <SummaryCard {...data} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
