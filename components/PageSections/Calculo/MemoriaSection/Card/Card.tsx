"use client";

import { useInView } from "react-intersection-observer";

import classes from "./Card.module.css";

interface CardProps {
  id: number;
  title: string;
  text: string;
}

const Card = (props: CardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView ? `${classes.show}` : `${classes.hide}`;

  return (
    <div ref={ref} className={`${classes.wrapper} ${runAnimation}`}>
      <div className={classes.numberContainer}>
        <div className={classes.circle}>{props.id}</div>
      </div>

      <div className={classes.textContainer}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
