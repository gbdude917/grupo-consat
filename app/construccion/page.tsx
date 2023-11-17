import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import ServiciosSection from "@/components/PageSections/Construccion/ServiciosSection/ServiciosSection";
import TextWithImageList from "@/components/ContentFormat/TextWithImage/TextWithImageList/TextWithImageList";
import ProyectoSection from "@/components/PageSections/Construccion/ProyectoSection/ProyectoSection";
import MemoriaSection from "@/components/PageSections/Construccion/MemoriaSection/MemoriaSection";
import DesignSection from "@/components/PageSections/Construccion/DesignSection/DesignSection";
import FireSection from "@/components/PageSections/Construccion/FireSection/FireSection";
import SoilSection from "@/components/PageSections/Construccion/SoilSection/SoilSection";
import HeroSingleSection from "@/components/ContentFormat/HeroFormat/HeroSingleSection/HeroSingleSection";

export const metadata: Metadata = {
  title: "Construc​ción",
  description:
    "Elaboramos presupuestos a sus posibilidades tanto en el ramo comercial, residencial e industrial.",
};

const contents1 = [
  {
    id: 1,
    title: "Anteproyecto",
    image: "/images/Anteproyecto.png",
  },
  {
    id: 2,
    title: "Elaboración de planos arquitectónicos",
    image: "/images/Elaboracion.png",
  },
  {
    id: 3,
    title: "Tramitación de permisos",
    image: "/images/Tramitacion.png",
  },
  {
    id: 4,
    title: "Presupuestos",
    image: "/images/Presupuestos.png",
  },
  {
    id: 5,
    title: "Programas de obras",
    image: "/images/Programas.png",
  },
  {
    id: 6,
    title: "Levantamientos topográficos",
    image: "/images/Leventamientos.png",
  },
];

const Construccion = () => {
  return (
    <main>
      <HeroImage
        image="/images/ConstruccionHero1.png"
        pageName="Construc​ción"
        subText="Elaboramos presupuestos a sus posibilidades tanto en el ramo comercial, residencial e industrial"
      />

      <ServiciosSection contents={contents1} />

      <TextWithImageList
        image="/images/Carousel1.jpeg"
        title="¿Deseas hacer un presupuesto?"
        text="Tenemos la capacidad para realizar un presupuesto de las siguientes etapas de tu construcción:"
        list={[
          "Proyecto Ejecutivo.",
          "Memoria de Cálculo Estructural.",
          "Cálculo Sistema Hidrosanitario (240 salidas).",
          "Diseño y Cálculo de Sistema vs Incendio.",
          "Estudio de Mecánica de Suelos.",
          "Proyecto Eléctrico.",
        ]}
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <ProyectoSection />

      <MemoriaSection />

      <DesignSection />

      <FireSection />

      <SoilSection />

      <HeroSingleSection
        image="/images/ConstruccionHero2.jpg"
        header1="Proyecto Eléctrico"
        header2="Contamos con personal apto para realizar tus proyectos eléctricos"
        description='La elaboración del proyecto eléctrico, incluye el diseño de la concentración de medidores,   cálculos de cargas así como las especificaciones de materiales y el equipo necesario para realizar las instalación de manera correcta y segura, por otro lado se incluyen los cuadros de carga individuales o genéricos dependiendo del proyecto a tratar, también se incluyen 2 copias de cada plano eléctrico en "copia dura" y un disco compacto con el proyecto, además de la firma profesional y apoyo con la tramitación ante la comisión federal de electricidad.'
      />
    </main>
  );
};

export default Construccion;
