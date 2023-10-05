import { useState } from "react";

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Misión y Visión</a>
          </li>
          <li>
            <a href="/">Consultar Dossier</a>
          </li>
          <li>
            <a href="/">Servicios </a>
            <button
              className={classes.downArrow}
              onClick={handleServiciosClick}
            />

            <div className={isServiciosOpen}>
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
          <li>
            <a href="/">Contáctanos </a>
            <button
              className={classes.downArrow}
              onClick={handleContactanosClick}
            />
            <div className={isContactanosOpen}>
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
    </div>
  );
};

export default BurgerModal;
