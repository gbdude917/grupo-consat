import classes from "../../app/styles.module.css";
import BurgerButton from "@/components/Nav/BurgerButton";

const Nav = (children: any) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Misión y Visión</a>
          </li>
          <li>
            <a href="/">Consultar Dossier</a>
          </li>
          <li className={classes.dropdown}>
            <a className={classes.dropdownButton} href="/">
              Servicios <div className={classes.downArrow} />
            </a>
            <div className={classes["dropdown-content"]}>
              <a href="/">Geotecnia</a>
              <a href="/">Protección Civil y Programas Internos</a>
              <a href="/">Geología</a>
              <a href="/">Cálculo Estructural</a>
              <a href="/">Construcción</a>
              <a href="/">Laboratorio de control de calidad</a>
              <a href="/">Estudios de Medio Ambiente</a>
              <a href="/">Fotogrametríax</a>
            </div>
          </li>
          <li>
            <a href="/">Constancias y Licencias</a>
          </li>
          <li className={classes.dropdown}>
            <a className={classes.dropdownButton} href="/">
              Contáctanos <div className={classes.downArrow} />
            </a>
            <div className={classes["dropdown-content"]}>
              <a href="/">Oficina (664) 681 9704</a>
              <a href="/">MX +52 (664) 780 7004</a>
              <a href="/">USA +001 (619) 598 3879</a>
              <a href="/">dbjconsat@hotmail.com</a>
              <a href="/">administracion@hotmail.com</a>
            </div>
          </li>
          <li>
            <a href="/">Noticias</a>
          </li>
        </ul>
      </div>

      <BurgerButton handleBurgerClick={children.handleBurgerClick} />
    </nav>
  );
};

export default Nav;
