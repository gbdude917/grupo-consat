import ArticleContainer from "../ContentFormat/ArticleSection/ArticleContainer/ArticleContainer";

import classes from "./GeotecniaTests.module.css";

const GeotecniaTests = () => {
  return (
    <section className={classes.articleSection}>
      <div className={classes.header}>
        <h2>
          Contamos con las siguientes pruebas para el estudio de mecanica de
          suelos
        </h2>
        <div className={classes.line} />
        <h3>
          Para los estudios geotécnicos y de mecánica de suelos existen
          distintas técnicas que se utilizan, esto depende de la situación y
          entorno en el que se desarrollen las pruebas para el análisis,
          contamos con especialistas y equipo para apto para la realización de
          las siguientes pruebas:
        </h3>
      </div>
      <ArticleContainer />
    </section>
  );
};

export default GeotecniaTests;
