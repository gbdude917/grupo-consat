import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage/TextWithImage";
import TextWithImageList from "@/components/ContentFormat/TextWithImage/TextWithImageList/TextWithImageList";

export const metadata: Metadata = {
  title: "Estudios de medio ambiente",
  description:
    "Conocer los efectos que puede tener el desarrollo de alguna edificación es indispensable para crear planes que disminuyan su impacto ambiental, buscando desarrollos amigables para el ambiente.",
};

const Ambiente = () => {
  return (
    <main>
      <HeroImage
        image="/images/AmbienteHero.jpg"
        pageName="Estudios de medio ambiente"
        subText="Conocer los efectos que puede tener el desarrollo de alguna edificación es indispensable para crear planes que disminuyan su impacto ambiental, buscando desarrollos amigables para el ambiente."
      />

      <TextWithImageList
        image="/images/Ambiente2.jpg"
        title="¿QUÉ SON LOS ESTUDIOS MEDIO AMBIENTALES?"
        text="Los estudios ambientales son instrumentos de toma de decisiones sobre proyectos, obras o actividades, en dichos estudios por lo general se deben incluir los siguientes apartados:"
        list={[
          "Alcance del estudio.",
          "Delimitación del área de influencia del proyecto.",
          "Descripción de la obra.",
          "Informes que validen la compatibilidad de proyecto y el suelo donde se planea desarrollar el proyecto.",
          "Detalles sobre los recursos que se utilizarán durante el proyecto.",
          "Descripción, caracterización del medio biótico, abiótico y socioeconómico en el cual se desarrollará el proyecto.",
          "Identificación y evaluación de los impactos ambientales que pueden ocasionarse durante el proyecto así como informar cuales pueden prevenirse.",
          "Propuesta del plan de manejo ambiental de la obra.",
        ]}
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/Ambiente1.jpg"
        title="¿CÚAL ES SU FUNCIÓN?"
        text="Cuantificar el impacto ambiental nos permite saber los efectos producidos por la obra y con ello elaborar planes para el manejo de residuos, adecuado respetando y buscando minimizar los efectos negativos generados durante el desarrollo del proyecto."
        isTextLeft={false}
        isWhiteBackground={true}
      />
    </main>
  );
};

export default Ambiente;
