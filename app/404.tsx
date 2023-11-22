import Image from "next/image";

import classes from "./404.module.css";

export default function Custom404() {
  <main className={classes.main}>
    <div className={classes.Container}>
      <Image
        src="/images/CryingCheems.jpeg"
        alt="404"
        width={300}
        height={300}
        className={classes.image}
      />
      <h1>404 - Page Not Found!</h1>
    </div>
  </main>;
}
