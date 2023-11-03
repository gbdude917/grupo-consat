import Image from "next/image";
import InfoCard from "./InfoCard/InfoCard";

import classes from "./HeroImageSections.module.css";

interface Section {
  id: number;
  title: string;
  subtext: string;
  list: string[];
}

interface HeroImageProps {
  image: string;
  sectionName: string;
  subText: string;
  contents: Section[];
}

const HeroImageSections = (props: HeroImageProps) => {
  return (
    <section className={classes.hero}>
      <div className={classes.overlay}>
        <Image
          src={props.image}
          alt={props.sectionName}
          className={classes["hero-image"]}
          // layout="fill"
          width={1920}
          height={1000}
          // objectFit="cover"
        />
      </div>

      <div className={`${classes.textWrapper} ${classes["hero-text"]}`}>
        <div className={classes.header}>
          <h2>{props.sectionName}</h2>
          <p>{props.subText}</p>
        </div>

        <div className={classes.content}>
          {props.contents.map((content, key) => (
            <InfoCard key={key} {...content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroImageSections;
