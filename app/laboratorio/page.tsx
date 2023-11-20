import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage/TextWithImage";
import ServiceAreasSection from "@/components/PageSections/Laboratorio/ServiceAreasSection";

export const metadata: Metadata = {
  title:
    "Laboratorio de Control de Calidad para la Industria de la Construcción",
  description:
    "Nuestra prioridad es atender las necesidades de nuestros clientes, aplicando la normatividad vigente Nacional e Internacional que sea requerida, para mantener y mejorar la calidad de nuestros trabajos, considerando siempre la prevención de riesgos en beneficio de la seguridad de todos.",
};

const Laboratorio = () => {
  return (
    <main>
      <HeroImage
        image="/images/Laboratorio.jpeg"
        pageName="Laboratorio de Control de Calidad para la Industria de la Construcción"
        subText="Nuestra prioridad es atender las necesidades de nuestros clientes, aplicando la normatividad vigente Nacional e Internacional que sea requerida, para mantener y mejorar la calidad de nuestros trabajos, considerando siempre la prevención de riesgos en beneficio de la seguridad de todos."
      />

      <ServiceAreasSection />

      <TextWithImage
        image="/images/Carousel3.jpeg"
        title="LABORATORIO FIJO​ EN OBRA"
        text="Contamos con el equipo para la instalación de un laboratorio fijo en obra, si es requerido. "
        isTextLeft={false}
        isWhiteBackground={true}
      />
    </main>
  );
};

export default Laboratorio;
