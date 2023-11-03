"use client";

import ArticleCard from "../ArticleCard/ArticleCard";
import { usePathname } from "next/navigation";

import classes from "./ArticleContainer.module.css";

const homeArticles = [
  {
    id: 1,
    title: "Geotecnia",
    description:
      "Es el estudio de las propiedades mecánicas de los materiales empleados para la prevención de accidentes y desastres naturales.",
    link: "/geotecnia",
    image: "/images/Geotecnia.jpeg",
  },
  {
    id: 2,
    title: "Cálculo estructural",
    description:
      "A través de nuestro personal se lleva a cabo el cálculo de las cargas máximas que la estructura soporta y transmite al terreno.",
    link: "/",
    image: "/images/CalculoEstructural.jpg",
  },
  {
    id: 3,
    title: "Geología",
    description:
      "Es la ciencia dedicada al estudio de la tierra con el objetivo de comprender su composición física.",
    link: "/",
    image: "/images/Geologia.jpeg",
  },
  {
    id: 4,
    title: "Construcción",
    description:
      "Garantizamos el buen control de calidad durante el desarrollo de su proyecto a través de nuestro equipo.",
    link: "/",
    image: "/images/Construccion.png",
  },
  {
    id: 5,
    title:
      "Laboratorio de control de calidad para la industria de la construcción",
    description:
      "Contamos con personal capacitado, instalaciones, equipo y maquinaria de laboratorio apropiada, para brindarle un mejor servicio.",
    link: "/",
    image: "/images/Laboratorio.jpeg",
  },
  {
    id: 6,
    title: "Protección civil y capacitación",
    description:
      "Gestión en protección civil, bomberos y programas internos y capacitación.",
    link: "/",
    image: "/images/Proteccion.jpg",
  },
  {
    id: 7,
    title: "Estudios de medio ambiente",
    description:
      "Se ​previenen, mitigan y restauran los daños al ambiente así como la regulación de obras o actividades para evitar o reducir sus efectos negativos en el ambiente.",
    link: "/",
    image: "/images/Estudios.jpg",
  },
  {
    id: 8,
    title: "Fotogrametría",
    description:
      "Facilita el desarrollo del proyecto, haciendo uso de equipo especializado para cada trabajo.",
    link: "/",
    image: "/images/Fotogrametria.jpg",
  },
  {
    id: 9,
    title: "Proximamente",
    description: "Nos estamos preparando para ofrecer más servicios.",
    link: "/",
    image: "/images/Proximamente.png",
  },
];

const geotecniaArticles = [
  {
    id: 1,
    title: "Sondeo de penetración estándar (SPT)",
    description:
      "Este método se emplea en suelos finos, en arenas finas y medias, en mezclas de finos y arenas.",
    link: "/",
    image: "/images/GeotecniaArticle1.jpg",
  },
  {
    id: 2,
    title: "Piezocono eléctrico",
    description:
      "Ensaye del piezocono eléctrico, se trata de un ensayo de penetración estática (CPT,Cone Penetration Test) con medida de las presiones intersticiales (CPTU) y consiste en hincar una punta cónica en el terreno para obtener, entre otros datos, la resistencia de esta punta la penetración estática (qc), la fricción lateral (fs) y la presión intersticial (U).",
    link: "/",
    image: "/images/GeotecniaArticle2.jpg",
  },
  {
    id: 3,
    title: "Muestreo inalterado de suelos",
    description:
      "Son aquellas muestras cuya estructura no es afectada significativamente por el muestreo; se utilizan para clasificar los suelos y hacer determinaciones de propiedades índice, mecánicas e hidráulicas. Por lo general se realiza posteriormente a los ensayos CPT o pruebas PCA.",
    link: "/",
    image: "/images/GeotecniaArticle3.jpg",
  },
  {
    id: 4,
    title: "Muestro en roca mediante barril NQ",
    description:
      "El muestreo en este tipo de materiales se realiza con barriles muestreadores, pueden ser sencillos, rígidos o doble giratorio.",
    link: "/",
    image: "/images/GeotecniaArticle4.jpg",
  },
  {
    id: 5,
    title: "Instalación de estaciones piezométricas y tubos de observación",
    description:
      "Una de las principales ventajas de este ensayo es que tenemos un registro continuo de las caracerísticas geotécnicas del terreno y que a partir la gráfica se puede estimar que longitud deberíatener un pilote o pila para que la zona de influencia de la punta del pilote se sitúe en la zona de mayor resistencia (valores de qc más elevados).",
    link: "/",
    image: "/images/GeotecniaArticle5.jpg",
  },
  {
    id: 6,
    title: "Prueba de placa",
    description:
      "Ensayo geotécnico que se realiza in situ, con el fin de determinar las propiedades de deformabilidad y resistencia al esfuerzo cortante.",
    link: "/",
    image: "/images/GeotecniaArticle6.jpg",
  },
];

const ArticleContainer = () => {
  const pathname = usePathname();

  let articles = null;
  let hasLink = false;
  let backgroundColorWhite = true;
  let enlarge = false;

  switch (pathname) {
    case "/":
      articles = homeArticles;
      hasLink = true;
      backgroundColorWhite = true;
      break;

    case "/geotecnia":
      articles = geotecniaArticles;
      hasLink = false;
      backgroundColorWhite = false;
      enlarge = true;
      break;

    default:
      articles = null;
      hasLink = false;
      backgroundColorWhite = true;
      break;
  }

  const content = articles
    ? articles.map((article, key) => (
        <ArticleCard
          title={article.title}
          description={article.description}
          link={article.link}
          image={article.image}
          hasLink={hasLink}
          enlarge={enlarge}
          myKey={article.id}
          key={key}
        />
      ))
    : "";

  // Styling
  const backgroundColor = backgroundColorWhite
    ? classes.isWhite
    : classes.isGrey;

  return (
    <div className={`${classes.container} ${backgroundColor}`}>{content}</div>
  );
};

export default ArticleContainer;
