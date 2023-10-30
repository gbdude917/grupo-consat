import classes from "../../../../app/styles.module.css";

const BurgerButton = (props: any) => {
  return (
    <button
      className={classes.burgerContainer}
      id="burger-menu"
      onClick={props.handleBurgerClick}
    >
      <div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
      </div>
    </button>
  );
};

export default BurgerButton;
