
import styles from "./Hero.module.css";
import HeroCanvas from '../herocanvas/HeroCanvas';
const Hero = (props) => {
  return (
    <div className={props.images.length ? `flex ${styles.mainOne} ${styles["image-container"]} ${styles.canvasContainer}` : styles.mainTwo}>
      {props.images.length ? (
        <HeroCanvas images={props.images} />
      ) : (
        <h1 className={styles.head}>Need 10 pages to make a comic 😒... </h1>
      )}
    </div>
  );
};

export default Hero;
