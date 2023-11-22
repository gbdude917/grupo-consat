import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import Pagination from "@/components/ContentFormat/Pagination/Pagination";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Asfalto",
};

const contents = [
  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: true,
        image: "/images/concrete.jpg",
        title1: "Método Marshall",
        title2: "¿Qué es el método Marshall?",
        text: "Es una metodología aplicable para mezclas asfálticas en caliente con tamaños máximos nominales de 25 mm, aunque actualmente ya se cuenta con el método modificado para tamaños nominales máximos arriba de 38 mm, se utiliza para el diseño en laboratorio y control de campo, lo cual nos permite obtener o seleccionar el contenido optimo del asfalto.",
        equipoContents: [
          "Moldes metálicos",
          "Cucharon metálico",
          "Guantes de protección (Resistentes al calor)",
          "Prensa Marshall",
          "Franela",
          "Equipo compactador",
        ],
        reference:
          "ASTM-D1559 Test Method for Resistance of Plastic Flow of Bituminous Mixtures Using Marshall Apparatus.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Método Marshall",
        title2: "¿Cómo se realiza el método Marshall?",
        text: "Para el desarrollo del diseño de la mezcla se fabrica de acuerdo al conjunto mineral y el betún revolviendo en un recipiente o mezcladora mecánica hasta obtener una mezcla homogénea. Si se desea analizar una muestra obtenida en campo se realizan las probetas (cilíndricas) de ensayo estándar con altura de 64 mm y 102 mm de diámetro con un compactador, aplicando entre 75 y 50 golpes por cara (de acuerdo al criterio de diseño de mezclas), la cantidad de probetas serán las necesarias para las pruebas que se requieran, cuando las probetas se enfríen se desmoldan y se determinan sus espesores (4 promedios). Posteriormente se determina la densidad real en condición seca, superficialmente seca y sumergida en agua. Para el ensayo las probetas se sumergen en agua por un periodo de 30 a 40 minutos en una temperatura de 60 ± 1 °C, después se secan para proceder a ensayarlas en la prensa Marshall.",
        reference:
          "ASTM-D1559 Test Method for Resistance of Plastic Flow of Bituminous Mixtures Using Marshall Apparatus.",
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
        title1: "Método Ramcodes",
        title2: "¿Qué es el método RAMCODES?",
        text: "Por sus siglas en ingles RAMCODES que significa Rational Methodology for Compacted geomaterial’s Density and Strength analysis, es una metodología racional desarrollada en el año 1998 por Sánchez- Leal, aplicable para el diseño y control de colocación de geomateriales compactados.  La metodología se divide en análisis volumétrico y de relación filler-bitumen de la mezcla asfáltica, mientras que en la segunda etapa se analiza el desempeño de la mezcla asfáltica una vez compactada. Para llevar a cabo dicha metodología se tendrá que tomar en cuenta un factor característico, la clasificación cuantitativa de las mezclas asfálticas para encontrar las curvas de diseño, los mapas de resistencia, las regiones de aceptación, el muestreo aleatorio y el polígono de vacíos (en el centro del polígono se encontrará el valor del contenido óptimo de asfalto para preparar la mezcla).",
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
        title1: "Método SuperPave",
        title2: "¿Qué es el método SuperPave?",
        text: "El método Superior Performing Asphalt Pavement por sus siglas en ingles Superpave, es una metodología desarrollada por Strategic Highway Research Program (SHRP) por medio de un software para mezclas asfálticas en caliente. La metodología considera seleccionar un asfalto con base a las condiciones climáticas (máximas y mínimas), tránsito y especificaciones para agregados, que nos permiten conocer si las mezclas pueden ser susceptibles a la deformación. Se pretende que la mezcla sea resistente a la deformación permanente y a la fisuración, combinando la volumetría con los ensayos de desempeño, esta metodología también nos permite clasificar los asfaltos según su grado de desempeño PG. Algunas de las pruebas que se realizan en la metodología son: Ensayo de Película Delgada Rotatoria, Ensayo de reómetro dinámico de corte directo, Ensayo de tensión directa, entre otros.",
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
        title1: "Método Hveem",
        title2: "¿Qué es el método Hveem?",
        text: "Este método nos permite determinar el contenido óptimo de asfalto utilizando algunos procedimientos de ensayo como lo es el equivalente centrifugo de Kerosene (CKE) para posteriormente realizar probetas que serán sometidas con el contenido de asfalto. Fue desarrollada por Francis N. Hveem, esta metodología solo es aplicable para mezclas asfálticas en caliente con tamaños máximos de agregados de 25.0 mm, es utilizado tanto para el diseño como para el control en campo de las mezclas asfálticas. Cuando se realiza la mezcla asfáltica no es necesario preparar asfalto, sin embargo, su enfoque está en el estudio de los agregados.",
        reference: "",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: true,
        image: "/images/concrete.jpg",
        title1: "Muestreo de Asfalto",
        title2: "¿De qué trata el muestreo de asfalto?",
        text: "Consiste en obtener una porción representativa de mezcla asfáltica. La muestra puede ser obtenida directamente en planta de mezclado, durante el tendido sin compactar (directamente del sitio) y en las capas que ya han sido compactadas (extracción de núcleos), en el caso de las mezclas tomadas en sitio se deberá cuidar que la mezcla obtenida sea homogénea.",
        equipoContents: [
          "Contenedores (resistentes para soportar altas temperaturas)",
          "Equipo de protección personal",
          "Pala",
          "Espátula",
          "Termómetro",
          "Máquina de extracción",
        ],
        reference:
          "M-MMP-4-05-032/21 MÉTODOS DE MUESTREO Y PRUEBAS DE MATERIALES, CAPITULO: 032. Muestreo de Mezclas Asfálticas.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Muestreo de Asfalto",
        title2: "¿Cómo se realiza el muestreo de mezcla asfáltica?",
        text: "La porción de muestra representativa se toma directamente de la capa tendida con mezcla asfáltica sin compactar en diferentes sitios, siendo tres porciones diferentes, utilizando la protección necesaria y cuidando que la muestra obtenida sea homogénea. La cantidad dependerá del número de pruebas que se deseen realizar y de acuerdo al tamaño nominal del agregado.",
        reference:
          "M-MMP-4-05-032/21 MÉTODOS DE MUESTREO Y PRUEBAS DE MATERIALES, CAPITULO: 032. Muestreo de Mezclas Asfálticas.",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: true,
        image: "/images/concrete.jpg",
        title1: "Contenido de Asfalto",
        title2: "¿Qué es el contenido de asfalto?",
        text: "Es el porcentaje de cemento asfaltico o residuo asfaltico que contiene el diseño de una mezcla asfáltica, el cual se puede obtener mediante extracción por centrifugado.",
        equipoContents: [
          "Rotarex",
          "Cucharón",
          "Balanza",
          "Estufa / Horno",
          "Papel filtro",
          "Recipientes",
        ],
        reference:
          "M-MMP-4-05-049/15 MÉTODOS DE MUESTREO Y PRUEBAS DE MATERIALES . CAPITULO: 049. Contenido de Cemento o Residuo Asfaltico en Mezclas Asfálticas mediante Extracción por Centrifugado.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Contenido de Asfalto",
        title2:
          "¿Cómo se realiza la prueba para obtener el contenido asfaltico?",
        text: "Se calienta la porción de mezcla asfáltica a una temperatura de 110 ± 5 °C en un tiempo necesario para que la muestra se suavice y así eliminar el contenido de agua revolviendo constantemente, posteriormente la muestra se coloca en el tazón del aparato donde se  realizará la extracción por centrifugado, agregando disolvente y dejándolo actuar en un tiempo no mayor a 1 h. Se retira el material del equipo, junto con el papel filtro (se deja secar para recuperar las partículas de material pétreo), la muestra se pone a secar en horno y/o estufa mediante baño a vapor para la volatilización del disolvente, registrando los pesos y las cantidades de solución agregadas, para proceder con los respectivos cálculos.",
        reference:
          "M-MMP-4-05-049/15 MÉTODOS DE MUESTREO Y PRUEBAS DE MATERIALES . CAPITULO: 049. Contenido de Cemento o Residuo Asfaltico en Mezclas Asfálticas mediante Extracción por Centrifugado.",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: true,
        image: "/images/concrete.jpg",
        title1: "Permeabilidad",
        title2: "¿Qué es la prueba de permeabilidad?",
        text: "Es un método de ensayo que nos permite determinar si una carpeta asfáltica cumple con las condiciones de permeabilidad requeridas. La permeabilidad se define como la capacidad que tiene el material de permitir el paso del flujo del agua; la presencia de agua en la carpeta puede provocar desgaste u ocasionar un fenómeno conocido como stripping, es decir, la separación de los agregados pétreos con el cemento asfaltico.",
        equipoContents: [
          "Aro para permeabilidad",
          "Cono para permeabilidad",
          "Probetas graduadas",
          "Sellador",
          "Brocha",
          "Cronómetro",
        ],
        reference: "",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Permeabilidad",
        title2:
          "¿Cómo se realiza la prueba de permeabilidad en la carpeta asfáltica?",
        text: "Se selecciona la superficie (carpeta asfáltica de rodadura) y se procede a limpiar la zona con una brocha en caso de que se encuentre alguna basura. Se coloca el aro de lámina en posición horizontal, cubriendo el exterior del aro para obstruir las oquedades, se coloca en el centro del aro el cono para proceder a vaciar agua en el interior con una probeta hasta cubrir el cono y se da inicio al cronometro, agregando el agua necesaria (medida) durante 10 minutos; posteriormente al haberse completado el lapso de tiempo, se procede con los cálculos correspondientes.",
        reference: "",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: true,
        image: "/images/concrete.jpg",
        title1: "Desgaste de los Ángeles",
        title2: "¿Qué es el desgaste de los Ángeles?",
        text: "Esta prueba nos permite determinar la dureza de los materiales pétreos, en otras palabras, obtener la resistencia a la abrasión (trituración) de los materiales que son empleados en las mezclas asfálticas.",
        equipoContents: [
          "Máquina de abrasión Los Ángeles",
          "Esferas de acero diámetro 47.6 mm",
          "Charolas",
          "Tamices ",
          "Horno Balanza",
        ],
        reference:
          "ASTM C 131 Standard Test Method for Resistance to Degradation of Small-Size Coarse Aggregate by Abrasion and Impact in the Los Angeles Machine / NMX-C-196-ONNCCE Industria de la Construcción-Agregados-Resistencia a la Degradación por Abrasión E Impacto de Agregado Grueso Usando la Maquina de los Ángeles.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Desgaste de los Ángeles",
        title2:
          "¿Cómo se realiza la prueba de los Ángeles en los materiales pétreos?",
        text: "Se toma una porción de la muestra obtenida por cuarteo, se determina el peso volumétrico del material seco suelto y su composición granulométrica. Posteriormente se criba por el tamiz No. 12 y se lavan las partículas retenidas en el tamiz (es secada al horno), de acuerdo a la granulometría (Diferentes tamices) obtenida se determina el número de esferas a utilizar. Se coloca la muestra en el interior de la maquina con la carga abrasiva haciéndola funcionar con una velocidad uniforme de 30 a 33 revoluciones por minuto hasta completar las 500 revoluciones, posteriormente la muestra se coloca en charolas para ser cribada por el tamiz No. 12 y se procede a realizar los cálculos correspondientes.",
        reference:
          "ASTM C 131 Standard Test Method for Resistance to Degradation of Small-Size Coarse Aggregate by Abrasion and Impact in the Los Angeles Machine / NMX-C-196-ONNCCE Industria de la Construcción-Agregados-Resistencia a l​​a Degradación por Abrasión E Impacto de Agregado Grueso Usando la Maquina de los Ángeles.",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: true,
        image: "/images/concrete.jpg",
        title1: "Determinación de la viscosidad",
        title2: "¿Qué es la viscosidad?",
        text: "La viscosidad es una propiedad física de los fluidos, que permite determinar el estado de fluidez o consistencia, en este caso del asfalto. Para obtener la viscosidad, comúnmente el asfalto es sometido a altas temperaturas para que este sea lo suficientemente fluido. Actualmente existen varios métodos de ensayo para poder determinarla, entre ellos se encuentra la viscosidad Cinemática, viscosidad Saybolt-Furol y viscosidad rotacional Brookfield, en este caso se explicará de manera breve el procedimiento mediante el método Saybolt-Furol.",
        equipoContents: [
          "Viscosímetro",
          "Matraz",
          "Termómetro",
          "Cronometro",
          "Vaso precipitado",
          "Estufa",
        ],
        reference:
          "ASTM D88 Standard Test Method for Saybolt. M·MMP·4·05·004/00 MÉTODOS DE MUESTREO Y PRUEBA DE MATERIALES. CAPÍTULO: 004. Viscosidad Saybolt-Furol en Materiales Asfalticos.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Determinación de la viscosidad",
        title2: "¿Cómo se determina la oscuridad?",
        text: "El equipo debe estar limpio y libre de cualquier materia. Para el caso de las emulsiones asfálticas se utilizan temperaturas estándar de 25 °C y 50 °C . Se calienta el vaso precipitado con emulsión (350mm aproximadamente) durante 30 minutos agitando con movimientos circulares para evitar la formación de burbujas hasta que este alcance la temperatura deseada.  Posteriormente la muestra se pasa a través de la malla no.20 y se coloca en el viscosímetro, cuidando que la temperatura del equipo y la muestra sea la misma y constante. Se coloca el matraz y se destapa el corcho y se toma el tiempo mientras el líquido cae en el matraz hasta llegar al aforo.",
        reference:
          "ASTM D88 Standard Test Method for Saybolt. M·MMP·4·05·004/00 MÉTODOS DE MUESTREO Y PRUEBA DE MATERIALES. CAPÍTULO: 004. Viscosidad Saybolt-Furol en Materiales Asfalticos.",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: true,
        image: "/images/concrete.jpg",
        title1: "Partículas Alargadas y Lajeadas",
        title2: "¿De qué trata las partículas alargadas y lajeadas?",
        text: "Es un método de ensayo que nos permite conocer la forma que tienen las partículas y determinar el porcentaje de partículas alargadas o lajeadas en los materiales pétreos, ya que estas influyen en la compactación y trabajabilidad de la mezcla asfáltica.",
        equipoContents: [
          "Juego de mallas (3/8’’,1/2‘’, ¾’’,1’’,1½’’, 2’’, 2 ½’’,3’’, 3 ½’’, 4’’, 4 ½’’, 5’’ y 6’’)",
          "Balanza",
          "Calibrador de longitudes",
          "Calibrador de espesores",
          "Recipientes ",
        ],
        reference:
          "ASTM D4791 Standard Test Method for Flat Particles Elongated Particles, or Flat and Elongated Particles in Coarse Aggregate. M-MMP-4-04-005/08 MÉTODO D MUESTREO Y PRUEBA DE MATERIALES. CAPITULO: 005. Partículas Alargadas y Lajeadas de Materiales Pétreos para Mezclas Asfálticas.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Partículas alargadas y lajeadas",
        title2: "¿Cuál es su procedimiento?",
        text: "La porción de muestra representativa se obtendrá de acuerdo al método por cuarteo. En el caso de las partículas con forma alargada, de acuerdo a la porción (número de partículas retenidas en las mallas), se verifica que las piezas pasen por la ranura del calibrador de longitudes y se determina la masa de todas las partículas que pasen. Para las partículas lajeadas (aplanadas), se clasifica de acuerdo a las mallas y el retenido de cada malla se verifica que cada pieza pase por la ranura de espesores, buscando la posición adecuada y se determina la masa de todas las partículas que hayan pasado por el ranurador, finalmente se calculan los porcentajes de las partículas con forma alargada y lajeada.",
        reference:
          "ASTM D4791 Standard Test Method for Flat Particles Elongated Particles, or Flat and Elongated Particles in Coarse Aggregate. M-MMP-4-04-005/08 MÉTODO D MUESTREO Y PRUEBA DE MATERIALES. CAPITULO: 005. Partículas Alargadas y Lajeadas de Materiales Pétreos para Mezclas Asfálticas.",
      },
    ],
  },
];

const Asfalto = () => {
  return (
    <main>
      <HeroImage
        image="/images/AsfaltoHero.jpeg"
        pageName="PRUEBAS EN LABORATORIO DE ASFALTO"
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

export default Asfalto;
