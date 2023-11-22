import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage/TextWithImage";
import ChecklistImage from "@/components/ContentFormat/Checklist/ChecklistImage/ChecklistImage";

export const metadata: Metadata = {
  title: "Mision",
  description:
    "Desarrollar proyectos donde al cliente se le genere la confianza de que se buscará la optimización del proyecto en busca de soluciones con un costo-beneficio, llegando a un proyecto sustentable.",
};

const checkListContents = [
  {
    id: 1,
    heading: "HONESTIDAD",
    text: "Ser totalmente transparentes con nuestros clientes, orientándolos a utilizar buenas prácticas al desarrollar sus proyectos, promoviendo la seguridad de nuestros trabajadores y los civiles.",
  },
  {
    id: 2,
    heading: "VOCACIÓN DE SERVICIO",
    text: "Brindar un servicio de calidad, con el fin de que nuestros socios y clientes, estén satisfechos buscando siempre realizar el trabajo de buena manera, siendo la calidad y seguridad nuestro motivante principal.",
  },
  {
    id: 3,
    heading: "HUMILDAD",
    text: `Sabemos que nadie nace sabiendo, ni sabrá nunca todo, por ello, primeramente, consideramos las virtudes en cada compañero y/o colaborador, apoyándonos en ellas a través del trabajo en equipo. Cada uno tenemos nuestras virtudes y debilidades.\n\nLas personas humildes saben que la unión hace la fuerza, entendiendo que juntos somos más y mejores. Esto nos ayuda a ser mejores compañeros y a funcionar mejor en equipo, preocupándonos por lo demás y no sólo por nosotros mismos de manera egoísta, así como a no ser soberbios ante nuestros clientes.`,
  },
  {
    id: 4,
    heading: "GRATITUD",
    text: "Agradecer y reconocer a las personas que nos dan la oportunidad de brindarles nuestros servicios, que han contribuido a beneficiarnos, ya sea directa o indirectamente, en busca de un efecto recíproco en las personas que lo reciben.",
  },
];

const Mision = () => {
  return (
    <main>
      <HeroImage
        image="/images/mision_hero.jpeg"
        pageName="Es nuestra prioridad en Grupo CONSAT"
        subText="Desarrollar proyectos donde al cliente se le genere la confianza de que se buscará la optimización del proyecto en busca de soluciones con un costo-beneficio, llegando a un proyecto sustentable."
      />

      <TextWithImage
        image="/images/mision.png"
        title="Misión"
        text="Ofrecer servicios de asesoría experta y soluciones innovadoras, apegados a la normatividad vigente, con el fin de satisfacer las necesidades de nuestros clientes, cumpliendo con las expectativas en cuanto a calidad, tiempo y seguridad."
        isTextLeft={true}
        isWhiteBackground={false}
      />

      <TextWithImage
        image="/images/Carousel1.jpeg"
        title="Visión"
        text="Consolidarnos como una empresa responsable, vanguardista y multidisciplinaria en el campo de la ingeniería civil, en el ámbito nacional e internacional, reconocida por la calidad de nuestros servicios, por la seriedad y profesionalismo en nuestro trabajo, y sobre todo por dar alternativas de solución acordes a las necesidades de cada proyecto."
        isTextLeft={false}
        isWhiteBackground={false}
      />

      <ChecklistImage
        image="/images/principios.png"
        checklistContents={checkListContents}
        title="Principios"
        subtext=""
      />
    </main>
  );
};

export default Mision;
