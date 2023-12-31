"use client"; // ensure that the burger button handler works

import { useState, useEffect } from "react";

import BurgerModal from "@/components/PageSections/NavAndFooter/Nav/BurgerModal";
import Nav from "@/components/PageSections/NavAndFooter/Nav/Nav";

import classes from "./BurgerContainer.module.css";

const BurgerContainer = ({ children }: { children: React.ReactNode }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  // Close the modal when clicking outside
  useEffect(() => {
    // Add a click event listener to the document
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (isBurgerOpen && event.target) {
        const modal = document.querySelector(`.${classes.modal}`);
        if (modal && !modal.contains(event.target as Node)) {
          setIsBurgerOpen(false); // Close the modal when clicking outside
        }
      }
    };

    document.addEventListener("click", closeOnOutsideClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [isBurgerOpen]);

  const modalIsOpen = isBurgerOpen
    ? `${classes.modal} ${classes.open}`
    : `${classes.modal} ${classes.closed}`;

  return (
    <>
      {isBurgerOpen && (
        <div className={classes.overlay} onClick={handleBurgerClick}></div>
      )}
      <Nav handleBurgerClick={handleBurgerClick} />

      <BurgerModal
        modalIsOpen={modalIsOpen}
        handleBurgerClick={handleBurgerClick}
      />

      {children}
    </>
  );
};

export default BurgerContainer;
