import styles from "./page.module.css";

import ImageCarousel from "@/components/carousel/ImageCarousel";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "...",
};

const Home = () => {
  return (
    <div>
      <main className={styles.main}>
        <ImageCarousel />
      </main>
    </div>
  );
};

export default Home;
