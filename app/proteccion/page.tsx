import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroImage/HeroImage";
import SwappableInfoBlock from "@/components/ContentFormat/SwappableInfoBlock/SwappableInfoBlock";
import TrainingSection from "@/components/PageSections/Proteccion/TrainingSection/TrainingSection";

export const metadata: Metadata = {
  title: "Proteccion",
  description: "...",
};

const Proteccion = () => {
  return (
    <main>
      <HeroImage
        image="/images/Proteccion.jpg"
        pageName="Protección civil & capacitación"
        subText="Contamos con asesorías de elaboración, implementación, ejecución y actualización del Programa Interno de Protección Civil"
      />

      <SwappableInfoBlock />

      <TrainingSection />
    </main>
  );
};

export default Proteccion;
