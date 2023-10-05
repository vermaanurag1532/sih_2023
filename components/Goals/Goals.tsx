import clsx from 'clsx';
import classes from './Goals.module.css';

const Goals = () => {
  return (
    <section className={classes.container} id="goals">
      <h1 className={classes.heading}>
        <center>
          Our <span className="gradient">Goals</span>
        </center>
      </h1>
      <div className={clsx(classes.row, 'row')}>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-right">
          <div className={clsx(classes.card1, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Efficient Waste Sorting</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
            Tricycle Bin is capable of correctly identifying, sorting, categorising, separating waste for effective disposal reducing the contamination into different categories waste.{' '}
            </p>
          </div>
        </div>
        <div className={clsx(' col-lg-4 col-md-6 col-md-12', classes.cardcontainer)} data-aos="fade-up">
          <div className={clsx(classes.card2, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Space Optimization</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
            Maximise storage capacity using best-in-class waste compression solutions and decrease collection frequency.
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-left">
          <div className={clsx(classes.card3, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Environmental Impact Reduction</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
            Optimise waste collection routes for minimised carbon footprint, fuel efficiency & emissions.
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-right">
          <div className={clsx(classes.card4, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Data-Driven Insights</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
            Use Tricycle Bin captured data to offer insights about customer waste patterns — empowering enterprises with meaningful information on greener product options, promoting green thinking.
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-left">
          <div className={clsx(classes.card5, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Automation and Human Intervention Elimination</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
            Create and keep a core Smart Bin system that works to remove, separate, and dispose of waste effortlessly (without human help) to make space smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
