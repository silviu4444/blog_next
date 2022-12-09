import React from "react";

import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          objectPosition="center"
          src="/images/site/silviu.jpg"
          alt="An image showing Silviu"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Silviu</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
