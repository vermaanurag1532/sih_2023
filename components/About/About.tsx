import clsx from 'clsx';
import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.section} id="about">
      <h1 className={classes.heading}>
        <center>
          About<span className="gradient"> Us</span>
        </center>
      </h1>
      <div className={classes.subtext}>
        A centralized system of Smart Bins that automatically <b>sanitizes, segregates, and disposes waste</b> at the ground level to eliminate any kind of human intervention. The bin classifies waste with the utilization of <b>metal detector, image classification model and humidity sensor</b> which are structured in a way to achieve highly efficient waste segregation.
        The respective waste is thrown in the dustbin’s sub-compartment namely <b>Biodegradable, Non Biodegradable, Metallic and Unclassified.</b>
      </div>
    </section>
  );
};

export default About;
