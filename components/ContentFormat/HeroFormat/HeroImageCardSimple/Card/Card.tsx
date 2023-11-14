import Image from "next/image";

import classes from "./Card.module.css";

interface CardProps {
  title: string;
  image: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={props.image}
          alt={props.title}
          height={250}
          width={250}
          className={classes.image}
        />
      </div>
    </div>
  );
};

export default Card;
