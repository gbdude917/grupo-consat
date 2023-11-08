import Image from "next/image";

import DoubleCard from "./DoubleCard/DoubleCard";

import classes from "./HeroImageSection.module.css";

interface HeroImageProps {
  image: string;
  header1: string;
  text1: string;
  header2: string;
  list2: string[];
  header3: string;
  list3: string[];
}

const HeroImageSections = (props: HeroImageProps) => {
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
        <div className={classes.content}>
          <DoubleCard
            header1={props.header1}
            text1={props.text1}
            header2={props.header2}
            list2={props.list2}
            header3={props.header3}
            list3={props.list3}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroImageSections;
