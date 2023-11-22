import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import SwappableInfoBlockThree from "@/components/ContentFormat/SwappableInfoBlock/SwappableInfoBlock3/SwappableInfoBlockThree";
import TrainingSection from "@/components/PageSections/Proteccion/TrainingSection/TrainingSection";
import HeroImageSections from "@/components/ContentFormat/HeroFormat/HeroImageSections/HeroImageSections";

export const metadata: Metadata = {
  title: "Proteccion",
  description:
    "Contamos con asesorías de elaboración, implementación, ejecución y actualización del Programa Interno de Protección Civil",
};

const sections = [
  {
    id: 1,
    title: "Todos los inmuebles",
    subtext:
      "Sin importar las dimensiones o la cantidad de personas atendidas:",
    list: [
      "Centros de Asistencia Social a que refiere la Ley para la Protección y Defensa de los Derechos de Niñas, Niños y Adolescentes del Estado",
      "Centros de Atención que presten servicios para la atención, cuidado y desarrollo integral infantil",
      "Centros para atención a personas con sesenta años o más de edad",
      "Hospitales y clínicas",
      "Centros de atención a personas con discapacides",
      "Escuelas de educación preescolar",
      "Escuelas de educación especial",
      "Centros de atención a personas con adicciones",
      "Todo tipo de albergue para personas",
    ],
  },
  {
    id: 2,
    title: "Industrias de alto riesgo",
    subtext:
      "Las Industrias consideradas como de alto riesgo por las cantidades o volúmenes de materiales peligrosos que manejan, de acuerdo con lo estipulado por las autoridades federales y estatales responsables del ramo, y las que la propia Coordinación Estatal, incluyen:",
    list: [
      "Las plantas de almacenamiento.",
      "Centros de distribución.",
      "Estaciones de carburación de gas licuado de petróleo.",
      "Los establecimientos de venta de juegos pirotécnicos.",
    ],
  },
  {
    id: 3,
    title: "Edificios y servicios prioritarios",
    subtext:
      "Edificios y servicios considerados prioritarios y estratégicos para otorgar servicios vitales y de gobierno:",
    list: [
      "Hospitales y clínicas con servicio de quirófano",
      "Edificios de la administración pública de todo tipo, de los tres órdenes de gobierno",
      "Estaciones de Bomberos",
      "Edificios de la Cruz Roja",
      "Estaciones de policía",
      "Escuelas",
      "Potabilizadoras",
      "Generadoras eléctricas",
      "Empresas de telefonía",
      "Aeropuertos civiles",
      "Puertos navales",
      "Almacenes de hidrocarburos o estaciones",
      "Estaciones de radio y/o televisión",
      "Presas",
    ],
  },
  {
    id: 4,
    title: "Establecimientos comerciales, entretenmiento y religión",
    subtext:
      "Establecimientos comerciales y de servicios de esparcimiento o actos religiosos o de culto en áreas cerradas, sin importar dimensiones del lugar:",
    list: [
      "Centros culturales",
      "Centros nocturnos",
      "Bares",
      "Salones de fiesta y de baile",
      "Restaurantes​",
      "Cafés",
      "Casinos",
      "Auditorios",
      "Albercas",
      "Centros de espectáculos y convenciones",
      "Parques de diversiones con juegos mecánicos",
      "Palenques",
      "Estadios",
      "Parques y/o deportivos con gradas",
      "Iglesias",
      "Templos y en general establecimientos de culto religioso",
    ],
  },
];

const Proteccion = () => {
  return (
    <main>
      <HeroImage
        image="/images/Proteccion.jpg"
        pageName="Protección civil & capacitación"
        subText="Contamos con asesorías de elaboración, implementación, ejecución y actualización del Programa Interno de Protección Civil"
      />

      <SwappableInfoBlockThree />

      <TrainingSection />

      <HeroImageSections
        sectionName={"Consulta qué empresas necesita​n un"}
        subText={"programa interno de protección civil"}
        image={"/images/ProteccionHero2.jpg"}
        contents={sections}
      />
    </main>
  );
};

export default Proteccion;
