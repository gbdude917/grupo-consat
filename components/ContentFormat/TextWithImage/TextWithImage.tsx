"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import classes from "./TextWithImage.module.css";

interface LeftTextRightImageProps {
  image: string;
  title: string;
  text: string;
  isTextLeft: boolean;
  is500px: boolean;
  isWhiteBackground: boolean;
}

const LeftTextRightImage = (props: LeftTextRightImageProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const sizing = props.is500px ? `${classes.is500px}` : `${classes.is40vh}`;
  const backgroundColor = props.isWhiteBackground
    ? `${classes.whiteBackground}`
    : `${classes.greyBackground}`;

  // Determine if format of text and image is left or right
  const formatStyle = props.isTextLeft
    ? `${classes.wrapperLTRI} ${sizing}`
    : `${classes.wrapperRTLI} ${sizing}`;

  const runAnimation = inView
    ? `${formatStyle} ${classes.show}`
    : `${classes.hide}`;

  // Formatting
  const format = props.isTextLeft ? (
    <>
      <div className={`${classes.textContainer} ${sizing} ${backgroundColor}`}>
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

      <div className={`${classes.textContainer} ${sizing} ${backgroundColor}`}>
        <div className={classes.textWrapper}>
          <h2>{props.title}</h2>
          <div className={classes.line} />
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );

  return (
    <section ref={ref} className={`${classes.container} ${sizing}`}>
      <div className={runAnimation}>{format}</div>
    </section>
  );
};

export default LeftTextRightImage;
