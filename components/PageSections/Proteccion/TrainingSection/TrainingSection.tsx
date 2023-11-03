"use client";

import ArticleContainer from "@/components/ContentFormat/ArticleSection/ArticleContainer/ArticleContainer";

import classes from "./TrainingSection.module.css";

const TrainingSection = () => {
  return (
    <section className={classes.articleSection}>
      <div className={classes.header}>
        <h2>En Grupo CONSAT</h2>
        <div className={classes.line} />
        <h3>Apoyamos en la capacitación para los siguientes cursos:</h3>
      </div>
      <ArticleContainer />
    </section>
  );
};

export default TrainingSection;
