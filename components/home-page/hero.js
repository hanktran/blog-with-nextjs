import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/han-avatar.jpg"
          alt="Han Tran"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Han</h1>
      <p>I blog about web development - algorithm - machine learning</p>
    </section>
  );
};

export default Hero;
