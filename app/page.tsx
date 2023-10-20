import styles from "./page.module.css";

import ImageCarousel from "@/components/Carousel/ImageCarousel";
import HomeIntro from "@/components/HomeIntro/HomeIntro";
import CardPictureContainer from "@/components/CardPictureContainer/CardPictureContainer";
import Consulta from "@/components/Consulta/Consulta";
import Summary from "@/components/Summary/Summary";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "...",
};

const Home = () => {
  return (
    <main className={styles.main}>
      <ImageCarousel />

      <HomeIntro />

      <CardPictureContainer />

      <Consulta />

      <Summary />
    </main>
  );
};

export default Home;
