"use client";

import { useInView } from "react-intersection-observer";

import classes from "./Consulta.module.css";

const Consulta = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes["header-shown"]}`
    : `${classes["header-hidden"]}`;

  return (
    <section ref={ref} className={classes.container}>
      <div className={runAnimation}>
        <h2>Consulta</h2>
        <h3>Nuestros servicios</h3>
      </div>

      {/* <ArticleContainer /> */}
    </section>
  );
};

export default Consulta;
