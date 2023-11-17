import Image from "next/image";

import classes from "./Card.module.css";

interface CardProps {
  image: string;
  title: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageContainer}>
        <Image
          src={props.image}
          alt={props.title}
          width={400}
          height={300}
          className={classes.image}
        />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Card;
