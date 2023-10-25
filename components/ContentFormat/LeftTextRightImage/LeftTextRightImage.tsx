"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import classes from "./LeftTextRightImage.module.css";

interface LeftTextRightImageProps {
  image: string;
  title: string;
  text: string;
}

const LeftTextRightImage = (props: LeftTextRightImageProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes.wrapper} ${classes.show}`
    : `${classes.hide}`;

  return (
    <div ref={ref} className={classes.container}>
      <div className={runAnimation}>
        <div className={classes.textContainer}>
          <div className={classes.textWrapper}>
            <h2>{props.title}</h2>
            <div className={classes.line} />
            <p>{props.text}</p>
          </div>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src={props.image}
            alt={props.title}
            height={500}
            width={800}
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftTextRightImage;
