import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import Pagination from "@/components/ContentFormat/Pagination/Pagination";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Pavimentos",
};

const contents = [
  {
    tabTitles: ["Descripción", "Métodos", "Continuación"],
    tabCount: 3,
    tabContents: [
      {
        id: 1,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Diseño de pavimento de concreto (rígido)",
        title2: "¿Qué es?",
        text: `Un pavimento rígido es aquella estructura que está compuesta por un conjunto de capas llamadas terraplén o subrasante, sub-base y la superficie de rodadura (concreto hidráulico). Al diseñar un pavimento, se debe tomar en cuenta que las cargas vehiculares no generen deformaciones permanentes en las capas que componen la estructura del pavimento.\n\nEs por ello que las metodologías de diseño de pavimentos tienen que considerar las deformaciones que se producen. En el caso de los pavimentos rígidos las cargas suelen distribuirse de una mejor manera, lo que ayuda a generar menores tensiones en la capa subrasante.`,
        reference: "",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "",
        title2:
          "Existen varios métodos para el diseño de pavimentos rígidos, entre ellos se encuentran: ",
        text: "Método AAHSTO 93 el cual se basa en resultados del comportamiento de estructuras de pavimentos ya existentes y en los estudios de fatiga del concreto. El espesor, periodo de diseño, tránsito de diseño, nivel de servicio (inicial y final), módulo de ruptura del concreto, son algunos de los parámetros de diseño que considera este método.\n\nMétodo PCA (Portland Cement Association) es un procedimiento empírico mecanicista que utiliza combinaciones de estudios de pavimentos previamente calculados y teóricos. Este método considera parámetros de diseño como el espesor, período de diseño, soporte lateral, módulo de reacción de la subrasante, módulo de ruptura del concreto, factor de seguridad de cargas, entre otros.",
        reference: "",
      },
      {
        id: 3,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "",
        title2: "",
        text: "Método INVIAS forma parte de las metodologías empíricas de diseño, se utiliza para estructuras de pavimento con volúmenes de transito bajos, medios y altos. Esta metodología solo supone la deformación en la capa subrasante y utiliza parámetros iniciales como la categoría del tránsito, clasificación de la subrasante y la resistencia de concreto para poder obtener el espesor de la losa.\n\nMétodo de diseño español MOPU – Secciones de pavimento este método considera el transito diario de los vehículos pesados. Es utilizado para tres categorías de diseño en la subrasante de acuerdo al valor relativo soporte (VRS). El periodo de servicio en el caso de que se desee diseñar en pavimentos rígidos es de 30 años.",
        reference: "",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Métodos", "Continuación"],
    tabCount: 3,
    tabContents: [
      {
        id: 1,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Diseño de pavimento asfáltico (flexible)",
        title2: "¿Qué es?",
        text: `UEl pavimento flexible es una estructura compuesta por varias capas, entre ellas se encuentra el terraplén, sub-base, base y la carpeta de rodadura asfáltica. Al diseñar los espesores se debe considerar una serie de factores que nos permitan garantizar un buen comportamiento en la estructura del pavimento.\n\nLos pavimentos flexibles suelen tener un periodo de vida de 10 a 15 años y requieren de un mantenimiento constante para conservar su vida útil, son capaces de absorber esfuerzos verticales, horizontales y suelen tener mayores tensiones en las capas debido a que estos tienen una menor rigidez. `,
        reference: "",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "",
        title2: "",
        text: "Método AAHSTO 93 como se menciona en el apartado de diseño de pavimento de concreto (rígido), este diseño se basa en estudios realizados sobre estructuras de pavimento ya conocidas que son sometidas a cargas constantemente. Hoy en día esta metodología ha ido adquiriendo un enfoque mecanicista, ya que implementa procedimientos, características de los materiales y considera algunos parámetros de diseño como el índice de servicio inicial y final, la confiabilidad, el tránsito de diseño, el módulo de resiliencia en la subrasante entre otros aspectos importantes. Este método está relacionado con el número de repeticiones de carga (estudios de fatiga) que puede soportar el pavimento antes de llegar a su nivel de servicio final, pues lo relaciona con la vida útil del pavimento.\n\nMétodo de diseño español MOPU – Secciones de pavimento es una metodología diseñada en España, apta para categorías de tránsito pesado, son utilizadas tres categorías de subrasante de acuerdo a un valor relativo soporte (VRS) y el método considera periodos de servicio de 20 años para pavimentos flexibles.\n\nMétodo INVIAS se basa en la combinación de varios métodos y utiliza valores de acuerdo al comportamiento de los materiales, desarrollando los espesores de diseño con el método AASHTO. Dicha metodología considera factores ambientales y climáticos, el tránsito de diseño (número de ejes equivalentes), entre otros, como se menciona en el apartado de diseño de concreto rígido.",
        reference: "",
      },
      {
        id: 3,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "",
        title2: "",
        text: "Método del instituto de ingeniera UNAM y DISPAV fue desarrollado de acuerdo a investigaciones (teóricas) y análisis de laboratorio (experimentales), considera como datos principales el tipo de carretera, el número de carriles, el transito diario promedio anual (TDPA), el valor relativo soporte (VRS) crítico, entre otros. Aunque este procedimiento cuenta con sus graficas se apoya en el programa DISPAV.\n\nMétodo del Instituto del Asfalto esta metodología considera al pavimento flexible como un sistema elástico compuesto por varias capas, es decir, capa de rodadura asfáltica con base y subbase granular, capa de rodadura y base de concreto asfaltico, capa de rodadura y bases con emulsión asfáltica. Este método considera las deformaciones por tracción de la estructura las cuales no deberán superar los valores permisibles.   Algunos de los parámetros que se utilizan son el número acumulado de ejes equivalentes, el módulo de resiliencia, la temperatura, la relación de Poisson, modulo del asfalto, fatiga, entre otros.\n\nIMT-PAVE es un método de diseño para pavimentos flexibles desarrollado por el Instituto Mexicano del Transporte (IMT), es una metodología nacional mexicana empírico-mecanicista que parte de los principios de la mecánica de suelos y de pruebas experimentales que se enfoca en la utilización de espectros de carga asociadas al tránsito vehicular.",
        reference: "",
      },
    ],
  },

  {
    tabTitles: ["Descripción"],
    tabCount: 1,
    tabContents: [
      {
        id: 1,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Diseño de pavimento (White-topping)",
        title2: "¿Qué es?",
        text: "Es un sistema de sobrecarpeta de concreto hidráulico elaborado con cemento portland de espesores de acuerdo a su clasificación (convencionales 20 cm, delgados entre los 10 y 20 cm y ultra-delgados entre los 5 y 10 cm), que se encuentran sobre el pavimento flexible (asfalto). Su estructura se compone de la subrasante o terracería, sub-base, base hidráulica, carpeta asfáltica y losa de concreto hidráulico. Este tipo de diseño suele utilizarse comúnmente para la rehabilitación de pavimentos flexibles cuando estos ya cumplieron su valor de servicio para extender su vida útil.",
        reference: "",
      },
    ],
  },

  {
    tabTitles: ["Descripción"],
    tabCount: 1,
    tabContents: [
      {
        id: 1,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Diseño de pavimento (Black-topping)",
        title2: "¿Qué es?",
        text: "Es una técnica de mantenimiento en los pavimentos de concreto hidráulico, que consiste en colocar una capa de concreto asfaltico sobre la carpeta de concreto hidráulico con el fin de preservar y/o recuperar la funcionalidad del tramo para obtener una rehabilitación rápida.",
        reference: "",
      },
    ],
  },

  {
    tabTitles: ["Descripción"],
    tabCount: 1,
    tabContents: [
      {
        id: 1,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Diseño de pavimento (Overlay)",
        title2: "¿Qué es?",
        text: `Es un sistema de recubrimiento de pavimento de concreto sobre el pavimento existente, también conocido como pavimento superpuesto, este método de construcción puede ser concreto sobre concreto o concreto sobre carpeta asfáltica y se clasifica según su superposición.\n\nSuperposición adherida: el pavimento existente estará en un buen o regular estado y este será parte de la estructura de la nueva sobrecarpeta.\n\nSuperposición no adherida: el pavimento puede estar en mal estado y al colocarse la sobrecarpeta, la capa anterior se convertirá en la base de la estructura del pavimento.`,
        reference: "",
      },
    ],
  },
];

const Pavimentos = () => {
  return (
    <main>
      <HeroImage
        image="/images/PavimentosHero.jpg"
        pageName="DISEÑO DE PAVIMENTOS"
        subText=""
      />

      <section className={classes.wrapper}>
        {contents.map((content, index) => (
          <Pagination key={index} {...content} />
        ))}
      </section>
    </main>
  );
};

export default Pavimentos;
