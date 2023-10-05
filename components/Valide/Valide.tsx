import classes from './Valide.module.css';
const Valide = () => {
  return (
    <section className={classes.section} >
      <div className={classes.display} data-aos="fade-left">
        <img src="/assets/Valide.jpeg" alt="herobox" />
      </div>
      <div className={classes.content} data-aos="fade-right">
        <p className={classes.subtext}>
          Our object classification model, optimized for the low resourced-ESP32 board, gives a <b>fit score of more than 90% </b>when trained on one NB class. It has an <b>inference time of less than a second</b> and <b>peak RAM usage of 236KB.</b>
        </p>
      </div>
    </section>
  );
};
export default Valide;