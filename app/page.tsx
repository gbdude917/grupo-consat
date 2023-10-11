import styles from "./page.module.css";

import ImageCarousel from "@/components/carousel/ImageCarousel";

const Home = () => {
  return (
    <main className={styles.main}>
      <ImageCarousel />
    </main>
  );
};

export default Home;
