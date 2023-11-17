import Image from "next/image";

import classes from "./HeroSingleSection.module.css";

interface HeroSingleSectionProps {
  image: string;
  header1: string;
  header2: string;
  description: string;
}

const HeroSingleSection = (props: HeroSingleSectionProps) => {
  return (
    <section className={classes.hero}>
      <div className={classes.overlay}>
        <Image
          src={props.image}
          alt={props.header1}
          className={classes["hero-image"]}
          width={1920}
          height={1000}
        />
      </div>

      <div className={`${classes.textWrapper} ${classes["hero-text"]}`}>
        <div className={classes.textContainer}>
          <div className={classes.header}>
            <h2>{props.header1}</h2>
            <h3>{props.header2}</h3>
          </div>

          <div className={classes.description}>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSingleSection;
