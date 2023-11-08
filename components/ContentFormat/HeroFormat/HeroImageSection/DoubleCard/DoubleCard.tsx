import classes from "./DoubleCard.module.css";

interface DoubleCardProps {
  header1: string;
  text1: string;
  header2: string;
  list2: string[];
  header3: string;
  list3: string[];
}

const DoubleCard = (props: DoubleCardProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <div className={classes.subSection1}>
          <h2>{props.header1}</h2>
          <p>{props.text1}</p>
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.container}>
          <div className={classes.subSection2}>
            <h3>{props.header2}</h3>
            <ul>
              {props.list2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={classes.subSection3}>
            <h3>{props.header3}</h3>
            <ul>
              {props.list3.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleCard;
