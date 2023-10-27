import Image from "next/image";
import Link from "next/link";

import { useInView } from "react-intersection-observer";

import classes from "./Blog.module.css";

interface BlogProps {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
}

const Blog = (props: BlogProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const runAnimation = inView
    ? `${classes.wrapper} ${classes.show}`
    : `${classes.wrapper}`;

  return (
    <div ref={ref} key={props.id} className={runAnimation}>
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
      <div className={classes.date}>{props.date}</div>
      <div className={classes.description}>{props.description}</div>
      <Link className={classes.link} href={props.link}>
        LEER MÁS
      </Link>
    </div>
  );
};

export default Blog;
