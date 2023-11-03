"use client";

import { useInView } from "react-intersection-observer";
import { usePathname } from "next/navigation";

import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleCardList from "../ArticleCardList/ArticleCardList";

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
    image: "/images/GeotecniaArticle3.JPG",
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
    image: "/images/GeotecniaArticle5.JPG",
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

const proteccionArticles = [
  {
    id: 1,
    title: "Evacuación y repliegue",
    descriptions: [
      "Brigada de Evacuación y Resguardo en: perfil del Brigadista, equipo personal del Brigadista y funciones de la Brigada en sus tres faces (Prevención, auxilio y recuperación).",
      "Fenómenos Perturbadores, señalización y simulacros: señalización, simulacros",
      "Procedimientos Generales de Evacuación y/o Resguardo: en caso de sismo, en caso de inundación, en caso de incendio.",
    ],
    link: "/",
    image: "/images/ProteccionArticle1.jpg",
  },
  {
    id: 2,
    title: "Busqueda y rescate",
    descriptions: [
      "Brigada de Búsqueda y Rescate en: perfil del Brigadista, equipo personal del Brigadista y funciones de la Brigada en sus tres faces (Prevención, auxilio y recuperación).",
      "Evaluación y técnicas básicas de Búsqueda y Rescate",
      "Técnicas básicas de levantamiento y arrastre.",
    ],
    link: "/",
    image: "/images/ProteccionArticle2.jpg",
  },
  {
    id: 3,
    title: "Comunicaciones",
    descriptions: [
      "Procedimiento.",
      "Notificación de la situación de emergencia al personal que labora, o acude al inmueble, autoridades, grupos de ayuda mutua, servicios de apoyo externo.",
    ],
    link: "/",
    image: "/images/ProteccionArticle3.jpg",
  },
  {
    id: 4,
    title: "Reanimación Cardio-Pulmonar (RCP)",
    descriptions: [
      "Cadena de sobrevida.",
      "Obstrucción de la vía aérea.",
      "Paro cardio-respiratorio.",
      "RCP.",
    ],
    link: "/",
    image: "/images/ProteccionArticle4.jpg",
  },
  {
    id: 5,
    title: "Análisis de riesgos",
    descriptions: [
      "Agentes perturbadores y su clasificación",
      "Análisis de riesgos externos",
      "Análisis de riesgos internos: de la construcción, deficiencia de las instalaciones y vulnerabilidad",
      "Evaluación de los riesgos",
      "Evaluación de los recursos",
      "Propuesta de medidas a aplicar",
    ],
    link: "/",
    image: "/images/ProteccionArticle5.jpg",
  },
  {
    id: 6,
    title: "Formación de brigadas",
    descriptions: [
      "Definición de Unidad Interna de Protección Civil (UIPC)",
      "Estructura de la UIPC en funciones de: prevención, exilio, recuperación y organización interna.",
      "Funciones de los integrantes de la UIPC: responsable del inmueble y jefe de piso.",
      "Funciones de Brigadas: de la brigada de evacuación, resguardo, antes, durante y después de emergencias, de brigada de búsqueda y rescate, antes, durante y después de emergencias y de brigada de prevención y combate de fuego, antes, durante y después de emergencias",
    ],
    link: "/",
    image: "/images/ProteccionArticle6.jpg",
  },
  {
    id: 7,
    title: "Manejo de extintores e hidrantes",
    descriptions: [
      "Diferentes tipos de fuego.",
      "Diferentes tipos de extintores:",
      "Clase A (papel y madera y plástico).",
      "Clase B (gasolina y pintura).",
      "Clase C (butano o gas ciudad).",
      "Clase D (Sodio, Magnesio y Aluminio en polvo).",
      "Clase F (aceites y grasas).",
      "Tipos de extintores por eficacia: ABC, AFF, Clase B.",
    ],
    link: "/",
    image: "/images/ProteccionArticle7.jpg",
  },
  {
    id: 8,
    title: "Materiales peligrosos  (reconocimiento)",
    descriptions: [
      "Almacenamiento",
      "Señalización",
      "Hojas de Datos de Seguridad",
      "Equipo de protección personal",
      "Capacitación",
    ],
    link: "/",
    image: "/images/ProteccionArticle8.jpeg",
  },
  {
    id: 9,
    title: "Primeros auxilios",
    descriptions: [
      "Hemorragias: clasificación y tratamiento de la urgencia.",
      "Estado de Shock: clasificación, signos y síntomas y tratamiento de la urgencia.",
      "Heridas: clasifiación y tratamiento de la urgencia.",
      "Quemaduras: clasificación, signos y síntomas y  tratamiento de la urgencia.",
      "Fracturas: clasificación, signos y síntomas y tratamiento de la urgencia.",
    ],
    link: "/",
    image: "/images/ProteccionArticle9.jpg",
  },
];

const ArticleContainer = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const contentsShown = inView ? `${classes.container}` : `${classes.hidden}`;

  const pathname = usePathname();

  let articles = null;
  let articlesList = null;
  let hasLink = false;
  let backgroundColorWhite = true;
  let enlarge = false;
  let isList = false;

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

    case "/proteccion":
      articlesList = proteccionArticles;
      hasLink = false;
      backgroundColorWhite = false;
      enlarge = true;
      isList = true;
      break;

    default:
      articles = null;
      hasLink = false;
      backgroundColorWhite = true;
      break;
  }

  let content = null;

  if (isList) {
    content = articlesList
      ? articlesList.map((article, key) => (
          <ArticleCardList
            title={article.title}
            descriptions={article.descriptions}
            link={article.link}
            image={article.image}
            hasLink={hasLink}
            enlarge={enlarge}
            myKey={article.id}
            key={key}
          />
        ))
      : "";
  } else {
    content = articles
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
  }

  // Styling
  const backgroundColor = backgroundColorWhite
    ? classes.isWhite
    : classes.isGrey;

  return (
    <div ref={ref} className={`${contentsShown} ${backgroundColor}`}>
      {content}
    </div>
  );
};

export default ArticleContainer;
