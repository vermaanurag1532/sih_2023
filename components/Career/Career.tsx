import clsx from 'clsx';
import classes from './Career.module.css';

const Goals = () => {
  return (
    <section className={classes.container} id="goals">
      <h1 className={classes.heading}>
        <center>
          Our <span className="gradient">Team</span>
        </center>
      </h1>
      <div className={clsx(classes.row, 'row')}>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-right">
          <div className={clsx(classes.card1, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Himal Sharma</h5>
            <img src="/assets/team.jpg" alt="While logo" />
            <p className={clsx(classes.cardText, 'card-text')}>
              <b>
              Team Leader
              </b>
            </p>
          </div>
        </div>
        <div className={clsx(' col-lg-4 col-md-6 col-md-12', classes.cardcontainer)} data-aos="fade-up">
          <div className={clsx(classes.card2, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Akash Yadav</h5>
            <img src="/assets/team.jpg" alt="While logo" />
            <p className={clsx(classes.cardText, 'card-text')}>
              <b>
              Machine Learning
              </b>
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-left">
          <div className={clsx(classes.card3, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Anurag Verma</h5>
            <img src="/assets/team.jpg" alt="While logo" />
            <p className={clsx(classes.cardText, 'card-text')}>
              <b>
              Web Developer
              </b>
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-right">
          <div className={clsx(classes.card4, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Ankit Kumar Duvedi</h5>
            <img src="/assets/Ankit.jpg" alt="While logo" />
            <p className={clsx(classes.cardText, 'card-text')}>
              <b>
              Model Training
              </b>
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-left">
          <div className={clsx(classes.card5, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Om Gupta</h5>
          <img src="/assets/team.jpg" alt="While logo" />
            <p className={clsx(classes.cardText, 'card-text')}>
              <b>
              Developing Models
              </b>
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')} data-aos="fade-left">
          <div className={clsx(classes.card5, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Asiya Siddiqui</h5>
            <img src="/assets/asiya.jpg" alt="While logo" />
            <p className={clsx(classes.cardText, 'card-text')}>
              <b>
              Making Dataset
              </b>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.projectLink}>
      <h1 className={classes.heading}>
        <center>
          Our <span className="gradient">Project</span>
        </center>
      </h1>
        <center>
      <iframe className={classes.projectVideo} width="560" height="315" src="https://www.youtube.com/embed/r-q5V6LDxEY?si=gkAYaNnMsHAn3CpW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </center>
      </div>
    </section>
  );
};

export default Goals;
