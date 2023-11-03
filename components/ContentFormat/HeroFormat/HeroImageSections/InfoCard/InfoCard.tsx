import classes from "./InfoCard.module.css";

interface InfoCardProps {
  id: number;
  title: string;
  subtext: string;
  list: string[];
}

const InfoCard = (props: InfoCardProps) => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.text}>
        <h3>{props.title}</h3>
        <p>{props.subtext}</p>
      </div>
      <div className={classes.list}>
        <ul>
          {props.list.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InfoCard;
