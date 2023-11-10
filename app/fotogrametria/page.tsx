import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage/TextWithImage";
import IFrameCard from "@/components/PageSections/Fotogrametria/IFrameCard/IFrameCard";
import WorkerSection from "@/components/ContentFormat/WorkerSection/WorkerSection";

import christopherImage from "../../public/images/Christopher.png"; // TODO: change this to the image

export const metadata: Metadata = {
  title: "Fotogrametr​ía",
  description:
    "Facilita el desarrollo del proyecto haciendo uso de equipo especializado para cada trabajo.",
};

const Fotogrametria = () => {
  return (
    <main>
      <HeroImage
        image="/images/FotogrametriaHero1.png"
        pageName="Fotogrametr​ía"
        subText="Facilita el desarrollo del proyecto haciendo uso de equipo especializado para cada trabajo."
      />

      <TextWithImage
        image="/images/Fotogrametria1.jpg"
        title="LEVANTAMIENTO POR DRON"
        text="Grupo CONSAT se apoya de las herramientas tecnológicas para enriquecer con la información la toma de decisiones respecto a tu proyecto deseado"
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <IFrameCard
        iFrameSrc="https://cloud.pix4d.com/embed/bim/mesh/872335?shareToken=a9878cfd1e8e45379fc4fce56a978f7f"
        title="¿Qué es la f​otog​​ra​metría?"
        description="La fotogrametría con drones permite modelar una superficie en 3D, generar planos, llevar a cabo mediciones (longitudes, áreas, volúmenes) con precisión y a un costo muy inferior a métodos tradicionales con una precisión garantizada. La obtención de productos topográficos y cartográficos mediante la fotogrametría con drones conlleva importantes ventajas en materia de seguridad, costos y precisión."
      />

      <WorkerSection
        image={christopherImage}
        caption="Responsable ​del departamento de fotogrametría"
        name="Christopher Martín Carranza Santacruz"
        description="El encargado del departamento de fotogrametría cuenta con experiencia en el uso de habilidades tecnológicas para desempeñarse en vuelo de dron y actualmente estudiando la carrera de ingeniería aeronáutica en el Instituto Tecnológico de Tijuana."
      />

      <TextWithImage
        image="/images/City.png"
        title="ORTOFOTOGRAFÍA"
        text="Es un producto cartográfico georreferenciado y corregido de deformaciones, generado a partir de fotografía aérea.Mantiene toda la información de la fotografía y permite además la medición a escala tanto de distancias como de superficies, lo que garantiza el ajuste con los mapas existentes sobre la zona de referencia."
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/Fotogrametria3.jpeg"
        title="CURVAS DE NIVEL"
        text="Son un grupo de líneas que en un mapa une todos los puntos que tienen igualdad de condiciones y de altura."
        isTextLeft={false}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/MapaGeologicoSIG.png"
        title="MODELO DIGITAL DEL TERRENO (MDT)"
        text="Conjunto de capas (generalmente raster) que representan distintas características de la superficie terrestre derivadas de una capa de elevaciones."
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/Fotogrametria5.jpg"
        title="LEVA​NTA​MIENTO TOPOGRÁFICO POR DRON"
        text="La topografía es la ciencia que permite determinar con exactitud las posiciones de los puntos en un espacio 2D o 3D, así como las distancias entre ellos.Los levantamientos topográficos proporcionan información esencial para tomar decisiones informadas que van desde la planificación de una obra o la parcelación catastral, hasta el diseño y el mantenimiento de infraestructuras, entre otros."
        isTextLeft={false}
        isWhiteBackground={true}
      />
    </main>
  );
};

export default Fotogrametria;
