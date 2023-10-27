"use client";

import Image from "next/image";

import classes from "./HomeIntro.module.css";

import logoPic from "../../../../public/images/Logo.png";
import { useInView } from "react-intersection-observer";

const HomeIntro = () => {
  const [refText, inViewText] = useInView({ triggerOnce: true });
  const [refImage, inViewImage] = useInView({ triggerOnce: true });

  const textAnimation = inViewText
    ? `${classes.textContainer} ${classes.show}`
    : `${classes.textContainer}`;

  const imageAnimation = inViewImage
    ? `${classes.imageContainer} ${classes.show}`
    : `${classes.imageContainer}`;

  return (
    <section className={classes.wrapper}>
      <div ref={refText} className={textAnimation}>
        <h3>
          Somos una empresa mexicana con sede en Tijuana Baja California,
          nuestra experiencia de más de 25 años nos permite ofrecer servicios en
          diversas ramas de la ingeniería civil:
        </h3>
        <ul>
          <li>
            <a href="/">Geotecnica</a>
          </li>
          <li>
            <a href="/">Cálculo estructural</a>
          </li>
          <li>
            <a href="/">Construc​ción</a>
          </li>
          <li>
            <a href="/">Geología</a>
          </li>
          <li>
            <a href="/">
              Laboratorio de Control de Calidad para la Industria de la
              Construcción
            </a>
          </li>
          <li>
            <a href="/">Protección civil & capacitación</a>
          </li>
          <li>
            <a href="/">Estudios de medio ambiente</a>
          </li>
          <li>
            <a href="/">Fotogrametr​ía</a>
          </li>
        </ul>
      </div>

      <div ref={refImage} className={imageAnimation}>
        <Image
          src={logoPic}
          alt="Grupo Consat Logo"
          className={classes.image}
        />
        <figcaption>Construcción y Servicios de Asesor​ía Técnica</figcaption>
      </div>
    </section>
  );
};

export default HomeIntro;
