import CardPicture from "../CardPicture/CardPicture";

import classes from "./CardPictureContainer.module.css";

const CardPictureContainer = () => {
  return (
    <section className={`${classes.container} ${classes["slide-right"]}`}>
      <CardPicture
        title="Misión"
        imagePath="/images/misiontrimmed.png"
        href="/mision"
      />
      <CardPicture
        title="Visión"
        imagePath="/images/visiontrimmed.jpg"
        href="/mision"
      />
      <CardPicture
        title="Principios"
        imagePath="/images/principiostrimmed.jpg"
        href="/mision"
      />
    </section>
  );
};

export default CardPictureContainer;
