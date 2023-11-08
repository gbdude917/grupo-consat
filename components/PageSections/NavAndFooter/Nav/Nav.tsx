import classes from "../../../../app/styles.module.css";
import BurgerButton from "@/components/PageSections/NavAndFooter/Nav/BurgerButton";
import Link from "next/link";

const Nav = (children: any) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/mision">Misión y Visión</Link>
          </li>
          <li>
            <Link href="/">Consultar Dossier</Link>
          </li>
          <li className={classes.dropdown}>
            <Link className={classes.dropdownButton} href="/">
              Servicios <div className={classes.downArrow} />
            </Link>
            <div className={classes["dropdown-content"]}>
              <Link href="/geotecnia">Geotecnia</Link>
              <Link href="/proteccion">
                Protección Civil y Programas Internos
              </Link>
              <Link href="/geologia">Geología</Link>
              <Link href="/calculo">Cálculo Estructural</Link>
              <Link href="/construccion">Construcción</Link>
              <Link href="/laboratorio">Laboratorio de control de calidad</Link>
              <Link href="/ambiente">Estudios de Medio Ambiente</Link>
              <Link href="/fotogrametria">Fotogrametría</Link>
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
            <a href="/noticias">Noticias</a>
          </li>
        </ul>
      </div>

      <BurgerButton handleBurgerClick={children.handleBurgerClick} />
    </nav>
  );
};

export default Nav;
