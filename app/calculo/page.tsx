import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage/TextWithImage";
import HeroImageSection from "@/components/ContentFormat/HeroFormat/HeroImageSection/HeroImageSection";
import Memoria from "@/components/PageSections/Calculo/MemoriaSection/Memoria";

export const metadata: Metadata = {
  title: "Calculo",
  description:
    "Ofrecemos servicios para el diseño de una infraestructura con el fin de cumplir los estándares de calidad que requieren de seguridad.",
};

const Calculo = () => {
  return (
    <main>
      <HeroImage
        image="/images/CalculoHero1.jpg"
        pageName="Cálculo estructural"
        subText="Ofrecemos servicios para el diseño de una infraestructura con el fin de cumplir los estándares de calidad que requieren de seguridad."
      />

      <TextWithImage
        image="/images/Calculo1.jpg"
        title="¿QUÉ ES UN PROYECTO DE CÁLCULO ESTRUCTURAL?"
        text="Es un documento en el que se exponen los cálculos gráficos o numéricos llevados a cabo para el diseño de los elementos interconectados entre sí dentro de una edificación de manera que se garantice que dichos elementos cuentan con la solidez suficiente para resistir su propio peso y las acciones del terreno, por lo general todo proyecto de construcción debe contar con un proyecto de cálculo estructural, este proyecto toma en cuenta la normativa legal y las regulaciones propias de los distintos materiales."
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/Calculo2.jpg"
        title="TODA EDIFICACIÓN CONSTA DE UNA COMBINACIÓN DE 4 ESTRUCTURAS BÁSICAS:"
        text={`Estructuras de Hormigón\n\nEstructuras de Acero\n\nEstructuras de Madera\n\nEstructuras metálicas`}
        isTextLeft={false}
        isWhiteBackground={true}
      />

      <HeroImageSection
        image="/images/CalculoHero2.jpg"
        header1="DISEÑO ESTRUCTURAL"
        text1="Es importante que para cualquier edificación se cuente con su propio proyecto de calculo estructural, ya que en este se muestran los detalles de la estructura como parte del proyecto, además de que en este se profundiza en los métodos aplicados para el cálculo, justificando el cumplimiento de las normas de seguridad y protección civil, además de todas las características mecánicas de los materiales y el terreno, todo ello debe ir acompañado de planos detallado sobre la construcción."
        header2="En Grupo CONSAT contamos con personal especializado para el desarrollo ​de sus proyectos de cálculo estructural de las siguientes estructuras:"
        list2={[
          "Casa habitación",
          "Edificios",
          "Naves industriales",
          "Muros de contención y retención",
        ]}
        header3="También contamos con el diseño de estructuras especiales:"
        list3={[
          "Anuncios espectaculares",
          "Cisternas",
          "Tanques de almacenamiento",
          "Diseño para ampliaciones",
        ]}
      />

      <Memoria />
    </main>
  );
};

export default Calculo;
