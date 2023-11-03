import Image from "next/image";

import classes from "./HeroImage.module.css";

interface HeroImageProps {
  image: string;
  pageName: string;
  subText: string;
}

const HeroImage = (props: HeroImageProps) => {
  return (
    <section className={classes.hero}>
      <div className={classes.overlay}>
        <Image
          src={props.image}
          alt={props.pageName}
          className={classes["hero-image"]}
          // layout="fill"
          width={1920}
          height={1000}
          // objectFit="cover"
        />
      </div>

      <div className={classes.textWrapper}>
        <div className={classes["hero-text"]}>
          <h1>{props.pageName}</h1>
          <div className={classes.line} />
          <p>{props.subText}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
