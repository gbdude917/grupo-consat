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
            <a href="/geotecnia">Geotecnica</a>
          </li>
          <li>
            <a href="/calculo">Cálculo estructural</a>
          </li>
          <li>
            <a href="/construccion">Construc​ción</a>
          </li>
          <li>
            <a href="/geologia">Geología</a>
          </li>
          <li>
            <a href="/laboratorio">
              Laboratorio de Control de Calidad para la Industria de la
              Construcción
            </a>
          </li>
          <li>
            <a href="/proteccion">Protección civil & capacitación</a>
          </li>
          <li>
            <a href="/ambiente">Estudios de medio ambiente</a>
          </li>
          <li>
            <a href="/fotogrametria">Fotogrametr​ía</a>
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
