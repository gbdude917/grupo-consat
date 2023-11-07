import Image from "next/image";

import classes from "./InfoCardWithImage.module.css";

interface InfoCardProps {
  id: number;
  title: string;
  subtext: string;
  image: string;
}

const InfoCard = (props: InfoCardProps) => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.text}>
        <h3>{props.title}</h3>
        <div className={classes.description}>
          <p>{props.subtext}</p>
        </div>
      </div>
      <div className={classes.imageWrapper}>
        <Image
          src={props.image}
          alt={props.title}
          width={500}
          height={500}
          className={classes.image}
        />
      </div>
    </section>
  );
};

export default InfoCard;
