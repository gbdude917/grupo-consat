import ImageCarousel from "@/components/Carousel/ImageCarousel";
import HomeIntro from "@/components/HomeIntro/HomeIntro";
import CardPictureContainer from "@/components/CardPictureContainer/CardPictureContainer";
import Consulta from "@/components/Consulta/Consulta";
import Summary from "@/components/Summary/Summary";
import Blogs from "@/components/Blogs/Blogs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "...",
};

const Home = () => {
  return (
    <main>
      <ImageCarousel />
      <HomeIntro />
      <CardPictureContainer />
      <Consulta />
      <Summary />
      <Blogs />
    </main>
  );
};

export default Home;
