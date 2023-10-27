import ImageCarousel from "@/components/ContentFormat/Carousel/ImageCarousel";
import HomeIntro from "@/components/PageSections/Home/HomeIntro/HomeIntro";
import CardPictureContainer from "@/components/ContentFormat/CardPictureSections/CardPictureContainer/CardPictureContainer";
import Consulta from "@/components/PageSections/Home/Consulta/Consulta";
import Summary from "@/components/ContentFormat/SummarySections/Summary/Summary";
import Blogs from "@/components/ContentFormat/BlogSections/Blogs/Blogs";

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
