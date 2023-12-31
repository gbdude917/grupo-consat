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
  enlarge?: boolean;
  myKey: number;
}

const ArticleCard = (props: ArticleCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes.container} ${classes.show}`
    : `${classes.hidden}`;

  const displayLink = props.hasLink ? `${classes.link}` : `${classes.hideLink}`;

  const enlarge = props.enlarge ? `${classes.enlarge}` : "";

  return (
    <div key={props.myKey} ref={ref} className={`${runAnimation} ${enlarge}`}>
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
