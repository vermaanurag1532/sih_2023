import classes from './Project.module.css';
const Project = () => {
  return (
    <div className={classes.projectLink} id="project">
      <h1 className={classes.heading}>
        <center>
          Our <span className={classes.gradient}>Project</span>
        </center>
      </h1>
        <center>
        <iframe className={classes.projectVideo} width="560" height="315" src="https://www.youtube.com/embed/PXW4qtpqiX0?si=iB6939w_33S6sut6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </center>
      </div>
  );
};
export default Project;