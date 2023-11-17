import classes from "./Card.module.css";

interface CardProps {
  id: number;
  title: string;
  description: string;
  list: string[] | null;
}

const Card = (props: CardProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h3>{props.title}</h3>
        <div className={classes.line} />
      </div>
      <div className={classes.textContainer}>
        <p>{props.description}</p>
        {props.list && (
          <ul>
            {props.list.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
