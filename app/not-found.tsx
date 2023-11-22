import Image from "next/image";
import Link from "next/link";

import classes from "./not-found.module.css";

import logoPic from "../public/images/Logo.png";

export default function NotFound() {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1>Whoops!</h1>

        {/* <Image
          src="/images/CryingCheems.jpg"
          alt="404"
          width={300}
          height={300}
          className={classes.dogImage}
        /> */}
        <Image
          src={logoPic}
          alt="Grupo Consat Logo"
          className={classes.image}
        />

        <h2>We couldn't find that page for you!</h2>

        <Link href="/">Go Back Home</Link>
      </div>
    </main>
  );
}
