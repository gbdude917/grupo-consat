import Image from "next/image";

import Card from "./Card/Card";

import classes from "./HeroSection.module.css";

interface Contents {
  id: number;
  title: string;
  description: string;
  list: string[] | null;
}

interface HeroSectionListProps {
  image: string;
  sectionName: string;
  contents: Contents[];
}

const HeroSectionList = (props: HeroSectionListProps) => {
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

export default HeroSectionList;
