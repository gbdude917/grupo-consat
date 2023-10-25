import Image from "next/image";

import classes from "./HeroImage.module.css";

interface HeroImageProps {
  image: string;
  pageName: string;
  subText: string;
}

const HeroImage = (props: HeroImageProps) => {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}>
        <Image
          src={props.image}
          alt={props.pageName}
          className={classes["hero-image"]}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={classes.textWrapper}>
        <div className={classes["hero-text"]}>
          <h1>{props.pageName}</h1>
          <div className={classes.line} />
          <p>{props.subText}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
