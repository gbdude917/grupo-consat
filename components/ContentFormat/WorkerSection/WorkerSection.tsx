import Image from "next/image";

import classes from "./WorkerSection.module.css";

interface WorkerSectionProps {
  image: string;
  name: string;
  caption: string;
  description: string;
}

const WorkerSection = (props: WorkerSectionProps) => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.imageWrapper}>
          <figure className={classes.imageContainer}>
            <Image
              src={props.image}
              alt={props.name}
              height={500}
              width={800}
              className={classes.image}
            />
            <figcaption>{props.caption}</figcaption>
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
