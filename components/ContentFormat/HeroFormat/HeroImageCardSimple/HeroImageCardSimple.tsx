import Image from "next/image";

import Card from "./Card/Card";

import classes from "./HeroImageCardSimple.module.css";

interface Section {
  id: number;
  title: string;
  image: string;
}

interface HeroImageProps {
  image: string;
  sectionName: string;
  contents: Section[];
}

const HeroImageCardSimple = (props: HeroImageProps) => {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}>
        <Image
          src={props.image}
          alt={props.sectionName}
          className={classes["hero-image"]}
          width={1920}
          height={1000}
        />
      </div>

      <div className={`${classes.textWrapper} ${classes["hero-text"]}`}>
        <div className={classes.content}>
          {props.contents.map((content, key) => (
            <Card key={key} {...content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroImageCardSimple;
