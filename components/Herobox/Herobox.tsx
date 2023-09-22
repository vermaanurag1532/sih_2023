import Image from 'next/image';
import classes from './Herobox.module.css';
const Herobox = () => {
  return (
    <section className={classes.section} >
      <div className={classes.content} data-aos="fade-right">
        <h1 className={classes.heading}>
          Simplify<span className={classes.gradient}> Waste</span>, Amplify <span className="gradient">Green </span>
        </h1>
        <p className={classes.subtext}>
          Our Bin Knows the Difference.
        </p>
      </div>
      <div className={classes.display} data-aos="fade-left">
        <img src="/assets/tricycle_bin.jpeg" alt="herobox"  />
      </div>
    </section>
  );
};
export default Herobox;
