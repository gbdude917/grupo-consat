import classes from "./ChecklistItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface ChecklistImageProps {
  key: number;
  heading: string;
  text: string;
}

// Remove this line: import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ChecklistImage = (props: ChecklistImageProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <FontAwesomeIcon icon={faCircleCheck} className={classes.icon} />
      </div>
      <div className={classes.textContainer}>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ChecklistImage;
