import ArticleCard from "../ArticleCard/ArticleCard";
import classes from "./ArticleContainer.module.css";

const articles = [
  {
    title: "Geotecnia",
    description:
      "Es el estudio de las propiedades mecánicas de los materiales empleados para la prevención de accidentes y desastres naturales.",
    link: "/",
    image: "/images/Geotecnia.jpeg",
  },
  {
    title: "Cálculo estructural",
    description:
      "A través de nuestro personal se lleva a cabo el cálculo de las cargas máximas que la estructura soporta y transmite al terreno.",
    link: "/",
    image: "/images/CalculoEstructural.jpg",
  },
  {
    title: "Geología",
    description:
      "Es la ciencia dedicada al estudio de la tierra con el objetivo de comprender su composición física.",
    link: "/",
    image: "/images/Geologia.jpeg",
  },
  {
    title: "Construcción",
    description:
      "Garantizamos el buen control de calidad durante el desarrollo de su proyecto a través de nuestro equipo.",
    link: "/",
    image: "/images/Construccion.png",
  },
  {
    title:
      "Laboratorio de control de calidad para la industria de la construcción",
    description:
      "Contamos con personal capacitado, instalaciones, equipo y maquinaria de laboratorio apropiada, para brindarle un mejor servicio.",
    link: "/",
    image: "/images/Laboratorio.jpeg",
  },
  {
    title: "Protección civil y capacitación",
    description:
      "Gestión en protección civil, bomberos y programas internos y capacitación.",
    link: "/",
    image: "/images/Proteccion.jpg",
  },
  {
    title: "Estudios de medio ambiente",
    description:
      "Se ​previenen, mitigan y restauran los daños al ambiente así como la regulación de obras o actividades para evitar o reducir sus efectos negativos en el ambiente.",
    link: "/",
    image: "/images/Estudios.jpg",
  },
  {
    title: "Fotogrametría",
    description:
      "Facilita el desarrollo del proyecto, haciendo uso de equipo especializado para cada trabajo.",
    link: "/",
    image: "/images/Fotogrametria.jpg",
  },
  {
    title: "Proximamente",
    description: "Nos estamos preparando para ofrecer más servicios.",
    link: "/",
    image: "/images/Proximamente.png",
  },
];

const ArticleContainer = () => {
  return (
    <div className={classes.container}>
      {articles.map((article) => (
        <ArticleCard
          title={article.title}
          description={article.description}
          link={article.link}
          image={article.image}
        />
      ))}
    </div>
  );
};

export default ArticleContainer;
