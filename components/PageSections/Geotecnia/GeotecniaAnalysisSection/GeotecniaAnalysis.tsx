import TextWithImage from "@/components/ContentFormat/TextWithImage/TextWithImage";
import classes from "./GeotecniaAnalysis.module.css";

const GeotecniaAnalysis = () => {
  return (
    <section className={classes.articleSection}>
      <div className={classes.header}>
        <h2>ANÁLISIS Y DISEÑO DE DIVERSAS ESTRUCTURAS </h2>
        <div className={classes.line} />
        <p>
          En Grupo Consat no solo contamos con personal apto para realización de
          estudios geotécnicos sino que también podemos apoyarle con el análisis
          y diseño de diversas estructuras, como lo son:
        </p>
      </div>

      <div>
        <TextWithImage
          image="/images/GeotecniaAnalysis1.png"
          title="ANÁLISIS DE ESTABILIDAD Y DISEÑO DE TALUDES"
          text={`Pendiente que se encuentra respecto a un terreno o superficie horizontal, la cual mantiene esta posición de manera temporal o permanente, por lo general suelen encontrarse compuestas del mismo suelo, como roca, concreto u otros materiales que puedan contener la presión provocada por el suelo.\n\nNaturales: Los taludes formados de manera natural son aquellos generados debido a las condiciones geológicas del sitio, el cálculo de estabilidad de estos sistemas por lo que generalmente es demasiado complicado debido a las irregularidades que presenta el talud.
          \nArtificiales: Estos taludes son generados por la intervención del hombre y su formación dependerá del desarrollo de obras de ingeniería.`}
          isTextLeft={true}
          isWhiteBackground={true}
        />

        <TextWithImage
          image="/images/GeotecniaAnalysis2.png"
          title="DISEÑO DE CIMENTACIONES PROFUNDAS Y/O ESPECIALIZADAS"
          text={`Conjunto de elementos de la estructura que tiene la función de transmitir las cargas de la edificación o elementos apoyados en ellos al suelo. La estabilidad de la construcción depende en gran medida del tipo de terreno y dependiendo de los resultados obtenidos del estudio geotécnico se tendrá que utilizar una cimentación superficial o profunda.\n
          Tipos de cimentaciones:\n
          Cimentación superficial: Aquellas cimentaciones en las que la profundidad del plano de apoyo es de aproximadamente 4 metros o menor, estos cimientos se permiten en capas compuestas por rocas, suelos granulares cuya deformabilidad es baja-media.\n
          Cimentación profunda: Se encuentran conformadas por elementos estructurales encargados de transmitir adecuadamente las cargas al suelo, lo que ayuda para la estabilidad de la edificación, estas son necesarias cuando el terreno puede sufrir alteraciones o su relleno es de calidad baja.`}
          isTextLeft={false}
          isWhiteBackground={true}
        />

        <TextWithImage
          image="/images/GeotecniaAnalysis3.jpg"
          title="DISEÑO DE SISTEMAS DE CONTENCIÓN"
          text={`Sistemas de contención\n
          Los sistemas de contención, por lo general son muros los cuales están diseñados para contener algo, por lo general suele ser tierra o alguna sección del terreno, la cual pasaría a tomar otra forma de no ser que dicho sistemas se encuentre de por medio, su función principal es estabilizar el terreno natural, existen 3 tipos:\n
          Muros de contención de gravedad: Estos operan por medio de su propio peso para garantizar la estabilidad, por lo general tiende a ser robustos y con gran volumen.\n
          Muro de contención en voladizo: Estos soportan grandes esfuerzos de flexión.\n
          Muro contrafuerte: son uniones entre la parte vertical del muro y su base, este resisten los empujes.`}
          isTextLeft={true}
          isWhiteBackground={true}
        />

        <TextWithImage
          image="/images/GeotecniaAnalysis4.jpeg"
          title="ANÁLISIS Y DISEÑO DE EXCAVACIONES"
          text={`Nu​estro perso​nal​ puede apoyarle
          Este estudio tiene como fin determinar las obras geotécnicas necesarias para realizar una excavación segura, buscando evitar percances durante la construcción, como pueden ser deslizamientos o derrumbes, que puedan poner en riesgo a los trabajadores de la obra, además de evitar daños a edificaciones circundantes.`}
          isTextLeft={false}
          isWhiteBackground={true}
        />
      </div>
    </section>
  );
};

export default GeotecniaAnalysis;
