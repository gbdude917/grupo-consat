"use client";

import { useInView } from "react-intersection-observer";

import classes from "./CardPicture.module.css";

import Link from "next/link";

interface CardPictureProps {
  title: string;
  imagePath: string;
  href: string;
}

const CardPicture = (props: CardPictureProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes.container} ${classes.show}`
    : `${classes.container}`;

  return (
    <div
      ref={ref}
      className={runAnimation}
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
