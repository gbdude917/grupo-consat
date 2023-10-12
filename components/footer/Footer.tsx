import Image from "next/image";
import Link from "next/link";

import classes from "./Footer.module.css";

import logoPic from "../../public/images/Logo.png";
import phone from "../../public/images/phone.png";
import mail from "../../public/images/mail.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes["image-wrapper"]}>
          <Image
            src={logoPic}
            alt="Grupo Consat Logo"
            className={classes.image}
          />
        </div>

        <div className={classes.servicesWrapper}>
          <div className={classes.services}>
            <h3>Nuestros Servicios</h3>
            <ul>
              <li>
                <Link href="/">Geotecnia</Link>
              </li>
              <li>
                <Link href="/">Cálculo estructural</Link>
              </li>
              <li>
                <Link href="/">Geología</Link>
              </li>
              <li>
                <Link href="/">Construcción</Link>
              </li>
              <li>
                <Link href="/">Laboratorio de control de calidad</Link>
              </li>
              <li>
                <Link href="/">Protección civil y capacitación</Link>
              </li>
              <li>
                <Link href="/">Estudios de medio ambiente</Link>
              </li>
              <li>
                <Link href="/">Fotogrametría</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.contactWrapper}>
          <div className={classes.contact}>
            <h3>Datos de Contacto</h3>
            <h4>Grupo Consat</h4>
            <div className={classes.phone}>
              <div className={classes["phone-header"]}>
                <Image src={phone} alt="phone" className={classes.icons} />
                <span>Teléfono:</span>
              </div>
              <ul>
                <li>
                  <div className={classes["arrow-right"]} />
                  Oficina: 664 681 9704
                </li>

                <li>
                  <div className={classes["arrow-right"]} />
                  USA +01 619 598 3879
                </li>

                <li>
                  <div className={classes["arrow-right"]} />
                  MX +52 664 780 7004
                </li>
              </ul>
            </div>
            <div>
              <Image src={mail} alt="mail" className={classes.icons} />
              <span>administracion@grupoconsat.com</span>
            </div>
            <div>
              <Image src={mail} alt="mail" className={classes.icons} />
              <span>dbjconsat@hotmail.com</span>
            </div>
            <div className={classes.adress}>
              <h4>Nos encontramos en:</h4>
              <div className={classes.link}>
                <Link href="https://maps.app.goo.gl/atKQgdoXxB6ZXERG7">
                  Blvd. Díaz Ordaz 12649. Plaza Patria, Local 5AC, 2do nivel, El
                  Paraiso, 22106 Tijuana, B.C., Mexico
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["external-links"]}>
        <div>
          <Link href="https://www.facebook.com/CONSATMX">
            <FontAwesomeIcon
              icon={faFacebook}
              className={classes.fontawesome}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/david-becerra-jimenez-710336b8/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={classes.fontawesome}
            />
          </Link>
          <Link href="https://api.whatsapp.com/send/?phone=16195983879&text&type=phone_number&app_absent=0">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className={classes.fontawesome}
            />
          </Link>
        </div>
      </div>

      <div className={classes.bottom}>
        <span>Copyright © Grupo CONSAT 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
