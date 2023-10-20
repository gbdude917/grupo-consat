"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import classes from "./SummaryCard.module.css";

interface SummaryCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SummaryCard = (props: SummaryCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes.wrapper} ${classes.show}`
    : `${classes.wrapper}`;

  return (
    <div ref={ref} className={runAnimation} key={props.id}>
      <div className={classes.imageWrapper}>
        <div className={classes.imageContainer}>
          <Image
            src={props.image}
            alt={props.title}
            height={128}
            width={128}
            className={classes.img}
          />
        </div>
      </div>

      <div className={classes.textContainer}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
