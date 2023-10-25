import { useState } from "react";

import Link from "next/link";

import classes from "./BurgerModal.module.css";

const BurgerModal = (children: any) => {
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
    <div className={children.modalIsOpen}>
      <div className={classes.closeButtonContainer}>
        <button onClick={children.handleBurgerClick}>X</button>
      </div>

      <div className={classes.linkContainer}>
        <ul>
          <li>
            <Link href="/" onClick={children.handleBurgerClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/mision" onClick={children.handleBurgerClick}>
              Misión y Visión
            </Link>
          </li>
          <li>
            <Link href="/" onClick={children.handleBurgerClick}>
              Consultar Dossier
            </Link>
          </li>
          <li>
            <Link href="/" onClick={children.handleBurgerClick}>
              Servicios{" "}
            </Link>
            <button
              className={classes.downArrow}
              onClick={handleServiciosClick}
            />

            <div className={isServiciosOpen}>
              <Link href="/geotecnia" onClick={children.handleBurgerClick}>
                Geotecnia
              </Link>
              <Link href="/" onClick={children.handleBurgerClick}>
                Protección Civil y Programas Internos
              </Link>
              <Link href="/" onClick={children.handleBurgerClick}>
                Geología
              </Link>
              <Link href="/" onClick={children.handleBurgerClick}>
                Cálculo Estructural
              </Link>
              <Link href="/" onClick={children.handleBurgerClick}>
                Construcción
              </Link>
              <Link href="/" onClick={children.handleBurgerClick}>
                Laboratorio de control de calidad
              </Link>
              <Link href="/" onClick={children.handleBurgerClick}>
                Estudios de Medio Ambiente
              </Link>
              <Link href="/" onClick={children.handleBurgerClick}>
                Fotogrametríax
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
              <a href="/" onClick={children.handleBurgerClick}>
                Oficina (664) 681 9704
              </a>
              <a href="/" onClick={children.handleBurgerClick}>
                MX +52 (664) 780 7004
              </a>
              <a href="/" onClick={children.handleBurgerClick}>
                USA +001 (619) 598 3879
              </a>
              <a href="/" onClick={children.handleBurgerClick}>
                dbjconsat@hotmail.com
              </a>
              <a href="/" onClick={children.handleBurgerClick}>
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
