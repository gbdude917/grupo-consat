"use client";

import { useState } from "react";

import TextListCard from "./TextListCard/TextListCard";
import TextCard from "./TextCard/TextCard";

import classes from "./Pagination.module.css";

interface TabContent {
  id: number;
  isTextListCard: boolean;
  image: string;
  title1: string;
  title2: string;
  text: string;
  equipoContents?: string[];
  materialContents?: string[];
  reference: string;
}

interface PaginationProps {
  tabTitles: string[];
  tabCount: number;
  tabContents: TabContent[];
}

const Pagination = (props: PaginationProps) => {
  const [visibleDivId, setVisibleDivId] = useState(1);

  const handleClick = (e: any) => {
    const id = Number(e.target.id);

    // Change div id to display
    handleVisibleDiv(id);
  };

  const handleVisibleDiv = (id: number) => setVisibleDivId(id);

  // Dynamically create buttons
  const buttons = props.tabTitles.map((title, index) => (
    <button
      key={index}
      id={`${index + 1}`}
      onClick={handleClick}
      className={`${
        visibleDivId === index + 1
          ? `${classes.highlight}`
          : `${classes.inactive}`
      }`}
    >
      {title}
    </button>
  ));

  // Dynamically create tab contents
  const tabs = props.tabContents.map((content, index) =>
    content.isTextListCard ? (
      <TextListCard
        key={index}
        id={content.id}
        isTextListCard={content.isTextListCard}
        image={content.image}
        title1={content.title1}
        title2={content.title2}
        text={content.text}
        equipoContents={content.equipoContents}
        materialContents={content.materialContents}
        reference={content.reference}
        visibleDivId={visibleDivId}
      />
    ) : (
      <TextCard
        key={index}
        id={content.id}
        isTextListCard={content.isTextListCard}
        image={content.image}
        title1={content.title1}
        title2={content.title2}
        text={content.text}
        reference={content.reference}
        visibleDivId={visibleDivId}
      />
    )
  );

  return (
    <section className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.buttonContainer}>{buttons}</div>

        <div className={classes.tabContainer}>{tabs}</div>
      </div>
    </section>
  );
};

export default Pagination;
