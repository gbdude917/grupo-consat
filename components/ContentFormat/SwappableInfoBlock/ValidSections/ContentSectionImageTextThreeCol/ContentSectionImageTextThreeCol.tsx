import Image from "next/image";

import classes from "./ContentSectionImageTextThreeCol.module.css";

interface ContentSectionImageTextThreeColProps {
  image: string;
  title1: string;
  text1: string;
  list1?: string[];
  title2: string;
  text2: string;
  list2?: string[];
  id: number;
  visibleDivId: number;
}

const ContentSectionImageTextThreeCol = (
  props: ContentSectionImageTextThreeColProps
) => {
  const displayDivStyle = props.id === props.visibleDivId ? "flex" : "none";

  return (
    <div style={{ display: displayDivStyle }} className={classes.wrapper}>
      <div className={classes.imageWrapper_mobile}>
        <div className={classes.imageContainer}>
          <Image
            src={props.image}
            alt={props.title1}
            height={500}
            width={500}
            className={classes.image}
          />
        </div>
      </div>

      <div className={classes.text1Wrapper}>
        <div className={classes.text1Container}>
          <h2>{props.title1}</h2>
          <p>{props.text1}</p>
          <ul>
            {props.list1?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={classes.imageWrapper}>
        <div className={classes.imageContainer}>
          <Image
            src={props.image}
            alt={props.title1}
            height={500}
            width={500}
            className={classes.image}
          />
        </div>
      </div>

      <div className={classes.text2Wrapper}>
        <div className={classes.text2Container}>
          <h2>{props.title2}</h2>
          <p>{props.text2}</p>
          <ul>
            {props.list2?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionImageTextThreeCol;
