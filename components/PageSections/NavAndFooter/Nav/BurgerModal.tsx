import { useState } from "react";

import Link from "next/link";

import classes from "./BurgerModal.module.css";

const BurgerModal = (props: any) => {
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [contactanosOpen, setContactanosOpen] = useState(false);

  const handleServiciosClick = () => {
    // Ensure that only one dropdown is open at a time
    if (!serviciosOpen) setContactanosOpen(false);

    setServiciosOpen(!serviciosOpen);
  };

  const handleContactanosClick = () => {
    if (!contactanosOpen) setServiciosOpen(false);

    setContactanosOpen(!contactanosOpen);
  };

  const isServiciosOpen = serviciosOpen
    ? `${classes["burger-dropdown-content"]} ${classes.dropdownShow}`
    : `${classes["burger-dropdown-content"]} ${classes.dropdownHide}`;
  const isContactanosOpen = contactanosOpen
    ? `${classes["burger-dropdown-content"]} ${classes.dropdownShow}`
    : `${classes["burger-dropdown-content"]} ${classes.dropdownHide}`;

  return (
    <div className={props.modalIsOpen}>
      <div className={classes.closeButtonContainer}>
        <button onClick={props.handleBurgerClick}>X</button>
      </div>

      <div className={classes.linkContainer}>
        <ul>
          <li>
            <Link href="/" onClick={props.handleBurgerClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/mision" onClick={props.handleBurgerClick}>
              Misión y Visión
            </Link>
          </li>
          <li>
            <Link href="/" onClick={props.handleBurgerClick}>
              Consultar Dossier
            </Link>
          </li>
          <li>
            <button
              className={classes.servicios__button}
              onClick={handleServiciosClick}
            >
              Servicios
            </button>
            <button
              className={classes.downArrow}
              onClick={handleServiciosClick}
            />

            <div className={isServiciosOpen}>
              <Link href="/geotecnia" onClick={props.handleBurgerClick}>
                Geotecnia
              </Link>
              <Link href="/proteccion" onClick={props.handleBurgerClick}>
                Protección Civil y Programas Internos
              </Link>
              <Link href="/geologia" onClick={props.handleBurgerClick}>
                Geología
              </Link>
              <Link href="/calculo" onClick={props.handleBurgerClick}>
                Cálculo Estructural
              </Link>
              <Link href="/construccion" onClick={props.handleBurgerClick}>
                Construcción
              </Link>
              <Link href="/laboratorio" onClick={props.handleBurgerClick}>
                Laboratorio de control de calidad
              </Link>
              <Link href="/ambiente" onClick={props.handleBurgerClick}>
                Estudios de Medio Ambiente
              </Link>
              <Link href="/fotogrametria" onClick={props.handleBurgerClick}>
                Fotogrametría
              </Link>
            </div>
          </li>
          <li>
            <a href="/">Constancias y Licencias</a>
          </li>
          <li>
            <a href="/">Contáctanos </a>
            <button
              className={classes.downArrow}
              onClick={handleContactanosClick}
            />
            <div className={isContactanosOpen}>
              <a href="/" onClick={props.handleBurgerClick}>
                Oficina (664) 681 9704
              </a>
              <a href="/" onClick={props.handleBurgerClick}>
                MX +52 (664) 780 7004
              </a>
              <a href="/" onClick={props.handleBurgerClick}>
                USA +001 (619) 598 3879
              </a>
              <a href="/" onClick={props.handleBurgerClick}>
                dbjconsat@hotmail.com
              </a>
              <a href="/" onClick={props.handleBurgerClick}>
                administracion@hotmail.com
              </a>
            </div>
          </li>
          <li>
            <a href="/">Noticias</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerModal;
