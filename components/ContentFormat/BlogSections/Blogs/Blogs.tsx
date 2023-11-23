"use client";

import { useInView } from "react-intersection-observer";
import Blog from "../Blog/Blog";

import classes from "./Blogs.module.css";

const blogData = [
  {
    id: 1,
    title: "Grupo CONSAT les desea ¡Felices Fiestas!",
    image: "/images/Fiestas.jpg",
    date: "25 Diciembre 2022",
    description:
      "Que esta temporada esté llena de momentos agradables, la pasen de maravilla durante las celebraciones, y que la alegría de estas fechas se extienda hasta año nuevo. Como siempre, muchas gracias. ¡Saludos!",
    link: "/noticias",
  },
  {
    id: 2,
    title: "Mapas geológicos",
    image: "/images/GeologiaData4.png",
    date: "21 Julio 2022",
    description:
      "Estudio de estructuras geológicas mediante la aplicación de metodologías de geología estructural mediante la elaboración de mapas geológicos y temas relacionados.",
    link: "/noticias",
  },
  {
    id: 3,
    title: "Geotecnia",
    image: "/images/GeotecniaHills.jpg",
    date: "21 Julio 2022",
    description:
      "Aplicación de principios de ingeniería a la ejecución de obras en función de las características de los materiales de la corteza terrestre.",
    link: "/noticias",
  },
];

interface BlogsProps {
  hasLink: boolean;
}

const Blogs = (props: BlogsProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes.header} ${classes.show}`
    : `${classes.header}`;

  return (
    <section className={classes.wrapper}>
      <div ref={ref} className={runAnimation}>
        <h3>Grupo CONSAT</h3>
        <h2>ÚLTIMOS PROYECTOS</h2>
        <div className={classes.line} />
      </div>

      <div className={classes.blogContainer}>
        {blogData.map((blog, key) => (
          <Blog {...blog} key={key} hasLink={props.hasLink} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
