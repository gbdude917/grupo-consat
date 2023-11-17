import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage/TextWithImage";
import TextWithImageList from "@/components/ContentFormat/TextWithImage/TextWithImageList/TextWithImageList";

import classes from "./SoilSection.module.css";

const SoilSection = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <h2>ESTUDIO DE MECÁNICA DE SUELOS</h2>
        <div className={classes.line} />
      </div>

      <TextWithImage
        image="/images/ConstruccionSoil1.jpg"
        title="¿QUÉ SON LOS ESTUDIOS DE MECÁNICA DE SUELOS?"
        text="Dichos estudios permiten conocer las características físicas, mecánicas e inclusive químicas(asfalto) del terreno donde se busca construir, para ello se estudia la composición estratigráfica, es decir, las capas  de diferentes características que componen el suelo, con ello se determina del nivel de profundidad al que deben realizarse las fundiciones en la construcción, además de demostrar la existencia de​ riesgos geológicos y que medidas son necesarias para evitar cualquier problema."
        isTextLeft={false}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/ConstruccionSoil2.png"
        title="FASE 1. INVESTIGACIÓN PRELIMINAR DEL GABINETE"
        text="Para realizar los estudios de mecánica de suelos, se necesita investigar sobre los mapas geológicos, dichos mapas permiten observar los diferentes tipos de rocas que afloran en la superficie terrestre y los tipos de contactos entre ellas, también se muestran las estructuras tectónicas (pliegues y fallas), yacimientos fósiles, fuentes, recursos minerales, etc. Esta investigación se realiza con el fin de saber si ya existe información sobre las distintas características del terreno."
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImageList
        image="/images/ConstruccionSoil3.jpeg"
        title="FASE 2. ​INVESTIGACIÓN DE CAMPO Y ENSAYOS DE LABORATORIO"
        text="Para realizar los estudios de mecánica de suelos, se necesita investigar sobre los mapas geológicos, dichos mapas permiten observar los diferentes tipos de rocas que afloran en la superficie terrestre y los tipos de contactos entre ellas, también se muestran las estructuras tectónicas (pliegues y fallas), yacimientos fósiles, fuentes, recursos minerales, etc. Esta investigación se realiza con el fin de saber si ya existe información sobre las distintas características del terreno."
        list={[
          "Corte con disco y demolición a mano de piso de concreto, se incluye el acarreo del material producto de las demoliciones",
          "Se realizaron excavaciones y cortes de cepas a mano, con el fin de conocer las características de la cimentación",
          "Sondeos a cielo abierto",
          "Pruebas de penetración estándar (SPT)",
          "Pozos a cielo abierto (PCA)",
          "Perforadora",
        ]}
        isTextLeft={false}
        isWhiteBackground={true}
      />

      <TextWithImageList
        image="/images/ConstruccionSoil4.jpeg"
        title="FASE 2. ​INVESTIGACIÓN DE CAMPO Y ENSAYOS DE LABORATORIO"
        text="Los estudios de laboratorio se realizan una vez que ya se han recolectado las distintas muestras de suelo a distintas profundidades, para el estudio de laboratorio algunos ensayo se realizan “in situ” y otros se realizan en directamente en nuestro laboratorio, sin embargo se realizan las siguientes pruebas:"
        list={[
          "Ensayos de índices de expansión.",
          "Clasificación de suelos.",
          "Ensayos de valor relativo soporte.",
          "Ensayos de determinación de peso volumétricos.",
          "Ensayes de contenidos de humedad óptima.",
          "Granulometria.",
        ]}
        isTextLeft={true}
        isWhiteBackground={true}
      />

      <TextWithImage
        image="/images/ConstruccionSoil5.jpg"
        title="FASE 3. ELABORACIÓN DEL INFORME"
        text={`Ya que se ha realizado las pruebas y estudios necesarios para determinar las distintas características del terreno donde se planea construir, se procede con la elaboración de un informe donde se detalla cada uno de los resultados obtenidos durante los estudios de campo y laboratorio, una vez con dicho informe se procede a realizar la construcción o se abandona el proyecto, además se delimita la cantidad de peso que puede soportar el suelo y en caso de que se proceda con la construcción, se realizan recomendaciones sobre materiales y la construcción\n\nEN EL INFORME SE INCLUYE ​ANÁLISIS DETERMINÍSTICOS
        Es un modelo matemático donde las mismas entradas o condiciones iniciales producirán invariablemente las mismas salidas o resultados.\n\nEstá relacionado con la creación de entornos simulados a través de simuladores para el estudio de situaciones hipotéticas, o para crear sistemas de gestión que permitan disminuir la propagación de errores.`}
        isTextLeft={true}
        isWhiteBackground={true}
      />
    </section>
  );
};

export default SoilSection;
