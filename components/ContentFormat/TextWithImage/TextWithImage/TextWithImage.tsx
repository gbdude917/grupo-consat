"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import classes from "./TextWithImage.module.css";

interface TextWithImageProps {
  image: string;
  title: string;
  text: string;
  isTextLeft: boolean;
  isWhiteBackground: boolean;
}

const TextWithImage = (props: TextWithImageProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const backgroundColor = props.isWhiteBackground
    ? `${classes.whiteBackground}`
    : `${classes.greyBackground}`;

  // Determine if format of text and image is left or right
  const formatStyle = props.isTextLeft
    ? `${classes.wrapperLTRI}`
    : `${classes.wrapperRTLI}`;

  const runAnimation = inView
    ? `${formatStyle} ${classes.show}`
    : `${classes.hide}`;

  // Formatting for text and image
  const format = props.isTextLeft ? (
    <>
      <div className={`${classes.textContainer} ${backgroundColor}`}>
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

      <div className={`${classes.textContainer} ${backgroundColor}`}>
        <div className={classes.textWrapper}>
          <h2>{props.title}</h2>
          <div className={classes.line} />
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );

  return (
    <section ref={ref} className={`${classes.container}`}>
      <div className={runAnimation}>{format}</div>
    </section>
  );
};

export default TextWithImage;
