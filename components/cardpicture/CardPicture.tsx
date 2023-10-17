import classes from "./CardPicture.module.css";

import Image from "next/image";
import Link from "next/link";

interface ICardPicture {
  title: string;
  imagePath: string;
  href: string;
}

const CardPicture = (props: ICardPicture) => {
  return (
    <div
      className={classes.container}
      style={
        {
          background: `linear-gradient( rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) ), url(${props.imagePath})`,
        } as React.CSSProperties
      }
    >
      <div className={classes.textContainer}>
        <h3>{props.title}</h3>
        <Link href={props.href}>
          Leer Más <i className={classes["arrow-right"]} />
          <i className={classes["arrow-right"]} />
        </Link>
      </div>
    </div>
  );
};

export default CardPicture;
