import Image from "next/image";
import Link from "next/link";

import { useInView } from "react-intersection-observer";

import classes from "./ArticleCard.module.css";

interface ArticleCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  hasLink: boolean;
}

const ArticleCard = (props: ArticleCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes.container} ${classes.show}`
    : `${classes.container}`;

  const displayLink = props.hasLink ? `${classes.link}` : `${classes.hide}`;

  return (
    <div ref={ref} className={runAnimation}>
      <div className={classes.imageContainer}>
        <Image
          src={props.image}
          alt={props.title}
          height={300}
          width={400}
          className={classes.image}
        />
      </div>

      <h3>{props.title}</h3>
      <div className={classes.description}>{props.description}</div>
      <Link className={displayLink} href={props.link}>
        LEER MÁS
      </Link>
    </div>
  );
};

export default ArticleCard;
