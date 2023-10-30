import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroImage/HeroImage";
import WorkerSection from "@/components/ContentFormat/WorkerSection/WorkerSection";
import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage";
import GeotecniaTests from "@/components/PageSections/Geotecnia/GeotecniaTestsSection/GeotecniaTests";
import GeotecniaAnalysis from "@/components/PageSections/Geotecnia/GeotecniaAnalysisSection/GeotecniaAnalysis";

export const metadata: Metadata = {
  title: "Geotecnia",
  description: "...",
};

const Geotecnia = () => {
  return (
    <main>
      <HeroImage
        image="/images/GeotecniaHero.jpg"
        pageName="Geotecnia"
        subText="Mediante la aplicación de los principios geológicos, estudia la calidad de los materiales que forman la corteza terrestre y que son utilizados en las construcciones, para el diseño de proyectos de ingeniería civil orientados a la prevención de patologías constructivas."
      />

      <WorkerSection
        image="/images/JoseLuisSanchezGonzalez.jpg"
        name="Ing. José Luis Sánchez González"
        caption="Responsable del departamento de Geotecnia"
        description="Egresado del Instituto Politécnico Nacional, cuenta con una maestría en Ingeniería Civil, con especialidad en Geotecnia avalada por la Escuela Superior de Ingeniería y Arquitectura Unidad Zacatenco del Instituto Politécnico Nacional. Profesionalment​e ha incursionado en Estudios de Mecánica de Suelos, Análisis y Diseños Geotécnicos, Supervisión Geotécnica, Exploración y Muestreo, Laboratorio de Mecánica de Suelos y Modelado Numérico 2D y 3D."
      />

      <TextWithImage
        image="/images/Geotecnia1.jpg"
        title="¿QUÉ ES LA GEOTECNIA?"
        text="Es una rama de la ingeniería encargada del estudio de la interacción entre las construcciones y el terreno, en ella se aplican los principios geológicos de la investigación de materiales naturales que constituyen la corteza terrestre, estudiando las propiedades mecánicas, hidráulicas e ingenieriles  del suelo implicados en alguna construcción, como pueden ser autopistas, vías férreas, puentes, presas, oleoductos, acueductos, unidades habitacionales, sitios de confinamiento y edificios en general."
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/Geotecnia2.jpg"
        title="¿PARA QUÉ SIRVE LA GEOTECNIA?"
        text="La geotecnia se aplica para conocer y determinar el origen, naturaleza, topografía, disposición de materiales, composición, contaminación, grado de resistencia, estabilidad, debilidades y riesgos del terreno donde se edificará, con el fin de realizar diseños orientados a la prevención de patologías constructivas, ante las condiciones físicas del ambiente y desastres naturales que puedan causar daños a las obras civiles y seres humanos que habitan o utilizan las mismas."
        isTextLeft={false}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/Geotecnia3.png"
        title="ESTUDIOS GEOFÍSICOS"
        text={
          "Nos apoyamos con tendidos geosísmicos para determinar si existe un espesor de masa de suelo que esté renblandecido por infilraciones de humedad u otro fenómeno detectable con la realización de levantamientos de ondas superficiales por el método multicanal por fuente activa (MASW), mediante el uso de sismógrafo equipado con geófonos de baja frecuencia, además del procesamiento para la obtención de un perfil sismoestatigráfico de velocidades de onda cortante con una imágen tomográfica con los intervalos de clasificación de la tabla 1613.5.2 del IBC 2006, dándose a conocer el tipo de clase de sitio y perfil de suelo de acuerdo a la magnitud de las velocidades de ondas de cortante (Vs).\n\nEstimaciones de la compacidad de los materiales (Seed & Idriss, 1981), Estimación del peso volumétrico húmedo (Tezcan, 2006), Módulo dinámico de corte/rigidez, Módulo estático de corte/rigidez, Estimaciones de capacidad de carga última (Tezcan, 2006), Estimaciones de capacidad de carga admisible (Tezcan, 2006), Estimaciones del coeficiente de reacción de la subrasante (Tezcan, 2006), Estimaciones de cohesión (I. G. Mindel), Ángulo de fricción interna (I. G. Mindel) Y Ripabilidad o escarificabilidad de las rocas."
        }
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/Geotecnia4.jpeg"
        title="ESTUDIOS GEOTÉCNICOS"
        text="Se trata de un compendio de actividades y técnicas de análisis como lo son el reconocimiento de campo, investigación del subsuelo, así como recomendaciones de ingeniería, con relación al diseño, construcción de las obras y el entorno que las rodea. Permite dimensionar la profundidad de las cimentaciones y ofrece la posibilidad de garantizar un comportamiento adecuado de la edificación, siendo útil para la prevención y protección de la integridad de las personas, vías, instalaciones donde se brindan servicios públicos, predios y construcciones aledañas."
        isTextLeft={false}
        isWhiteBackground={true}
      />

      <GeotecniaTests />

      <TextWithImage
        image="/images/Geotecnia5.jpg"
        title="PRUEBA DE PLACA"
        text="Ensayo geotécnico que se realiza in situ, con el fin de determinar las propiedades de deformabilidad y resistencia al esfuerzo cortante, buscan evaluar la relación entre una presión aplicada por una placa de acero y su penetración en el suelo. "
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <GeotecniaAnalysis />
    </main>
  );
};

export default Geotecnia;
