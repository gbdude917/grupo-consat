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
        image: "/images/ENSAYOCPT1.jpeg",
        title1: "Ensayo de penetración de cono (CPT)",
        title2: "¿Qué un ensayo de CPT?",
        text: "El ensayo CPT, hace referencia por sus siglas en ingles a Cone Penetration Test, también conocido como ensayo de penetración de cono. Esta prueba permite determinar algunos parámetros dinámicos, perfiles estratigráficos de los suelos, capacidades de carga de la cimentación entre otros. Algunas veces se le agrega el sufijo CPTu que también es conocido como piezocono, cuya diferencia al CPT, es el proceso de hincado para obtener la presión de poros. Registra la resistencia a la penetración de manera más continua estática.",
        equipoContents: [
          "Cono CPT (penetrómetro, tubo reductor de fricción)",
          "Varillas",
          "Máquina perforadora",
        ],
        reference:
          "ASTM D3441 Standard Test Method for Mechanical Cone Penetration Testing of Soils / ASTM D5778 Standard Test Method for Electronic Friction Cone and Piezocone Penetration Testing of Soils.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/ENSAYOCPT2.jpeg",
        title1: "Ensayo de penetración de cono (CPT)",
        title2: "¿Cómo se realiza la prueba de CPT?",
        text: "Consiste en introducir verticalmente a presión en el suelo una punta cónica con instrumental de varillas a una velocidad constante. Al llegar a cierta profundidad de penetración se retira el cono, quedando la barra hueca, la cual contendrá la muestra de suelo, proporcionando información detallada cada 2 cm.",
        reference:
          "ASTM D3441 Standard Test Method for Mechanical Cone Penetration Testing of Soil / ASTM D5778 Standard Test Method for Electronic Friction Cone and Piezocone Penetration Testing of Soils.",
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
        image: "/images/Geologia2.jpeg",
        title1: "Ensayo de penetrómetro dinámico de cono (DCP)",
        title2: "¿Qué es el ensayo DCP?",
        text: "Dynamic Cone Penetration por sus siglas en ingles DCP es una prueba que nos permite determinar la resistencia al corte de suelos antropogénicos e inalterados en sitio, lo que nos ayuda a obtener características del suelo además de poder diferenciar capas o estratos de acuerdo a la resistencia mediante cierto número de golpes. Por otro lado, el ensayo suele ser utilizado en el diseño de pavimentos, pues este se encuentra relacionado con la obtención del CBR en campo por medio de correlaciones.",
        equipoContents: [
          "Yunque",
          "Barra guía",
          "Martillo",
          "Varillaje de 1.0 m",
          "Cono de acero",
        ],
        reference:
          "ASTM D6951 Standard Test Method for Use of the Dynamic Cone Penetrometer in Shallow Pavement Applications.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/ENSAYODCP2.jpeg",
        title1: "Ensayo de penetrómetro dinámico de cono (DCP)",
        title2: "¿Cómo se realiza un ensayo DCP?",
        text: "Se ubica la superficie donde se desea ensayar, de preferencia un lugar donde no se encuentren agregados gruesos, se levanta el martillo hacia la parte superior del equipo para dejarlo caer sobre el eje de la varilla, no se debe golpear de la parte superior, ni dar impulso al martillo hacia abajo. Se mide y se registra la penetración de acuerdo al número de golpes, se recomienda una profundidad máxima de 2 m sin embargo puede ser más. Si después de 5 golpes el dispositivo se desvía 75 mm o no avanza 2 mm, se debe detener la prueba y mover a otro lugar.",
        reference:
          "ASTM D6951 Standard Test Method for Use of the Dynamic Cone Penetrometer in Shallow Pavement Applications.",
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
        image: "/images/Geologia2.jpeg",
        title1: "Sondeo de penetracion estándar (SPT)",
        title2: "¿Qué es un SPT?",
        text: "Se refiere a Standard Penetration Test conocido por sus siglas en ingles SPT, es uno de los sondeos más empleados en la rama de la geotecnia, se utiliza para obtener muestras alteradas de suelo por medio de un muestreador tubular hueco que es introducido 60.0 cm en el terreno con un martinete (63.5 kg) mediante cierto número de golpes (N). Lo que nos permite conocer el perfil estratigráfico, características del suelo, actualmente el valor N, se encuentra relacionado con algunas propiedades mecánicas del suelo (ángulo de fricción interna, la densidad relativa, entre otros). Estas correlaciones suelen tener un mayor funcionamiento en suelos no cohesivos.",
        equipoContents: [
          "Tripié",
          "Motor",
          "Barra guía",
          "Martillo / pesa",
          "Martinete",
          "Tubos o varillas de perforación",
          "Cuerdas",
          "Poleas",
          "Tubo Muestreador",
          "Cabezal",
        ],
        reference:
          "ASTM D6951 Standard Test Method for Use of the Dynamic Cone Penetrometer in Shallow Pavement Applications.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/ENSAYODCP2.jpeg",
        title1: "Sondeo de penetracion estándar (SPT)",
        title2: "¿Cómo se realizan los sondeos de penetración estándar?",
        text: "Se localiza la zona y se procede a retirar el suelo vegetal, con ayuda de una pala se realiza una perforación a un metro de profundidad como punto de partida. Se instala el equipo, el tubo muestreador es colocado dentro de la perforación y se levanta el martillo para asentarlo sobre la guía. Una vez teniendo el tubo en el interior de la perforación se marca en tres divisiones de 15 cm cada una, es decir, 45 cm tomando como referencia el nivel del terreno hacia arriba. Se levanta el martillo y se deja caer sobre la guía hasta lograr la penetración de los 45 cm, se retira el tubo para extraer el material obtenido, se descarta los 15 cm de la parte superficial de la muestra ya que se consideran contaminados, este procedimiento se realiza sucesivamente para los siguientes metros de profundidad deseada.",
        reference:
          "ASTM D6951 Standard Test Method for Use of the Dynamic Cone Penetrometer in Shallow Pavement Applications.",
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
        image: "/images/PCA1.png",
        title1: "Sondeo de pozo a cielo abierto (PCA)",
        title2: "¿Qué es un PCA?",
        text: "Este es uno de los ensayos que forma parte de los estudios geotécnicos, son excavaciones que se pueden realizar a mano y/o con maquinaria, con el fin de obtener el perfil estratigráfico del suelo y tomar muestras representativas alteradas e inalteradas de cada estrato.",
        equipoContents: [
          "Pico",
          "Pala o maquinaria",
          "Flexómetro",
          "Bolsas de plástico",
        ],
        reference:
          "NMX-C-430-ONNCCE-2002 INDUSTRIA DE LA CONSTRUCCIÓN – GEOTECNIA – CIMENTACIONES – SONDEOS DE POZO A CIELO ABIERTO / N - PRY – CAR-1- 02- 003/19 CAPITULO:  003. Exploración Directa del Subsuelo.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/PCA2.jpg",
        title1: "Sondeo de pozo a cielo abierto (PCA)",
        title2: "¿Cómo se realiza un PCA?",
        text: "Consiste en excavar un pozo con las dimensiones necesarias para examinar los diferentes estratos, una vez realizado el PCA, se limpian sus paredes para retirar material contaminante, producto de la excavación. Se ingresa al pozo y con un flexómetro se mide la profundidad del sondeo y se registran los espesores que tendrá cada estrato. Se realiza el muestreo alterado o inalterado, tomando una muestra representativa de cada estrato y etiquetándola con los datos del lugar u obra. La muestra se estudiará en laboratorio.",
        reference:
          "NMX-C-430-ONNCCE-2002 INDUSTRIA DE LA CONSTRUCCIÓN – GEOTECNIA – CIMENTACIONES – SONDEOS DE POZO A CIELO ABIERTO / N - PRY – CAR-1- 02- 003/19 CAPITULO:  003. Exploración Directa del Subsuelo.",
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
        image: "/images/ENSAYOCONOYARENA1.jpeg",
        title1: "Prueba de compactación método de cono y arena",
        title2: "¿Qué es la prueba de compactación?",
        text: "Es un método de ensayo utilizado para determinar el grado de compactación y la masa volumétrica seca de una muestra de suelo. Se realiza en materiales que no tienen fragmentos de roca mayores a los 3.81 cm, este ensayo no es recomendable para suelos orgánicos y saturados, ya que el área excavada puede presentar inestabilidad, provocando derrumbes y deformaciones en las paredes de la excavación.",
        equipoContents: [
          "Cono",
          "Placa para cono",
          "Frasco",
          "Pico",
          "Pala",
          "Flexómetro",
        ],
        materialContents: [
          "Arena sílica",
          "Bolsas de plástico",
          "Charola",
          "Cucharón",
          "Balanza",
          "Brocha",
        ],
        reference:
          "ASTM D1556 Standard Test Method for Density and Unit Weight of Soil in Place by the Sand – Cone Method / NMX-C-511-ONNCCE-2020 Industria de la Construcción – Geotecnia –Determinación de la Masa Volumétrica Seca del Lugar y Grado de Compactación de Materiales Térreos – Método de Ensayo de Cono y Arena.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/ENSAYOCONOYARENA2.jpeg",
        title1: "Prueba de compactación método de cono y arena",
        title2: "¿Cómo se realiza la prueba de compactación?",
        text: "Una vez seleccionada el área donde se va a realizar la prueba, se limpia la superficie y se coloca la placa metálica de manera que no queden vacíos entre el suelo y la placa nivelada a la superficie. Se procede a excavar en el círculo limitado por la placa, la profundidad puede variar entre los 15 y 20 cm dependiendo del tamaño máximo de las partículas. El material extraído se coloca con cuidado en bolsas de plástico procurando evitar pérdidas de humedad (contenido de agua), se pesa y se registra. Por otro lado, se insertará el cono al frasco que contendrá arena sílica, para colocarlo de manera inversa a la placa base metálica. Se abre la válvula para que la arena caiga, hasta que la arena se suspenda, se cierra la válvula para retirar el dispositivo y se pesa la arena remanente para proceder con los cálculos.",
        reference:
          "ASTM D1556 Standard Test Method for Density and Unit Weight of Soil in Place by the Sand – Cone Method / NMX-C-511-ONNCCE-2020 Industria de la Construcción – Geotecnia –Determinación de la Masa Volumétrica Seca del Lugar y Grado de Compactación de Materiales Térreos – Método de Ensayo de Cono y Arena.",
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
        title1: "Ensayo de placa con carga",
        title2: "¿Qué es un ensayo de placa con carga?",
        text: "Es un procedimiento que nos permite obtener la capacidad portante y el asentamiento (deformación) del suelo, dando información a una profundidad que equivale a dos veces el diámetro de la placa, sin embargo, este puede llegar a ser afectado por el contenido de humedad del suelo, es por ello que al realizarse tendrá que ser en un área representativa del lugar, el ensayo suele utilizarse para diseño de losas de cimentación, terraplenes, carreteras, entre otros.",
        equipoContents: [
          "Placa circular rígida o Placa cuadrada",
          "Gato hidráulico",
          "Deformímetros",
          "Sistema de apoyo para el gato",
        ],
        reference:
          "ASTM D1194 Standard Test Method for Bearign Capacity of Soil for Static Load and Spread Footings.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Ensayo de placa con carga",
        title2: "¿Cómo se realiza el ensayo de placa con carga?",
        text: "Se coloca la placa en la superficie donde se desea realizar el ensayo, presionando la placa de manera que no quede ninguna separación entre el suelo y la placa metálica, de ser necesario se nivelará con una capa de arena seca o yeso en polvo. Encima de la placa se coloca el gato hidráulico y un sistema de apoyo alrededor del gato asociado con deformímetros y un contrapeso, la carga se aplica en incrementos iguales y acumulativos no mayores a 1.0 ton/ft2, se realizan por lo menos 6 mediciones del asentamiento durante la aplicación de la carga.",
        reference:
          "ASTM D1194 Standard Test Method for Bearign Capacity of Soil for Static Load and Spread Footings.",
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
        title1: "Análisis granulométrico",
        title2: "¿Qué es el análisis granulométrico?",
        text: "Es una prueba que nos permite estudiar las partículas de suelo, obteniendo la distribución de tamaños en los granos de los sedimentos, por medio de una muestra de agregados finos y gruesos, mediante diferentes tamices.",
        equipoContents: [
          "Horno",
          "Mallas / Tamices",
          "Balanza Cucharon",
          "Recipientes / Charolas",
        ],
        reference:
          "NMX-C-077-ONNCCE-2019 Industria de la Construcción – Agregados para Concreto – Análisis Granulométrico – Método de Ensayo / ASTM C 136 Standard Test Method for Sieve Analysis of Fine and Coarse Aggregates.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Análisis granulométrico",
        title2: "¿Cómo se realiza el análisis granulométrico?",
        text: "La muestra seleccionada se reducirá mediante el método por cuarteo. Antes de comenzar el cuarteo del agregado fino, deberá humedecerse para evitar pérdidas por segregación. Ambas muestras de agregado (fino y grueso), se introducen al horno a una temperatura de 110 ± 5 °C durante 24 hrs y se registra su respectivo peso seco, todos los tamices deberán estar pesados. Se insertan las mallas en orden descendente de acuerdo al tipo de agregado y una charola o base en el último tamiz, se coloca la tapa para el tamiz superior y se comienzan agitar en el periodo que sea necesario, después del cribado, se pesa cada tamiz con su respectiva muestra retenida, en lo que respecta al material fino retenido en el tamiz no. 200, se deberá lavar, pesar y meter al horno durante 24 hrs.",
        reference:
          "NMX-C-077-ONNCCE-2019 Industria de la Construcción – Agregados para Concreto – Análisis Granulométrico – Método de Ensayo / ASTM C 136 Standard Test Method for Sieve Analysis of Fine and Coarse Aggregates.",
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
        title1: "Determinación del contenido de humedad",
        title2: "¿De qué trata la prueba de contenido de humedad?",
        text: "Es un ensayo que nos permite determinar el porcentaje de agua que se encuentra contenida y/o concentrada en una masa de suelo.",
        equipoContents: [
          "Horno",
          "Balanza",
          "Utensilios para manipular",
          "Recipiente",
        ],
        materialsContents: ["Guantes para la temperatura"],
        reference:
          "ASTM D2216 Standard Test Methods for Laboratory Determination of Water (Moisture) Content of Soil and Rock by Mass / NMX-C-475-ONNCCE-2020 Industria de la Construcción – Geotecnia – Materiales Térreos – Determinación del Contenido de Agua Mediante Horno – Método de Ensayo.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Determinación del contenido de humedad",
        title2: "¿Cómo se determina el contenido de humedad?",
        text: "Para realizar el ensayo es necesario pesar y registrar el contenedor que se vaya a utilizar, dependiendo del método se tomaran los gramos necesarios de muestra representativa, el material se coloca en el contenedor y se tapa para evitar pérdidas de humedad, se pesa y se registra. Posteriormente se quita la tapa y se lleva al horno a una temperatura de 110 ± 5 °C, para aquellos materiales que contengan minerales o materia orgánica la temperatura no rebasará los 60 °C, el tiempo en el horno dependerá del tamaño de la muestra, este se considerará seca si la diferencia entre ambos es de 0.1%, posteriormente la muestra se retira del horno y se deja enfriar a temperatura ambiente para proceder a registrar su peso y realizar los cálculos correspondientes.",
        reference:
          "ASTM D2216 Standard Test Methods for Laboratory Determination of Water (Moisture) Content of Soil and Rock by Mass / NMX-C-475-ONNCCE-2020 Industria de la Construcción – Geotecnia – Materiales Térreos – Determinación del Contenido de Agua Mediante Horno – Método de Ensayo.",
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
        image: "/images/LIMITESDEATTERBERG1.jpeg",
        title1: "Límites de Atterberg",
        title2: "¿De qué trata la prueba de límites de Atterberg?",
        text: "Los límites de Atterberg también conocidos como límites de consistencia, nos permiten obtener la resistencia y firmeza de las partículas del suelo, es por ello, que para dicho método es importante conocer el contenido de agua del suelo, ya que la presencia de agua en los vacíos de los suelos finos, afectará su comportamiento. Este método cubre el limite líquido, limite plástico y límite de contracción.",
        equipoContents: [
          "Tamiz",
          "Horno",
          "Copa Casagrande",
          "Capsula de porcelana",
          "Molde para contracción",
          "Placa de vidrio",
          "Recipientes",
          "Espátula",
          "Ranurador",
        ],
        reference:
          "ASTM D4318 Standard Test Methods for Liquid Limit, Plastic Limit, and Plasticity Index of Soils.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/LIMITESDEATTERBERG2.jpeg",
        title1: "Límites de Atterberg",
        title2: "¿Cómo se realiza las pruebas de límites de Atterberg?",
        text: "Se coloca el material que pasa el tamiz No.4 en una capsula, se agrega agua si es necesario para crear una mezcla homogénea. Posteriormente se calibra la copa Casagrande con el ranurador a 1.0 cm de altura, se agrega el material a la copa, siendo un espesor mayor a 8.0 mm en la parte central de la copa y se hace una ranura al centro de la muestra, se inserta la copa a la Casagrande para comenzar a dar 2 golpes por segundo, para los cierres de cada ensayo se realizarán de 25 a 35, 20 a 30 y de 15 a 25 golpes para cerrar el surco a lo largo de 1/2 pulgada (se determina el contenido de humedad de cada una). Posteriormente se amasa la muestra de suelo sobre la placa de vidrio haciendo un rollo delgado y se repite el proceso hasta que este se rompa cuando su espesor sea de 3.2 mm y se toma su contenido de humedad, por otro lado, se mide el molde para la contracción, se enrasa y se agrega la muestra en tres capas, dejándose secar por 12 hrs, para introducirlo al horno a una temperatura de 110 ± 5 °C,  por último se mide la longitud final de la barra para realizar los cálculos correspondientes.",
        reference:
          "NMX-C-162-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO HIDRÁULICO - DETERMINACIÓN DE LA MASA UNITARIA, CÁLCULO DEL RENDIMIENTO Y CONTENIDO DE AIRE DEL CONCRETO FRESCO POR EL MÉTODO GRAVIMÉTRICO.",
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
        title1: "Equivalente de arena",
        title2: "¿Qué es el ensayo de equivalente de arena?",
        text: "Es un método empírico que nos permite determinar el porcentaje de partículas de arena de una muestra, el resultado dependerá de la cantidad de finos que contenga la muestra.",
        equipoContents: [
          "Tamiz No. 4",
          "Probeta graduada",
          "Embudo",
          "Solución de cloruro de calcio",
          "Cronometro",
          "Horno",
        ],
        reference:
          "NMX-C-480-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – GEOTECNIA – EQUIVALENTE DE ARENA DE AGREGADOS FINOS – MÉTODO DE ENSAYO / ASTM D2419 Standard Test Method for Sand Equivalent Value of Soils and Fine Aggregate.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Determinación del contenido de humedad",
        title2: "¿Cómo se determina el contenido de humedad?",
        text: "Para realizar el ensayo es necesario pesar y registrar el contenedor que se vaya a utilizar, dependiendo del método se tomaran los gramos necesarios de muestra representativa, el material se coloca en el contenedor y se tapa para evitar pérdidas de humedad, se pesa y se registra. Posteriormente se quita la tapa y se lleva al horno a una temperatura de 110 ± 5 °C, para aquellos materiales que contengan minerales o materia orgánica la temperatura no rebasará los 60 °C, el tiempo en el horno dependerá del tamaño de la muestra, este se considerará seca si la diferencia entre ambos es de 0.1%, posteriormente la muestra se retira del horno y se deja enfriar a temperatura ambiente para proceder a registrar su peso y realizar los cálculos correspondientes.",
        reference:
          "NMX-C-480-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – GEOTECNIA – EQUIVALENTE DE ARENA DE AGREGADOS FINOS – MÉTODO DE ENSAYO / ASTM D2419 Standard Test Method for Sand Equivalent Value of Soils and Fine Aggregate.",
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
        title1: "Densidad relativa y absorción",
        title2: "¿Qué es el ensayo de densidad relativa y absorción?",
        text: "Es un método permite determinar la densidad media en una porción de partículas de agregado fino, esta prueba aplica para agregados de tamaño máximo de 4.75 mm. La densidad relativa es una relación entre la masa seca y la densidad del agua, esta característica es utilizada para el cálculo del volumen, mientras que la absorción es un incremento en el peso de la muestra cuando esta es sumergida en agua a temperatura ambiente.",
        equipoContents: [
          "Molde cónico",
          "Tara",
          "Picnómetro",
          "Cuchara",
          "Embudo",
          "Horno",
          "Balanza",
          "Pisón de 340 ± 15 gr.",
        ],
        reference:
          "NMX-C-165-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – AGREGADOS – DETERMINACIÓN DE LA DENSIDAD RELATIVA Y ABSORCIÓN DE AGUA DEL AGREGADO FINO – MÉTODO DE ENSAYO / ASTM C 128 Standard Test Method for Density, Relative Density (Specific Gravity), and Absorption of Fine Aggregate.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Densidad relativa y absorción",
        title2:
          "¿Cómo se realiza las pruebas de densidad relativa y absorción?",
        text: "Se obtiene la muestra a través del método por cuarteo, con una cantidad necesaria para realizar el ensayo. Se introduce al horno a una temperatura de 110 ± 5 °C, después la muestra se deja enfriar a temperatura ambiente. Se sumerge la muestra en agua por aproximadamente 24 ±  4 horas, después la muestra se retira del agua y se seca superficialmente para determinar la masa. Se toma el cono y se coloca en una superficie plana no absorbente, se sujeta el molde de manera que el diámetro mayor quede en la parte de abajo sobrellenando el cono y se apisona con 25 caídas. Se llena el matraz volumétrico de agua y se pesa, se toman 500 gramos del material superficialmente seco y se agrega al matraz con poca agua, una vez que este todo el material dentro se agrega más agua y se agita para eliminar todas las burbujas de aire y se termina de llenar. Se toma el peso de la muestra y el material se coloca en la tara para llevarlo al horno nuevamente para obtener la masa constante y la absorción.",
        reference:
          "NMX-C-165-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – AGREGADOS – DETERMINACIÓN DE LA DENSIDAD RELATIVA Y ABSORCIÓN DE AGUA DEL AGREGADO FINO – MÉTODO DE ENSAYO / ASTM C 128 Standard Test Method for Density, Relative Density (Specific Gravity), and Absorption of Fine Aggregate.",
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
        image: "/images/PROCTOR.jpg",
        title1: "Ensayo de compactación proctor",
        title2: "¿De qué trata el ensayo de compactación proctor?",
        text: "El ensayo cuenta con dos variantes conocidas como Proctor Estándar y Proctor Modificada; ambas pruebas suelen diferenciarse una de otra por el número de capas, golpes y el peso del pisón o martillo. La prueba estándar suele ser más utilizada en compactaciones medias como es el caso de los terraplenes; por otro lado, la Proctor Modificada se utiliza más en las capas que conforman la estructura de los pavimentos.  El ensayo nos permite determinar la densidad máxima y el contenido de humedad optimo en los suelos mediante la compactación de una muestra representativa.",
        equipoContents: [
          "Moldes y extensión",
          "Pisón manual",
          "Balanza",
          "Horno",
          "Tamices",
          "Recipientes",
          "Bandeja metálica",
          "Regla metálica",
        ],
        reference:
          "NMX-C-476-ONNCCE-2019 Industria de la Construcción – Geotecnia – Materiales Térreos – Compactación Dinámica Estándar y Modificada – Métodos de Ensayo.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Ensayo de compactación proctor",
        title2: "¿Cómo se realiza la prueba Proctor?",
        text: "Se realiza el método por cuarteo, para seleccionar la cantidad de material con la que trabajaremos. Se procede a secar la muestra de acuerdo al tipo de ensayo y métodos se seleccionará el número de tamiz, así como el molde. El molde se pesa con la placa base, mientras se agrega agua al material de manera uniforme cuidando que la humedad no sobrepase de 4% a 6% de la humedad óptima. Para la proctor estándar se emplearán 3 capas, en el caso de la proctor modificada 5 capas y el número de golpes dependerá del método a utilizar.  Una vez compactado el material en el cilindro, se retira la extensión (collar) del molde y se recorta cuidadosamente el sobrante si no sobrepasa los 1.5 cm, si fuera el caso contrario la prueba se descartará y se tendrá que volver a realizar. El molde se pesa con el material y se registra tomándose dos porciones representativas del material compactado, cuyas muestras también son pesadas, se proceden a meter.",
        reference:
          "NMX-C-476-ONNCCE-2019 Industria de la Construcción – Geotecnia – Materiales Térreos – Compactación Dinámica Estándar y Modificada – Métodos de Ensayo.",
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
        title1: "Relación de soporte de california (CBR)",
        title2: "¿Qué es el CBR?",
        text: "Es un ensayo empírico que permite cuantificar la capacidad de resistencia que tiene un suelo, mediante la elaboración de tres especímenes con material de suelo que se compactaran de 10, 25 y 56 golpes por capa. Este ensayo suele utilizarse para evaluar la resistencia de los materiales y el diseño de pavimentos.",
        equipoContents: [
          "Molde cilíndrico de acero y collar de extensión",
          "Disco espaciador",
          "Placa base con perforaciones",
          "Papel filtro",
          "Trípode con extensómetro",
          "Placas de carga",
          "Enrasador",
          "Indicador",
          "Placa perforadora con vástago",
          "Pisón",
        ],
        reference:
          "ASTM D1883 Standard Test Method for California Bearing Ratio (CBR) of Laboratory – Compacted Soils. M-MMP-1-11/08 MÉTODO DE MUESTREO Y PRUEBA DE MATERIALES. Valor Soporte de California (CBR) y Expansión (Exp) en Laboratorio.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Relación de soporte de california (CBR)",
        title2: "¿Cómo se realiza el CBR?",
        text: "El molde se pesa con el collar de extensión, se lubrica, se coloca el disco espaciador y por encima el papel filtro, se agrega el material que constará de tres capas compactadas con el pisón de acuerdo al número de golpes por capa y conforme a la energía de compactación requerida. La humedad optima de mezclado será la del ensayo Proctor Modificada, una vez compactada se retira el collar, se enrasa y se pesa. Se sitúa el papel filtro sobre la placa con perforación y se invierte el molde con el espécimen agregando encima una placa de expansión con su vástago y las placas de carga; Se sumerge el molde a un tanque para saturarlo, cuidando que el molde tenga libre flujo en la parte inferior y superior, se inserta el trípode sobre el molde con su respectivo extensómetro y se registra la primera lectura, el espécimen se dejará saturar durante 4 días, por cada espécimen se calcularan dos valores de CBR uno a 0.1’’ de penetración y otro a 0.2’’. El valor reportado es el de 0.1’’ mientras que este sea menor al de 0.2’’, si el CBR del 0.1’’ es mayor que 0.2’’ se repite el ensayo.",
        reference:
          "NMX-C-162-ONNCCE-2014 INDUSTRIA DE LA CONSTRUCCIÓN – CONCRETO HIDRÁULICO - DETERMINACIÓN DE LA MASA UNITARIA, CÁLCULO DEL RENDIMIENTO Y CONTENIDO DE AIRE DEL CONCRETO FRESCO POR EL MÉTODO GRAVIMÉTRICO.",
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
        title1: "Prueba de consolidación",
        title2: "¿De qué trata la prueba de consolidación?",
        text: "Es un ensayo que nos permite determinar las características, magnitud y asentamiento de consolidación de los suelos, por medio de una serie de cargas controladas para someter al espécimen a presiones verticales y hacer una relación de esfuerzo – deformación. El ensayo se realiza para muestras no perturbadas, es decir, de grano fino natural donde el tamaño máximo de las partículas no sea superior a la altura de la probeta que se utiliza para el ensayo.",
        equipoContents: [
          "Consolidómetro (que incluye: piedra porosa, anillo, extensómetro, cámara, placa de carga)",
          "Balanza",
          "Papel filtro",
          "Horno",
          "Navaja o cortador",
        ],
        reference:
          "ASTM D2435 Standard Test Methods for One – Dimensional Consolidation Properties of Soils Using Incremental Loading.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Prueba de consolidación",
        title2: "¿Cómo se realiza las pruebas de consolidación?",
        text: "Se pesa el anillo de consolidación; se corta el espécimen de la muestra para que quede en el interior del anillo de consolidación y se pesa con el material que contiene humedad, restando el peso de la tara con el peso de la muestra obtenido. El papel filtro se coloca en ambos extremos del anillo, de manera que este pueda cubrir el espécimen, posteriormente se coloca la piedra porosa por ambos lados. Se coloca el consolidómetro dentro de la base, si la muestra fue obtenida bajo condiciones de saturación en campo, la muestra se saturará. Se inserta en el equipo de consolidación y se registra la altura, se aplica presión, después de la aplicación de la carga asentadora, se ajusta el indicador de deformación y se registra la lectura. Se volverá a registrar la lectura en cada aplicación de cargas, así como la altura final del espécimen, cabe mencionar que las cargas se mantendrán en un periodo de 24 horas. Para la aplicación de cada carga, se medirá la deformación a los 6, 15 y 30 segundos, después a los 4, 8, 16 y 30 minutos, por ultimo a las 1, 2, 4, 8 y 24 horas en incrementos de carga intermedios.",
        reference:
          "ASTM D2435 Standard Test Methods for One – Dimensional Consolidation Properties of Soils Using Incremental Loading.",
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
        title1: "Ensayo de compresión triaxial",
        title2: "¿Qué es el ensayo triaxial?",
        text: "Es uno de los métodos de ensayos más confiables utilizados en la geotecnia para determinar la resistencia al esfuerzo cortante, este ensayo nos permite conocer la distribución de los esfuerzos en las capas del suelo. Existen tres tipos de pruebas triaxial, entre ellas se tienen: sin Consolidación y sin Drenaje (UU), Consolidación con Drenaje (CD) y Consolidación sin Drenaje (CU).",
        reference:
          "ASTM D2850 Standard Test Method for Unconsolidated – Undrained Triaxial Compression Test on Cohesive Soils / ASTM D4767 Standard Test Method for Consolidated Undrained Triaxial Compression Test for Cohesive Soils.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Ensayo de compresión triaxial",
        title2: "¿Cómo se realiza el ensayo triaxial?",
        text: "Se determina la masa y humedad de la muestra, el espécimen es colocado en la probeta de carga, esta celda ejercerá presión de confinamiento uniformemente y aplicará una carga axial, para llevar la muestra a la falla. En el caso de la prueba triaxial de consolidación con drenaje, se aplica en la muestra una presión hidrostática con la válvula abierta, donde es llevada a la falla por medio de la carga axial en bajos incrementos, este tipo de procedimiento suele utilizarse para arenas, y en ocasiones para suelos finos. En la prueba triaxial de consolidación sin drenaje, la muestra se somete bajo presión hidrostática y es llevada a la falla por medio de la aplicación rápida de la carga sin permitir que la muestra se consolide durante la falla, esta prueba se realiza con medición de presión de poros para determinar los esfuerzos totales y efectivos. Por último, se tiene la prueba triaxial sin consolidación y sin drenaje, la muestra no se consolida mientras que la válvula y la bureta estarán cerradas, se aplica una presión hidrostática, llevando a la falla el espécimen, suele utilizarse en arcillas.",
        reference:
          "ASTM D2850 Standard Test Method for Unconsolidated – Undrained Triaxial Compression Test on Cohesive Soils / ASTM D4767 Standard Test Method for Consolidated Undrained Triaxial Compression Test for Cohesive Soils.",
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
        title1: "Ensayo de compresión uniaxial",
        title2: "¿Qué es la prueba de compresión uniaxial?",
        text: "Es un método conocido como compresión simple, consiste en obtener resultados de resistencia (esfuerzo) en suelos cohesivos no confinados, generando una curva de esfuerzo- deformación.",
        equipoContents: [
          "Vernier",
          "Cronometro",
          "Enrasador",
          "Máquina de compresión",
          "Deformímetro",
          "Balanza",
        ],
        reference:
          "ASTM D2166 Standard Test Method for Unconfined Compressive Strength of Cohesive Soil.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Ensayo de compresión uniaxial",
        title2: "¿Cómo se realiza el ensayo de compresión uniaxial?",
        text: "Se labran los cilindros para obtener el diámetro y la altura deseada, se toman sus dimensiones con el vernier y se pesa para obtener la densidad de la muestra. Se coloca la muestra en la máquina de compresión, la aplicación de la carga puede ser de control de deformación unitaria o de esfuerzo, esta dependerá de la velocidad con la que se aplique la carga, considerando que la rotura no exceda los 15 minutos, para el caso de los suelos que presentan mucha humedad, no suelen llegar a la rotura tan fácilmente, por lo que la rotura se tomara del 15% de la deformación. Se fija el deformímetro para que pueda medir la deformación del suelo, se deberá tomar el contenido de agua de la probeta.",
        reference:
          "ASTM D2166 Standard Test Method for Unconfined Compressive Strength of Cohesive Soil.",
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
        title1: "Sondeo de pozo a cielo abierto (PCA)",
        title2: "¿Qué es un PCA?",
        text: "Este es uno de los ensayos que forma parte de los estudios geotécnicos, son excavaciones que se pueden realizar a mano y/o con maquinaria, con el fin de obtener el perfil estratigráfico del suelo y tomar muestras representativas alteradas e inalteradas de cada estrato.",
        equipoContents: [
          "Pico",
          "Pala o maquinaria",
          "Flexómetro",
          "Bolsas de plástico",
        ],
        reference:
          "NMX-C-430-ONNCCE-2002 INDUSTRIA DE LA CONSTRUCCIÓN – GEOTECNIA – CIMENTACIONES – SONDEOS DE POZO A CIELO ABIERTO / N - PRY – CAR-1- 02- 003/19 CAPITULO:  003. Exploración Directa del Subsuelo.",
      },
      {
        id: 2,
        isTextListCard: false,
        image: "/images/concrete.jpg",
        title1: "Sondeo de pozo a cielo abierto (PCA)",
        title2: "¿Cómo se realiza un PCA?",
        text: "Consiste en excavar un pozo con dimensiones necesarias para examinar los diferentes estratos, una vez realizado el PCA, se limpian sus paredes para retirar material contaminante, producto de la excavación. Se ingresa al pozo y con un flexómetro se mide la profundidad del sondeo y se registran los espesores que tendrá cada estrato. Se realiza el muestreo alterado o inalterado, tomando una muestra representativa de cada estrato y etiquetándola con los datos del lugar u obra. La muestra se estudiará en laboratorio.",
        reference:
          "NMX-C-430-ONNCCE-2002 INDUSTRIA DE LA CONSTRUCCIÓN – GEOTECNIA – CIMENTACIONES – SONDEOS DE POZO A CIELO ABIERTO / N - PRY – CAR-1- 02- 003/19 CAPITULO:  003. Exploración Directa del Subsuelo.",
      },
    ],
  },
];

const Mecanica = () => {
  return (
    <main>
      <HeroImage
        image="/images/Laboratorio1.jpeg"
        pageName="PRUEBAS EN LABORATORIO DE MÉCANICA DE SUELOS"
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

export default Mecanica;
