import Image from "next/image";

import classes from "./ContentSectionImageDoubleText.module.css";

interface ContentSectionImageDoubleTextProps {
  id: number;
  visibleDivId: number;
  image: string;
  title1: string;
  title2: string;
  text1: string;
  text2: string;
}

const ContentSectionImageDoubleText = (
  props: ContentSectionImageDoubleTextProps
) => {
  const displayDivStyle = props.id === props.visibleDivId ? "flex" : "none";

  return (
    <div style={{ display: displayDivStyle }} className={classes.wrapper}>
      <div className={classes.imageContainer}>
        <Image
          src={props.image || "/images/Proteccion.jpg"}
          alt={props.title1 || props.title2 || "Proteccion"}
          width={500}
          height={500}
          className={classes.image}
        />
      </div>

      <div className={classes.textWrapper}>
        <div className={classes.textContainer}>
          <div className={classes.text1}>
            <h2>{props.title1}</h2>
            <p>{props.text1}</p>
          </div>

          <div className={classes.text2}>
            <h2>{props.title2}</h2>
            <p>{props.text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionImageDoubleText;
