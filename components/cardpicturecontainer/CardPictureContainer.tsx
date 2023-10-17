import CardPicture from "../cardpicture/CardPicture";

import classes from "./CardPictureContainer.module.css";

const CardPictureContainer = () => {
  return (
    <div className={`${classes.container} ${classes["slide-right"]}`}>
      <CardPicture
        title="Misión"
        imagePath="/images/misiontrimmed.png"
        href="/"
      />
      <CardPicture
        title="Visión"
        imagePath="/images/visiontrimmed.jpg"
        href="/"
      />
      <CardPicture
        title="Principios"
        imagePath="/images/principiostrimmed.jpg"
        href="/"
      />
    </div>
  );
};

export default CardPictureContainer;
