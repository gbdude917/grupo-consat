import Image from "next/image";
import Link from "next/link";

import classes from "./ServiceAreasSection.module.css";

const ServiceAreasSection = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.textContainer}>
        <div className={classes.textWrapper}>
          <h2>Conoce nuestras diferentes áreas de servicio de Laboratorio</h2>
          <div className={classes.line} />
          <Link href="/laboratorio/concreto">
            LABORATORIO DE CONCRETO Y ACERO
          </Link>
          <Link href="/laboratorio/mecanica">
            LABORATORIO DE MECÁNICA DE SUELOS
          </Link>
          <Link href="/laboratorio/pavimentos">DISEÑO DE PAVIMENTOS</Link>
          <Link href="/laboratorio/asfalto">LABORATORIO DE ASFALTO</Link>
        </div>
      </div>

      <div className={classes.imageWrapper}>
        <Image
          src="/images/Laboratorio1.jpeg"
          alt="áreas de servicio"
          height={500}
          width={800}
          className={classes.image}
        />
      </div>
    </section>
  );
};

export default ServiceAreasSection;
