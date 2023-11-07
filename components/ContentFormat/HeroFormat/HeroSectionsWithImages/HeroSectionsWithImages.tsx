import Image from "next/image";

import InfoCardWithImage from "./InfoCardWithImage/InfoCardWithImage";

import classes from "./HeroSectionsWithImages.module.css";

interface Section {
  id: number;
  title: string;
  subtext: string;
  image: string;
}

interface HeroImageProps {
  image: string;
  sectionName: string;
  contents: Section[];
}

const HeroSectionsWithImages = (props: HeroImageProps) => {
  return (
    <section className={classes.hero}>
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
        <div className={classes.header}>
          <h2>{props.sectionName}</h2>
        </div>

        <div className={classes.content}>
          {props.contents.map((content, key) => (
            <InfoCardWithImage key={key} {...content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionsWithImages;
