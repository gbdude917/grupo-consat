import Image from "next/image";

import classes from "./TextListCard.module.css";

interface TextListCardProps {
  id: number;
  isTextListCard: boolean;
  image: string;
  title1: string;
  title2: string;
  text: string;
  equipoContents?: string[];
  materialContents?: string[];
  reference: string;
  visibleDivId: number;
}

const TextListCard = (props: TextListCardProps) => {
  const display =
    props.visibleDivId === props.id ? `${classes.wrapper}` : `${classes.hide}`;

  // Check if there is a list of equipments and materials
  const equipoList = props.equipoContents ? (
    <div className={classes.equipo}>
      <b>Equipo: </b>
      <ul>
        {props.equipoContents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );

  const materialList = props.materialContents ? (
    <div className={classes.material}>
      <b>Material: </b>
      <ul>
        {props.materialContents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );

  // Check if reference exists
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

          <div className={classes.listContainer}>
            {equipoList}
            {materialList}
          </div>
        </div>
      </div>

      {reference}
    </div>
  );
};

export default TextListCard;
