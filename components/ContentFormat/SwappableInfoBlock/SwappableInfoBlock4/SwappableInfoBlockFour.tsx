"use client";

import { useState } from "react";

import ContentSectionImageDoubleText from "../ValidSections/ContentSectionImageDoubleText/ContentSectionImageDoubleText";
import ContentSectionImageText from "../ValidSections/ContentSectionImageText/ContentSectionImageText";
import ContentSectionImageTextThreeCol from "../ValidSections/ContentSectionImageTextThreeCol/ContentSectionImageTextThreeCol";

import classes from "./SwappableInfoBlockFour.module.css";

const SwappableInfoBlockFour = () => {
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
            Riesgo geológico
          </button>
          <button
            id="2"
            onClick={handleClick}
            className={`${visibleDivId === 2 ? `${classes.highlight}` : ""}`}
          >
            Análisis sedimentológicos
          </button>
          <button
            id="3"
            onClick={handleClick}
            className={`${visibleDivId === 3 ? `${classes.highlight}` : ""}`}
          >
            Geofísica
          </button>

          <button
            id="4"
            onClick={handleClick}
            className={`${visibleDivId === 4 ? `${classes.highlight}` : ""}`}
          >
            Petrología
          </button>
        </div>

        <>
          <ContentSectionImageDoubleText
            title1="Riesgo geológico"
            text1="Estudio de estructuras geológicas mediante la aplicación de metodologías de geología estructural:"
            text2={`Visita de campo para la recaudación de datos de orientación y sentido de pliegues y fallas.\n\nAplicación de los Estereogramas de SCHMIDT, para obtener representaciones estadísticas de la orientación de las estructuras geológicas.\n\nElaboración de Mapas geológicos y temas relacionados.`}
            id={1}
            image="/images/Geologia3.png"
            visibleDivId={visibleDivId}
          />

          <ContentSectionImageDoubleText
            title1="Análisis sedimentológicos"
            text1="Estudios estratigráficos basados en la descripción y el modelado de columnas estratigráficas mediante:"
            text2={`Sondeos Pozo a Cielo Abierto (PCA).\n\nObtención de muestras de suelo en Sondeos de Penetración Estándar (SPT).\n\nElaboración de perfiles litológicos a partir de la información estratigráfica de los sondeos.`}
            id={2}
            image="/images/Geologia4.jpg"
            visibleDivId={visibleDivId}
          />

          <ContentSectionImageDoubleText
            title1="Geofísica"
            text1="Clasificación de la dificultad de escarificación y espesores esperados de corte, determinación la estratigrafía de escarificabilidad para los movimientos de tierras basados en los resultados de los tendidos geosísmicos (travesías de refracción sísmica), incluye la clasificación de material para trabajos de corte en terracerías y memoria fotográfica, además:"
            text2={`Corte estratigráfico de excavaciones exploratorias\n\nResultados de Velocidades de tendidos geosísmicos de Refracción Sísmica\n\nTabla de Profundidad y Escarificabilidad de cada tendido geosísmico y general determinada mediante interpolación\n\nTabla de porcentajes de Escarificabilidad a cada metro de cada tendido y general determinada mediante interpolación`}
            id={3}
            image="/images/Geologia5.png"
            visibleDivId={visibleDivId}
          />

          <ContentSectionImageDoubleText
            title1="Petrología"
            text1="Inspección, identificación y clasificación de rocas en base a sus componentes minerales u orgánicos."
            id={4}
            image="/images/Geologia6.jpg"
            visibleDivId={visibleDivId}
          />
        </>
      </div>
    </section>
  );
};

export default SwappableInfoBlockFour;
