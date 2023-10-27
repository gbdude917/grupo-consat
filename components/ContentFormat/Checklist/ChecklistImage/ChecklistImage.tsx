"use client";

import ChecklistItem from "../ChecklistItem/ChecklistItem";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { usePathname } from "next/navigation";

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
  subtext: string;
}

const ChecklistImage = (props: ChecklistImageProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const pathname = usePathname();

  const runAnimationImage = inView
    ? `${classes.imageWrapper} ${classes.show}`
    : `${classes.hidden}`;

  const runAnimationText = inView
    ? `${classes.textWrapper} ${classes.show}`
    : `${classes.hidden}`;

  const containerHeight = inView
    ? `${classes.container}`
    : `${classes.containerHidden}`;

  // Determine sizing of container based on pathname
  let height = "";
  let fontsize = "";
  switch (pathname) {
    case "/geotecnia":
      height = `${classes.height500px}`;
      fontsize = `${classes.h2fontsizeSmall}`;

    default:
      height = "";
      fontsize = "";
  }

  const subtext = props.subtext ? <p>{props.subtext}</p> : "";

  return (
    <section ref={ref} className={classes.wrapper}>
      <div className={containerHeight}>
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
            <h2 className={fontsize}>{props.title}</h2>
            <div className={classes.line} />
            {subtext}
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
    </section>
  );
};

export default ChecklistImage;
