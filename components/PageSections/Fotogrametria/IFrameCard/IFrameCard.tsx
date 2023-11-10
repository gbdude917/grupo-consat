import classes from "./IFrameCard.module.css";

interface IFrameCardProps {
  iFrameSrc: string;
  title: string;
  description: string;
}

const IFrameCard = (props: IFrameCardProps) => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <h2>PROYECTO IBIZA</h2>
      </div>
      <div className={classes.content}>
        <iframe
          src={props.iFrameSrc}
          title={props.title}
          allow="fullscreen"
          className={classes.iFrame}
        ></iframe>
        <div className={classes.textContainer}>
          <h3>{props.title}</h3>
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export default IFrameCard;
