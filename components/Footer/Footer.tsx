import classes from './Footer.module.css';
import Link from 'next/link';
import clsx from 'clsx';

const Footer = () => {
return (
    <footer className={classes.footer}>
        <center>
          <img src="/assets/sihlogo.png" alt="While logo" />
        </center>
    </footer>
);
};

export default Footer;