import type { Metadata } from "next";

import HeroImage from "@/components/ContentFormat/HeroFormat/HeroImage/HeroImage";
import Pagination from "@/components/ContentFormat/Pagination/Pagination";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Concreto",
};

const contents = [
  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: true,
        image: "/images/Concreto-InSitu1.jpeg",
        title1: "NMX-C-161-ONNCCE-2013 - Muestreo",
        title2: "¿Cómo se obtiene una muestra de concreto fresco?",
        text: "Consiste en obtener una porción representativa de mezcla de concreto fresco homogénea, ya sea en planta, en obra o que provenga de mezcladoras estacionarias. La toma de muestra deberá ser de volumen suficiente para realizar las pruebas necesarias.",
        equipoContents: [
          "Carretilla / cubeta / charola (capacidad no menor a 15 L, impermeable y no reactivo con el concreto)",
          "Cucharon (impermeable con una capacidad y forma adecuada)",
        ],
        materialContents: [
          "Cubierta / franela (con dimensiones adecuadas para cubrir la muestra)",
        ],
        reference:
          "NMX-C-161-ONNCCE-2013 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO FRESCO – MUESTREO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-InSitu2.jpeg",
        title1: "NMX-C-161-ONNCCE-2013 - Muestreo",
        title2: "¿Cómo se obtiene una muestra de concreto fresco?",
        text: "La muestra de concreto en ensayo fresco plástico, se toma hasta que la mezcla este totalmente homogénea y se divide según la forma de entrega en el sitio, ya sea en mezcladoras estacionarias, pavimentadoras, en planta pre-mezcladora o en obra en un periodo menor a 15 min; en el caso del muestreo en obra, se considera tomar entre el 15% y el 85% interceptando la descarga de la unidad controlando la velocidad con el número de revoluciones de la olla, además se debe de asegurar que sea superior al volumen requerido para mantener la uniformidad de la mezcla. Durante el transporte, la muestra deberá ser protegida de la contaminación, lluvia, sol, viento, evaporación y dependiendo de las condiciones ambientales, se puede realizar la prueba de temperatura al concreto fresco de acuerdo a la NMX-C-435-ONNCCE-2010.",
        reference:
          "NMX-C-161-ONNCCE-2013 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO FRESCO – MUESTREO",
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
        image: "/images/Concreto-InSitu3.jpeg",
        title1: "NMX-C-156-ONNCCE-2013 - Revenimiento",
        title2: "¿Qué es el revenimiento?",
        text: "Es un método que permite determinar la consistencia o fluidez del concreto hidráulico en estado fresco en términos de disminución de altura. Esta prueba no aplica para concretos con un tamaño máximo nominal (TMN) mayor a 50 mm en obra.",
        equipoContents: [
          "Cono de revenimiento (no absorbente)",
          "Base para cono de revenimiento",
        ],
        materialContents: [
          "Varilla recta lisa (extremo semiesférico)",
          "Flexómetro",
          "Guantes impermeables",
          "Escala",
          "Cucharón",
        ],
        reference:
          "NMX-C-156-ONNCCE-2010 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO HIDRÁULICO - DETERMINACIÓN DEL REVENIMIENTO EN EL CONCRETO FRESCO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-InSitu4.jpeg",
        title1: "NMX-C-156-ONNCCE-2013 - Revenimiento",
        title2: "¿Cómo se realiza la prueba de revenimiento?",
        text: "Seguidamente de haber obtenido la muestra representativa de concreto hidráulico, se asegura que la mezcla esté totalmente homogenizada para garantizar la uniformidad del concreto fresco. Se procede a colocar la base rígida con superficie plana de manera que está quede nivelada, se humedece el molde y se coloca sobre la superficie plana horizontal, el operador deberá mantener firme el molde de manera que apoye los pies en los estribos del mismo con el propósito de llenar 3 capas de aproximadamente el mismo volumen, cada capa será compactada con 25 penetraciones, introduciendo la varilla en la capa inferior 2 cm de acuerdo a lo especificado en la NMX-C-156-ONNCCE-2010, después de haber compactado la última capa se enrasa el concreto, retirando el excedente y se  levanta el molde de manera vertical sin interrupción. El revenimiento deberá medirse como una diferencia de alturas, desde la base superior del molde hacia el centro desplazado de la superficie del espécimen.",
        reference:
          "NMX-C-156-ONNCCE-2010 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO HIDRÁULICO - DETERMINACIÓN DEL REVENIMIENTO EN EL CONCRETO FRESCO",
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
        image: "/images/GeotecniaAnalysis4.jpeg",
        title1: "NMX-C-159-ONNCCE-2016 - Elaboración de especímenes",
        title2: "¿De qué trata la elaboración de especímenes?",
        text: "Es un procedimiento donde se elaboran especímenes de concreto que no exceden el tamaño especificado (t.m.n. a 50 mm) y permitiendo que la mezcla sea compactada por medio de varillado.",
        equipoContents: [
          "Moldes de material no absorbente (cúbicos, cilíndricos y prismáticos)",
          "Varillas (extremo semiesférico)",
        ],
        materialContents: [
          "Cucharón",
          "Mazo con cabeza de hule",
          "Enrasador",
          "Cubierta impermeable",
          "Nivel",
        ],
        reference:
          "NMX-C-159-ONNCCE-2016 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO – ELABORACIÓN Y CURADO DE ESPECÍMENES DE ENSAYO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-InSitu6.jpeg",
        title1: "NMX-C-159-ONNCCE-2016 - Elaboración de especímenes",
        title2: "¿Cómo se elaboran los especímenes de concreto hidráulico?",
        text: "Los moldes se colocan en una superficie plana rígida y horizontal, que no esté sujeta a vibraciones, con el propósito de compactarlo en capas del mismo espesor según el método especificado en la Norma NMX-C-159-ONNCCE-2016, de esta forma se varilla cada capa, aproximadamente 20 mm de la capa inferior, se golpea con un mazo de hule en las paredes del molde hasta que se enrase la superficie.",
        reference:
          "NMX-C-159-ONNCCE-2016 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO – ELABORACIÓN Y CURADO DE ESPECÍMENES DE ENSAYO",
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
        image: "/images/Concreto-InSitu8.jpg",
        title1:
          "NMX-C-162-ONNCCE-2014 -Contenido de aire del concreto fresco por el método gravimétrico",
        title2: "¿Qué es el contenido de aire?",
        text: "Es un procedimiento que permite obtener el contenido de aire del concreto fresco, es decir, el aire incluido o contenido de vacíos de la mezcla de concreto, para determinar su masa unitaria y el cálculo del rendimiento.",
        equipoContents: [
          "Vibrador de inmersión",
          "Bascula",
          "Mazo de goma",
          "Recipiente",
          "Placa para enrasar",
          "Placa de verificación",
        ],
        materialContents: [
          "Cucharón",
          "Agua destilada o potable",
          "Recipiente no absorbent",
        ],
        reference:
          "NMX-C-162-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO HIDRÁULICO - DETERMINACIÓN DE LA MASA UNITARIA, CÁLCULO DEL RENDIMIENTO Y CONTENIDO DE AIRE DEL CONCRETO FRESCO POR EL MÉTODO GRAVIMÉTRICO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-InSitu7.jpg",
        title1:
          "NMX-C-162-ONNCCE-2014 - Contenido de aire de concreto fresco por el método gravimétrico",
        title2: "¿Cómo se realizan las pruebas de contenido de aire?",
        text: "Se humedece el recipiente y se coloca la muestra en el mismo en tres capas, cada capa se compacta con la varilla penetrando uniformemente, se golpea el recipiente con el mazo de goma y posteriormente se enrasa, siguiendo el proceso de revenimiento. Si es por medio de vibración interna se deberá llenar el recipiente en dos capas y se inserta el vástago del vibrador en tres diferentes puntos sin tocar los lados del recipiente, el vibrado será el necesario dependiendo de la trabajabilidad del concreto, teniendo cuidado al quitar el vástago para no generar burbujas, por último, se coloca la placa para enrasar a dos tercios de la superficie de concreto haciendo presión deslizándola hasta que la placa quede fuera del recipiente como lo indica la NMX-C-162-ONNCCE-2014. Deben vibrarse los concretos con revenimientos menores a 30 mm.",
        reference:
          "NMX-C-162-ONNCCE-2014 INDUSTRIA D E LA CONSTRUCCIÓN – CONCRETO HIDRÁULICO - DETERMINACIÓN DE LA MASA UNITARIA, CÁLCULO DEL RENDIMIENTO Y CONTENIDO DE AIRE DEL CONCRETO FRESCO POR EL MÉTODO GRAVIMÉTRICO",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: false,
        image: "/images/Concreto-InSitu9.jpg",
        title1: "Prueba de carga",
        title2: "¿Qué es la prueba de carga? ",
        text: "Este ensayo se realiza en las estructuras previas a su funcionamiento, para verificar si se cumple con los requisitos de normatividad o bien cuando se tiene alguna duda sobre la resistencia de la estructura, estas pruebas permiten verificar si la edificación se ha hecho de manera satisfactoria, dichas pruebas suelen realizarse en edificios deportivos, centros de reunión y en todas las construcciones donde hay aglomeración de personas.",
        reference:
          "NORMAS TÉCNICAS COMPLEMENTARIAS DE LA LEY DE EDIFICACIONES DEL ESTADO DE BAJA CALIFORNIA, DE SEGURIDAD ESTRUCTURAL EN MATERIA DE ‘’CRITERIOS Y ACCIONES DE DISEÑO ESTRUCTURAL’’ / Conde Requirements for Load Testing of Existing Concrete Structures (ACI 437.2-13)",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-InSitu10.jpg",
        title1: "Prueba de carga",
        title2: "¿Cómo se realiza las prueba de carga?",
        text: "Se prepara el sitio donde se instalan los deformímetros y se colocan en ceros cada uno de los marcadores antes de comenzar la prueba. Se procede a colocar la carga que deberá ser igual al 85% de la propuesta de diseño, la carga se deja actuando sobre la estructura por 24 horas, cuidando la seguridad de las personas y la protección del resto de la estructura. Se determina que la estructura ha fallado si se presentan fallas locales o algún incremento en desplazamientos y deformación en la estructura. En caso de que la estructura no muestre un comportamiento de recuperación mínima del 75% de sus deflexiones, se tendrá que repetir la prueba después de 72 hrs de haberse realizado la primera.",
        reference:
          "NORMAS TÉCNICAS COMPLEMENTARIAS DE LA LEY DE EDIFICACIONES DEL ESTADO DE BAJA CALIFORNIA, DE SEGURIDAD ESTRUCTURAL EN MATERIA DE ‘’CRITERIOS Y ACCIONES DE DISEÑO ESTRUCTURAL’’  / Conde Requirements for Load Testing of Existing Concrete Structures (ACI 437.2-13)",
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
        image: "/images/Concreto-InSitu12.jpeg",
        title1: "NMX-C-192-ONNCCE-2018 - Esclerómetro (Schimidt Hammer)",
        title2: "¿Qué es el esclerómetro?",
        text: "El esclerómetro es un instrumento de medición empleado para realizar pruebas no destructivas en concreto, generalmente para determinar la uniformidad de elementos de concreto o para indicar cambios en las características del mismo, ya sea en columnas, muros, losas, etc. Este método puede ser utilizado para evaluar la resistencia del concreto a manera comparativa, sin embargo, no debe de ser utilizado como alternativa para obtener la resistencia a compresión del concreto, ya que solo será utilizado como un indicador referencial.",
        equipoContents: ["Esclerómetro"],
        materialContents: ["Cepillo", "Brocha", "Franela"],
        reference:
          "ASTM-C 805 Standard Test Method for Rebound Number of Hardened Concrete / Método de prueba estándar para rebote número de hormigón endurecido / NMX-C-192-ONNCCE-2018 INDUSTRIA DE LA CONSTRUCCIÓN-CONCRETO-DETERMINACIÓN DEL NÚMERO DE REBOTE UTILIZANDO EL DISPOSITIVO CONOCIDO COMO ESCLERÓMETRO-MÉTODO DE ENSAYO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-InSitu11.jpeg",
        title1:
          "NMX-C-192-ONNCCE-2018 -  Número de rebote del concreto con el esclerómetro",
        title2: "¿Cómo se realizan las pruebas con el esclerómetro?",
        text: "Para la realización de la prueba se despeja la superficie que se desea analizar, deberá estar libre de pintura, polvo o cualquier otro elemento y/o material que cubra la superficie de concreto. En el caso de las superficies que presenten irregularidades o concretos viejos, se debe quitar parte de la capa superficial, lo necesario para realizar la prueba.  Se coloca el esclerómetro (Martillo Schmidt) en el área a evaluar de manera perpendicular sobre la superficie ejerciendo presión, hasta obtener el impacto con el martillo, posteriormente es necesario presionar el botón lateral del esclerómetro para bloquear el émbolo, después del impacto se registra la lectura como número o índice de rebote al menos 10 de cada área de prueba. En el caso de los concretos secos se tienen resultados de índice de rebote más alto que los húmedos.",
        reference:
          "ASTM-C 805 Standard Test Method for Rebound Number of Hardened Concrete / Método de prueba estándar para rebote número de hormigón endurecido / NMX-C-192-ONNCCE-2018 INDUSTRIA DE LA CONSTRUCCIÓN-CONCRETO-DETERMINACIÓN DEL NÚMERO DE REBOTE UTILIZANDO EL DISPOSITIVO CONOCIDO COMO ESCLERÓMETRO-MÉTODO DE ENSAYO",
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
        image: "/images/Concreto-InSitu14.jpeg",
        title1: "NMX-C-169-ONNCCE-2009 - Extracción de núcleos",
        title2: "¿Qué es la extracción de núcleos?",
        text: "Son perforaciones que se realizan en los elementos de concreto, con el fin de obtener uno o varios especímenes para analizar en laboratorio, estas extracciones consisten en vigas y núcleos de concreto o también llamado corazón, se realiza a partir de estructuras existentes, con el fin de realizar pruebas de compresión, tensión y flexión.",
        equipoContents: [
          "Máquina para la extracción de corazones",
          "Cortadora para espécimen de concreto (vigas)",
          "Escala graduada",
        ],
        materialContents: ["Marcador indeleble", "Pinzas", "Franela"],
        reference:
          "NMX-C-169-ONNCCE-2009 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO – EXTRACCIÓN DE ESPECÍMENES CILÍNDRICOS O PRISMÁTICOS DE CONCRETO HIDRÁULICO ENDURECIDO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-InSitu13.jpeg",
        title1: "NMX-C-169-ONNCCE-2009 - Extracción de núcleos",
        title2: "¿Cómo se realizan las pruebas de extracción de núcleos?",
        text: "Para realizar la extracción se deberá cumplir con la edad suficiente y la toma de muestra será de acuerdo a lo que se requiera, para el caso de la extracción de núcleos de concreto (corazones), el equipo deberá considerar la extracción de manera perpendicular a la superficie retirado de cualquier elemento que pueda afectar a la broca de la máquina, alejado de juntas de colado y aristas. Para las muestras que se utilicen en el ensayo de compresión, se tendrán que considerar tres veces el TMN (tamaño máximo nominal) del agregado.  Para vigas, se utiliza una cortadora con disco de corona de diamantes con las dimensiones adecuadas, la sierra deberá contar con un sistema de enfriamiento para no generar algún impacto o alteración en el concreto. Para el curado de la muestra extraída, previamente se corta 10 mm de la muestra que se considere dañada, donde se debe curar en seco por 7 días para proceder a sumergirlo en agua con cal de acuerdo a la NMX-C-148-ONNCCE por 40 horas mínimo, antes de someterlos a su ensayo húmedo.",
        reference:
          "NMX-C-169-ONNCCE-2009 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO – EXTRACCIÓN DE ESPECÍMENES CILÍNDRICOS O PRISMÁTICOS DE CONCRETO HIDRÁULICO ENDURECIDO",
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
        image: "/images/Concreto-InSitu161.jpg",
        title1: "Pachometría",
        title2: "¿Qué es el ensayo con el pachómetro?",
        text: "Es una prueba no destructiva, que permite detectar tuberías de plástico, cables de corriente y los elementos metálicos que se encuentran ocultos en algún material sin causar daño; con este equipo se puede determinar la ubicación de las varillas, el diámetro y el espesor de la capa de recubrimiento.",
        equipoContents: ["Pachómetro"],
        materialContents: ["Marcador"],
        reference: "",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-InSitu151.jpg",
        title1: "Pachometría",
        title2: "¿Cómo se realiza el ensayo con el Pachómetro?",
        text: "Se sobrepone el equipo en la zona transversalmente a la superficie y se comienza a realizar el barrido a 90 grados manteniendo un movimiento uniforme dentro del mismo plano, una vez escaneada la superficie, se realiza el mismo proceso de regreso, marcando las lecturas de los elementos detectados.",
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
        title1: "NMX-C-083-ONNCCE-2014 - Ensayo a compresión",
        title2: "¿Qué es un ensayo a compresión?",
        text: "Son pruebas mecánicas que permiten determinar la resistencia a compresión, es decir, la capacidad que tendrá el concreto de soportar una carga o esfuerzo, esta prueba también suele ser utilizada para medir el desempeño del concreto y los resultados generalmente son expresados en esfuerzo kg/cm2 o MPa.",
        equipoContents: ["Prensa de compresión"],
        reference:
          "ASTM C39 / C39M Standard Test Method for Compressive Strengh of Cylindrical Concrete Specimens / NMX-C-083-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO – DETERMINACIÓN DE LA RESISTENCIA A LA COMPRESIÓN DE ESPECÍMENES – MÉTODO DE ENSAYO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "NMX-C-083-ONNCCE-2014 - Ensayo a compresión",
        title2: "¿Cómo se realiza el ensaye a compresión?",
        text: "La máquina de compresión deberá estar limpia y las placas superior e inferior deberán estar alineadas. Una vez que el espécimen se encuentre listo para ensayar, se colocará sobre la placa base de la prensa de manera que este quede al centro del bloque, posteriormente se aplicará carga al espécimen con una velocidad continua sin producir impacto.",
        reference:
          "ASTM C39 / C39M Standard Test Method for Compressive Strengh of Cylindrical Concrete Specimens / NMX-C-083-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO – DETERMINACIÓN DE LA RESISTENCIA A LA COMPRESIÓN DE ESPECÍMENES – MÉTODO DE ENSAYO",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "NMX-C-191-ONNCCE-2015 - Ensayo de flexión",
        title2: "¿Qué es un ensayo de flexión?",
        text: "Es un método que permite determinar la resistencia de tensión o el esfuerzo máximo que puede soportar el espécimen de concreto (viga); la resistencia a la flexión es expresada como Modulo de Rotura (MR). Este método es utilizado comúnmente como requisito de control de calidad en campo, ya sea para la aceptación del concreto, así como para el diseño de losas y pavimentos.",
        reference:
          "ASTM C78 / C78M Standard Test Method for Flexural Strength of Concrete / NMX-C-191-ONNCCE-2015 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO DETERMINACIÓN DE LA RESISTENCIA A LA FLEXIÓN DEL CONCRETO USANDO UNA VIGA SIMPLE CON CARGA EN LOS TERCIOS DEL CLARO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "NMX-C-191-ONNCCE-2015 -Ensayo de flexión",
        title2: "¿Cómo se realiza el ensayo de flexión?",
        text: "Se deberá adaptar a la máquina de prueba un dispositivo que sea capaz de aplicar carga a los tercios del claro de la viga, esto con el fin de que la fuerza se aplique de manera perpendicular y uniformemente en las caras del elemento; el espécimen deberá ser manipulado con cuidado para que este no se dañe, se lija la superficie del espécimen, cuidando que el lijado sea mínimo para que no afecte los resultados, en caso de no ser lijado se utilizará cuero.  La carga se aplicará con una velocidad uniforme sin exceder los 10 kgf/cm2.",
        reference:
          "ASTM C78 / C78M Standard Test Method for Flexural Strength of Concrete / NMX-C-191-ONNCCE-2015 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO DETERMINACIÓN DE LA RESISTENCIA A LA FLEXIÓN DEL CONCRETO USANDO UNA VIGA SIMPLE CON CARGA EN LOS TERCIOS DEL CLARO",
      },
    ],
  },

  {
    tabTitles: ["Descripción", "Procedimiento"],
    tabCount: 2,
    tabContents: [
      {
        id: 1,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "NMX-C-148-ONNCCE-2016 - Curado de especímenes",
        title2: "¿Qué es el curado en especímenes de concreto?",
        text: "El curado es el proceso mediante el cual, el cemento hidráulico endurecido cuenta con las condiciones ambientales de temperatura y humedad necesarias para su hidratación. La hidratación permite que el agua entre en reacción química de manera exotérmica, es decir, aquella que permite liberar calor; La hidratación del cemento ayudará a que, el concreto desarrolle su resistencia potencial.",
        reference:
          "NMX-C-148-ONNCCE-2016 INDUSTRIA DE LA CONSTRUCCIÓN – CEMENTOS Y CONCRETOS HIDRÁULICOS – GABINETES, CUARTOS HÚMEDOS Y TANQUES DE ALMACENAMIENTO – CONDICIONES DE DISEÑO Y OPERACIÓN / NMX-C-159-ONNCCE-2016 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO – ELABORACIÓN Y CURADO DE ESPECÍMENES DE ENSAYO",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "NMX-C-148-ONNCCE-2016 Curado de especímenes",
        title2: "¿Cómo se curan los especímenes de concreto?",
        text: "Una vez elaborados los especímenes, se cubren al instante para evitar la evaporación, deberán ser protegidos de cambios bruscos de temperatura, serán descimbrados preferentemente entre las 20 horas y 48 horas después de su elaboración. Existen varios métodos para el curado de los especímenes de concreto, entre ellos se encuentra el curado por inmersión, que consiste en piletas o tanques de almacenamiento con agua, deberán contar con la temperatura y dimensiones adecuadas que permitan que los especímenes estén saturados. Por otro lado, se tienen los cuartos o cámaras húmedas, estas son habitaciones cerradas que mantienen la temperatura y la humedad relativa adecuada. El cuarto está constituido por materiales impermeables, herméticos y además cuentan con rociadores de aire-agua. El gabinete de niebla o húmedo, es un compartimiento capaz de mantener la humedad y la temperatura controlada, deberá estar diseñado para evitar fugas de humedad y tener cortinas de agua que no estén dirigidas a los especímenes para lograr tener una humedad relativa.",
        reference:
          "NMX-C-148-ONNCCE-2016 INDUSTRIA DE LA CONSTRUCCIÓN – CEMENTOS Y CONCRETOS HIDRÁULICOS – GABINETES, CUARTOS HÚMEDOS Y TANQUES DE ALMACENAMIENTO – CONDICIONES DE DISEÑO Y OPERACIÓN / NMX-C-159-ONNCCE-2016 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO – ELABORACIÓN Y CURADO DE ESPECÍMENES DE ENSAYO",
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
        image: "/images/Concreto-LabAcero23.jpeg",
        title1: "NMX-C-407-ONNCCE-2001 -  Ensayo de tensión",
        title2: "¿Qué es un ensayo de tensión?",
        text: "Es un método que nos permite conocer la resistencia mecánica del acero por medio de una máquina de prueba para tensión, donde se aplica un esfuerzo tensor a la probeta, la cual nos proporciona información del comportamiento que tendrá el material, es decir, resistencia máxima, esfuerzo de fluencia y ductilidad (alargamiento de rotura y estricción de rotura). Finalmente, los resultados son graficados en una curva esfuerzo – deformación.",
        equipoContents: [
          "Máquina para prueba de tensión",
          "Aditamentos para juste de mordazas",
          "Mordazas en V",
        ],
        reference:
          "NMX-C-407-ONNCCE-2001INDUSTRIA DE LA CONSTRUCCIÓN-VARILLA CORRUGADA DE ACERO PROVENIENTE DE LINGOTE Y PALANQUILLA PARA REFUERZO DE CONCRETO-ESPECIFICACIONES Y MÉTODOS DE PRUEBA / ASTM A370 Standard Test Methods and Definitions for Mechanical Testing of Steel Products / NMX-B-072-CANACERO-2013 INDUSTRIA SIDERÚRGICA. VARILLA CORRUGADA DE ACERO GRADO 60, LAMINADA EN FRIO PARA REFUERZO DE CONCRETO. ESPECIFICACIONES Y MÉTODOS DE PRUEBA.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-LabAcero24.png",
        title1: "NMX-C-407-ONNCCE-2001 - ​Ensayo de tensión",
        title2: "¿Cómo se realiza el ensayo de tensión?",
        text: "La probeta seleccionada para muestreo llevará una etiqueta de identificación con los datos de la varilla, fecha y ubicación de la obra. Antes de iniciar con el ensayo se pesa la probeta y se mide hacia el centro de la longitud calibrada para calcular el área transversal en la zona reducida, esto con el fin de determinar los valores de resistencia. Se coloca la probeta en la máquina de tensión sujetándola con las mordazas y se comienza aplicar carga, después de que se han separado los cabezales, la velocidad no deberá exceder de 13 mm/min para aceros de grado 30, 42 y 52. Cuando alcance la resistencia a tensión, la velocidad de la separación de los cabezales no debe excederse de 102 mm/min, el ensayo termina con la rotura de la probeta.",
        reference:
          "NMX-C-407-ONNCCE-2001INDUSTRIA DE LA CONSTRUCCIÓN-VARILLA CORRUGADA DE ACERO PROVENIENTE DE LINGOTE Y PALANQUILLA PARA REFUERZO DE CONCRETO-ESPECIFICACIONES Y MÉTODOS DE PRUEBA / ASTM A370 Standard Test Methods and Definitions for Mechanical Testing of Steel Products / NMX-B-072-CANACERO-2013 INDUSTRIA SIDERÚRGICA. VARILLA CORRUGADA DE ACERO GRADO 60, LAMINADA EN FRIO PARA REFUERZO DE CONCRETO. ESPECIFICACIONES Y MÉTODOS DE PRUEBA.",
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
        image: "/images/Concreto-LabAcero26.png",
        title1: "NMX-C-407-ONNCCE-2001 - Ensayo de doblez",
        title2: "¿Qué es un ensayo de doblez?",
        text: "Es un procedimiento que nos permite evaluar la calidad y el comportamiento que tendrá el acero, conocer sus propiedades mecánicas, como lo es la ductilidad, tenacidad y dureza. Se realiza por medio de la aplicación de cargas, generando un esfuerzo de doblez (flexión) en la probeta a 180° en forma de U.",
        equipoContents: [
          "Mandril cilíndrico",
          "Dispositivo de flexión o máquina de flexión",
        ],
        reference:
          "NMX-C-407-ONNCCE-2001INDUSTRIA DE LA CONSTRUCCIÓN-VARILLA CORRUGADA DE ACERO PROVENIENTE DE LINGOTE Y PALANQUILLA PARA REFUERZO DE CONCRETO-ESPECIFICACIONES Y MÉTODOS DE PRUEBA / ASTM E190 Standard Test Method for Guided Bend Test for Ductility of Welds / ASTM E290 Standard Test Methods for Bend Testing of Material for Ductility",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/Concreto-LabAcero25.jpeg",
        title1: "NMX-C-407-ONNCCE-2001 - Ensayo de doblez",
        title2: "¿Cómo se realiza el ensayo de doblez?",
        text: "La longitud de la probeta tendrá un mínimo de 400 mm; para la realización del ensayo, se coloca la probeta sobre dos apoyos y se aplica la carga al centro, el mandril tendrá que estar en contacto con la probeta durante la aplicación de la carga, la cual será manera continua y uniforme hasta generar una curvatura en el elemento.",
        reference:
          "NMX-C-407-ONNCCE-2001INDUSTRIA DE LA CONSTRUCCIÓN-VARILLA CORRUGADA DE ACERO PROVENIENTE DE LINGOTE Y PALANQUILLA PARA REFUERZO DE CONCRETO-ESPECIFICACIONES Y MÉTODOS DE PRUEBA / ASTM E190 Standard Test Method for Guided Bend Test for Ductility of Welds / ASTM E290 Standard Test Methods for Bend Testing of Material for Ductility",
      },
    ],
  },
];

const Concreto = () => {
  return (
    <main>
      <HeroImage
        image="/images/ConcretoHero.jpeg"
        pageName="PRUEBAS EN LABORATORIO DE CONCRETO"
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

export default Concreto;
