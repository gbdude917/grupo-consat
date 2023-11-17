import classes from "./Card.module.css";

interface CardProps {
  id: number;
  title: string;
  description: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.numberContainer}>
        <div className={classes.number}>{props.id}</div>
      </div>

      <div className={classes.textContainer}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
