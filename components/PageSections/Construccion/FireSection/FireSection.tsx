import Card from "./Card/Card";

import classes from "./FireSection.module.css";

const contents = [
  {
    id: 1,
    title:
      "Diseño de red hidráulica en contra de Incendio mediante rociadores automatizados.",
    image: "/images/ConstruccionCard1.jpg",
  },
  {
    id: 2,
    title: "Sistemas de detección automáticos o manuales.",
    image: "/images/ConstruccionCard2.png",
  },
  {
    id: 3,
    title:
      "Sistemas de alerta mediante timbres o megafonía y señalización para las vías de evacuación, con sistema de iluminación mínimo, alimentado por baterías.",
    image: "/images/ConstruccionCard3.jpg",
  },
  {
    id: 4,
    title:
      "Sistemas automáticos de alerta para el cuerpo de bomberos de la ciudad.",
    image: "/images/ConstruccionCard4.jpg",
  },
  {
    id: 5,
    title:
      "Sistemas de Extinción Manual estableciendo su ubicación y selección más adecuada de agentes extintores.",
    image: "/images/ConstruccionCard5.jpg",
  },
  {
    id: 6,
    title:
      "Elaboración de los planos de los elementos componentes del sistema en contra incendio propuesto.",
    image: "/images/ConstruccionCard6.jpg",
  },
];

const FireSection = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <h2>DISEÑO Y CÁLCULO DE SISTEMAS EN CONTRA DE INCENDIO</h2>
        <div className={classes.line} />
      </div>

      <div className={classes.content}>
        {contents.map((content, key) => (
          <Card key={key} {...content} />
        ))}
      </div>
    </section>
  );
};

export default FireSection;
