import Image from "next/image";

import classes from "./ContentSectionImageText.module.css";

interface ContentSectionImageTextProps {
  image: string;
  title: string;
  text: string;
  name: string;
  caption: string;
  id: number;
  visibleDivId: number;
}

const ContentSectionImageText = (props: ContentSectionImageTextProps) => {
  const displayDivStyle = props.id === props.visibleDivId ? "flex" : "none";

  return (
    <div style={{ display: displayDivStyle }} className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <div className={classes.imageContainer}>
          <Image
            src="/images/David.jpeg"
            alt={props.title}
            height={500}
            width={500}
            className={classes.image}
          />
        </div>

        <div className={classes.imageText}>
          <figcaption>{props.caption}</figcaption>
          <div>{props.name}</div>
        </div>
      </div>

      <div className={classes.textWrapper}>
        <div className={classes.textContainer}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionImageText;
