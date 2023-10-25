"use client";

import ChecklistItem from "../ChecklistItem/ChecklistItem";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import classes from "./ChecklistImage.module.css";

interface ChecklistContents {
  id: number;
  heading: string;
  text: string;
}

interface ChecklistImageProps {
  image: string;
  checklistContents: ChecklistContents[];
  title: string;
}

const ChecklistImage = (props: ChecklistImageProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimationImage = inView
    ? `${classes.imageWrapper} ${classes.show}`
    : `${classes.hidden}`;

  const runAnimationText = inView
    ? `${classes.textWrapper} ${classes.show}`
    : `${classes.hidden}`;

  return (
    <div ref={ref} className={classes.wrapper}>
      <div className={classes.container}>
        <div className={runAnimationImage}>
          <Image
            src={props.image}
            alt={props.title}
            height={500}
            width={800}
            className={classes.image}
          />
        </div>

        <div className={runAnimationText}>
          <div className={classes.textContainer}>
            <h2>{props.title}</h2>
            <div className={classes.line} />
            <div className={classes.checklist}>
              {props.checklistContents.map((checklist) => (
                <ChecklistItem
                  key={checklist.id}
                  heading={checklist.heading}
                  text={checklist.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistImage;
