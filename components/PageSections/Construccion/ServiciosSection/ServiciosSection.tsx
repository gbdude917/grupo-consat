import HeroImageCardSimple from "@/components/ContentFormat/HeroFormat/HeroImageCardSimple/HeroImageCardSimple";

import classes from "./ServiciosSection.module.css";

interface Contents {
  id: number;
  title: string;
  image: string;
}

interface ServiciosProps {
  contents: Contents[];
}

const ServiciosSection = (props: ServiciosProps) => {
  return (
    <section className={classes.section__hero}>
      <div className={classes.section__hero__header}>
        <h2>En Grupo CONSAT</h2>
        <h2>Ofrecemos servicios profesionales</h2>
      </div>

      <HeroImageCardSimple
        image="/images/Fotogrametria3.jpeg"
        sectionName="Ofrecemos servicios profesionales"
        contents={props.contents}
      />
    </section>
  );
};

export default ServiciosSection;
