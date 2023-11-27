import ImageCarousel from "@/components/ContentFormat/Carousel/ImageCarousel";
import HomeIntro from "@/components/PageSections/Home/HomeIntro/HomeIntro";
import CardPictureContainer from "@/components/ContentFormat/CardPictureSections/CardPictureContainer/CardPictureContainer";
import Consulta from "@/components/PageSections/Home/Consulta/Consulta";
import Summary from "@/components/ContentFormat/SummarySections/Summary/Summary";
import Blogs from "@/components/ContentFormat/BlogSections/Blogs/Blogs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupo Consat | Home",
  description:
    "Somos una empresa mexicana con sede en Tijuana Baja California, nuestra experiencia de más de 25 años nos permite ofrecer servicios en diversas ramas de la ingeniería civil.",
  applicationName: "Grupo Consat",
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
};

const Home = () => {
  return (
    <main>
      <ImageCarousel />
      <HomeIntro />
      <CardPictureContainer />
      <Consulta />
      <Summary />
      <Blogs hasLink={true} />
    </main>
  );
};

export default Home;
