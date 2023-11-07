"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import classes from "./WorkerSection.module.css";

interface WorkerSectionProps {
  image: string;
  name: string;
  caption?: string;
  description: string;
}

const WorkerSection = (props: WorkerSectionProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const contentsShown = inView
    ? `${classes.container} ${classes.show}`
    : `${classes.hide}`;

  const setContainerHeight = inView
    ? `${classes.wrapper}`
    : `${classes.wrapperHidden}`;

  const caption = props.caption ? <figcaption>{props.caption}</figcaption> : "";

  return (
    <section ref={ref} className={setContainerHeight}>
      <div className={contentsShown}>
        <div className={classes.imageWrapper}>
          <figure className={classes.imageContainer}>
            <div className={classes.circle}>
              <Image
                src={props.image}
                alt={props.name}
                height={500}
                width={800}
                className={classes.image}
              />
            </div>
            {caption}
          </figure>
        </div>

        <div className={classes.textWrapper}>
          <div className={classes.textContainer}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkerSection;
