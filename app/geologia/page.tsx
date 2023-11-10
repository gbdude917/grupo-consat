import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage/TextWithImage";
import WorkerSection from "@/components/ContentFormat/WorkerSection/WorkerSection";
import SwappableInfoBlockFour from "@/components/ContentFormat/SwappableInfoBlock/SwappableInfoBlock4/SwappableInfoBlockFour";
import HeroSectionsWithImages from "@/components/ContentFormat/HeroFormat/HeroSectionsWithImages/HeroSectionsWithImages";

import classes from "./page.module.css";

import enriqueImage from "../../public/images/Enrique.jpeg";
import raquelImage from "../../public/images/Raquel.jpeg";

export const metadata: Metadata = {
  title: "Geología",
  description: "...",
};

const contents = [
  {
    id: 1,
    title: "Geofísica - Tendidos Geosísmicos",
    subtext: `Son ensayos de refracción sísmica que permiten determinar la estratigrafía del suelo de forma indirecta, basándose en el cambio de propiedades de los materiales que lo conforman.\n\nSe obtienen generando ondas sísmicas a través de una fuente como lo puede ser el golpe de un mazo de 20 lb o las vibraciones que causa un camión. Este golpeteo genera ondas primarias y secundarias que son detectadas por sensores llamados "geófonos", los cuales están distribuidos en un arreglo específico para cada trabajo.\n\nCon esta información generamos tomografías en 2D que muestran las velocidades de ondas sísmicas "S" con la que podemos determinar la estratigrafía de la zona de interés, siguiendo la clasificación de clases de suelos del IBC (International Building Code) 2012, además podemos determinar características físicas de los suelos como el ángulo de fricción interna, peso volumétrico húmedo, cohesión, estudios de análisis de talúd y ripabilidad o escarificabilidad.`,
    image: "/images/GeologiaData1.png",
  },
  {
    id: 2,
    title: "Riesgos geológicos - Interpolación de Tendidos Geosísmicos",
    subtext: `Consiste en una interpolación espacial de datos, esta se basa en el cálculo de los valores desconocidos de un variable espacial a partir de otros valores conocidos, el resultado se conoce habitualmente con el nombre de superficie estadística, es decir, una superficie continua con valores interpolados a partir de otros conocidos (Muelas L., 2019).\n\nLos planos obtenidos a través de la interpolación ayudan a visualizar de manera práctica, cuáles son las zonas del predio donde se encuentran los suelos con las velocidades más bajas, que se pueden interpretar como materiales litológicos de baja calidad.`,
    image: "/images/GeologiaData2.gif",
  },
  {
    id: 3,
    title: "Riesgos geológicos – Estereograma  ",
    subtext: `La geología estructural es la disciplina científica que se encarga del estudio de la deformación de la corteza terrestre que queda registrada en las rocas y que nos ayudan a entender su historia. Uno de los principales objetivos de la geología estructural es la detección de fallas geológicas.\n\nEl problema principal de la representación de las estructuras geológicas es que éstas cubren las tres dimensiones y el gráfico en donde se representan sólo cubre dos, es por ello que se usan las proyecciones estereográficas que sirven para reducir un objeto tridimensional a un gráfico de dos dimensiones.\n\nLa representación estereográfica más usada es la red de Schmidt o red equiareal, que es una proyección prediseñada para todos los planos y líneas con rumbo Norte-Sur o diferente.`,
    image: "/images/GeologiaData3.png",
  },
  {
    id: 4,
    title: "SIGS - Mapa Geológico  ",
    subtext: `Un mapa geológico representa sobre una base topográfica los principales rasgos geológicos de una región. A partir de estos planos es posible reconstruir parcialmente la geometría de las capas litológicas.\n\nEl mapa a continuación es modificado de la carta minera Tijuana I11-11 del 2003 SGM (Servicio Geológico Mexicano), con el objetivo de adquirir una mejor definición en píxeles y los límites de las formaciones geológicas.`,
    image: "/images/GeologiaData4.png",
  },
];

const Geologia = () => {
  return (
    <main>
      <HeroImage
        image="/images/GeologiaHero.jpeg"
        pageName="Geología"
        subText="Ofrecemos servicios profesionales en geología que van desde el levantamiento geológico en superficie hasta la detección oportuna de fallas y fracturas geológicas, todo esto con el objetivo de complementar nuestros estudios y análisis geotécnicos"
      />

      <TextWithImage
        image="/images/Geologia1.jpg"
        title="¿Qué es la Geología?"
        text="La geología es la ciencia dedicada al estudio de la tierra con el objetivo de comprender su composición física, así como los distintos procesos y dinámicas que han permitido su evolución desde su origen hasta la actualidad."
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/Geologia2.jpeg"
        title="En Grupo Consat"
        text="Tenemos la capacidad de realizar servicios profesionales desde un punto de vista geológico que ayuden a determinar la viabilidad económica y técnica en base a la composición del suelo. Asimismo, en fases posteriores de las obras pueden requerirse algunos de estos estudios, especialmente de carácter hidrogeológico y geotécnico."
        isTextLeft={false}
        isWhiteBackground={true}
      />

      <section className={classes.workerSection__wrapper}>
        <div className={classes.workerSection__header}>
          <h2>RESPONSABLES ​DEL ÁREA DE GEOLOGÍA</h2>
          <div className={classes.line} />
        </div>

        <WorkerSection
          image={enriqueImage}
          name="Geo. Enrique Alejandro Ortega Castillo"
          description="El encargado del ramo del área de Geología es el Ing. Enrique Alejandro Ortega Castillo quien cuenta con especialidad en rocas carbonatadas del Cretácico, detección de fallas geológicas y elaboración de planos geológicos, avalado por la Universidad Autónoma del Estado de Guerrero (UAGro) y la Escuela Superior de Ciencias de la Tierra (ESCT)."
        />

        <WorkerSection
          image={raquelImage}
          name="Geo. Raquel Maldonado Chavelas"
          description="Egresada de la Escuela Superior de Ciencias de la Tierra en Taxco el Viejo, Gro. Cuenta con una licenciatura en Geología, con especialidad en rocas sedimentarias marinas y geoquímica, avalada por la Universidad Autónoma de Guerrero (UAGro). Profesionalmente ha incursionado en la industria minera desarrollando trabajos de logueo, interpretaciones de secciones geológicas, supervisión de trabajos de barrenación e identificación de alteraciones hidrotermales."
        />
      </section>

      <SwappableInfoBlockFour />

      <HeroSectionsWithImages
        image="/images/GeotecniaHills.jpg"
        sectionName="Grupo CONSAT se apoya en la geología para complementar las siguientes áreas"
        contents={contents}
      />
    </main>
  );
};

export default Geologia;
