import Image from "next/image";

import classes from "./TextCard.module.css";

interface TextCardProps {
  id: number;
  isTextListCard: boolean;
  image: string;
  title1: string;
  title2: string;
  text: string;
  reference: string;
  visibleDivId: number;
}

const TextCard = (props: TextCardProps) => {
  const display = props.visibleDivId === props.id ? "" : `${classes.hide}`;

  const reference =
    props.reference.length === 0 || !props.reference ? (
      ""
    ) : (
      <div className={classes.reference}>
        <b>Referencia: </b>
        {props.reference}
      </div>
    );

  return (
    <div className={display}>
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <Image
            src={props.image}
            alt={props.title1}
            height={500}
            width={800}
            className={classes.image}
          />
        </div>

        <div className={classes.textContainer}>
          <h2>{props.title1}</h2>
          <h3>{props.title2}</h3>
          <p>{props.text}</p>
        </div>
      </div>

      {reference}
    </div>
  );
};

export default TextCard;
