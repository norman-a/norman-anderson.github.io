import React from 'react';
import styles from './about.module.css';
import arrowLight from '../../assets/arrow-light.svg';
import arrowDark from '../../assets/arrow-dark.svg';

const about = (props) => {
  const arrow = props.mode === 'light' ? arrowLight : arrowDark;

  return (
    <div id='about' className={styles.About}>
      <div className={styles.AboutContainer}>
        <h2 mode={props.mode} className={styles.Title + ' text'}>
          About me
        </h2>
        <p className={styles.Note}>
          I love to code! Being able to build things and seeing them through to the end has always resonated with me. 
          <br />
          <br />
          As a Software Engineer, I have a penchant for the sense of control that is available with programming. 
          It is unlike most things in life, in the sense where the process can be very methodical. 
          When making magical things happen in code, it is because of you. When encountering bugs, it is also because of you.
          This can make the flow of programming very rewarding, as I can constantly learn and improve my techniques by noticing these patterns.
          <br />
          <br />
          Welcome to my website!
        </p>
      </div>

      <img className={styles.Arrow} src={arrow} alt='' />
    </div>
  );
};

export default about;
