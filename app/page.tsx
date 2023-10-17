import CardPictureContainer from "@/components/cardpicturecontainer/CardPictureContainer";
import styles from "./page.module.css";

import ImageCarousel from "@/components/carousel/ImageCarousel";
import HomeIntro from "@/components/homeintro/HomeIntro";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "...",
};

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <ImageCarousel />

        <HomeIntro />

        <CardPictureContainer />
      </main>
    </>
  );
};

export default Home;
