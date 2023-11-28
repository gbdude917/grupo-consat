import classes from "../../../../app/styles.module.css";

const BurgerButton = (props: any) => {
  return (
    <button
      className={classes.burgerContainer}
      id="burger-menu"
      onClick={props.handleBurgerClick}
      aria-label="Open burger menu"
    >
      <div>
        <div className={classes.bar} />
        <div className={classes.bar} />
        <div className={classes.bar} />
      </div>
    </button>
  );
};

export default BurgerButton;
