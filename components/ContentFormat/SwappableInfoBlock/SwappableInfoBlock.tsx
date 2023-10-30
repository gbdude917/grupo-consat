"use client";

import { useState } from "react";

import classes from "./SwappableInfoBlock.module.css";
import ContentSectionImageDoubleText from "./ValidSections/ContentSectionImageDoubleText/ContentSectionImageDoubleText";
import ContentSectionImageText from "./ValidSections/ContentSectionImageText/ContentSectionImageText";
import ContentSectionImageTextThreeCol from "./ValidSections/ContentSectionImageTextThreeCol/ContentSectionImageTextThreeCol";

const SwappableInfoBlock = () => {
  const [visibleDivId, setVisibleDivId] = useState(1);
  const handleClick = (e: any) => {
    const id = Number(e.target.id);

    // Change div id to display
    handleVisibleDiv(id);
  };

  const handleVisibleDiv = (id: number) => setVisibleDivId(id);

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.buttonContainer}>
          <button
            id="1"
            onClick={handleClick}
            className={`${visibleDivId === 1 ? `${classes.highlight}` : ""}`}
          >
            PIPC
          </button>
          <button
            id="2"
            onClick={handleClick}
            className={`${visibleDivId === 2 ? `${classes.highlight}` : ""}`}
          >
            Padrón de agente consultores
          </button>
          <button
            id="3"
            onClick={handleClick}
            className={`${visibleDivId === 3 ? `${classes.highlight}` : ""}`}
          >
            Trámites & Servicios
          </button>
        </div>

        <>
          <ContentSectionImageDoubleText
            title1="Programa interno de protección civil"
            text1="En Grupo CONSAT realizamos cualquier documento necesario para dar cumplimiento a lo establecido por protección civil estatal o municipal."
            title2="¿Qué es un programa interno de protección civil?"
            text2="Documento que reúne la información de un inmueble/empresa. En él se plasman las medidas de prevención, auxilio y recuperación que se deben conocer para afrontar cualquier emergencia causada por efectos naturales  o por el hombre."
            id={1}
            image="/images/Proteccion1.jpg"
            visibleDivId={visibleDivId}
          />

          <ContentSectionImageText
            image="/images/David.jpeg"
            caption="CPBC-227"
            name="Ing. David Becerra Jiménez"
            title="En Grupo CONSAT"
            text="Contamos con el registro en el padrón consultores / capacitadores del estado, donde la temática de los cursos y talleres dentro del programa de capacitación deberá ser impartida por un Agente Consultor Capacitor con registro ante la Coordinación Estatal de Protección Civil, para los cursos de Evacuación y Resguardo, Búsqueda y Rescate, Prevención de Incendios y Manejo de Extintores."
            id={2}
            visibleDivId={visibleDivId}
          />

          <ContentSectionImageTextThreeCol
            image="/images/Proteccion2.png"
            title1="Trámites"
            text1="Realizamos trámites para la obtención de:"
            list1={[
              "Certificación de medidas de seguridad ante bomberos.",
              "Validación de simulacros de evacuación ante bomberos y protección civil.",
              "Uso de suelo.",
            ]}
            title2="Estudios e informes"
            text2="Contamos con ingenieros registrados, ante la Dirección de Administración Urbana​, como directores responsables de obra capacitados para:"
            list2={[
              "Estudio de vulnerabilidad estructural de cualquier nivel establecido por el Centro Nacional de Prevención de Desastres (CENAPRED)",
              "Elaboración de informes de análisis de riesgos de predios por su ubicación apoyados en los mapas de Atlas de riesgo de la ciudad de Tijuana o de cualquier otro municipio.",
            ]}
            id={3}
            visibleDivId={visibleDivId}
          />
        </>
      </div>
    </section>
  );
};

export default SwappableInfoBlock;
