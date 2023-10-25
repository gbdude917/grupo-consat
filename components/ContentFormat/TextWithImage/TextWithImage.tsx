"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import classes from "./TextWithImage.module.css";

interface LeftTextRightImageProps {
  image: string;
  title: string;
  text: string;
  isTextLeft: boolean;
}

const LeftTextRightImage = (props: LeftTextRightImageProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  //
  const format = props.isTextLeft ? (
    <>
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
    </>
  ) : (
    <>
      <div className={classes.imageWrapper}>
        <Image
          src={props.image}
          alt={props.title}
          height={500}
          width={800}
          className={classes.image}
        />
      </div>

      <div className={classes.textContainer}>
        <div className={classes.textWrapper}>
          <h2>{props.title}</h2>
          <div className={classes.line} />
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );

  // Determine if format of text and image is left or right
  const formatStyle = props.isTextLeft
    ? `${classes.wrapperLTRI}`
    : `${classes.wrapperRTLI}`;

  const runAnimation = inView
    ? `${formatStyle} ${classes.show}`
    : `${classes.hide}`;

  return (
    <section ref={ref} className={classes.container}>
      <div className={runAnimation}>{format}</div>
    </section>
  );
};

export default LeftTextRightImage;
