import React from "react";
import { HomeStyles as styles } from "./Styles";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Home </h1>
      <div>
        <video width={400} height={400} autoPlay loop muted>
          <source
            src="https://d75afklyimq5v.cloudfront.net/atheros-learning/web-assets/platform-carousel-light.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Home;
