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
          I love to code! Building things and seeing through them to completion has always resonated with me. 
          <br />
          <br />
          As a Software Engineer, I enjoy the sense of control that comes with programming. 
          It is unlike most things in life, in that the process can be very methodical. 
          When making magical things happen in code, it is because of you. When encountering bugs, it is also because of you.
          This can make the flow of programming very rewarding, as I can constantly learn and improve my techniques by noticing these patterns.
          <br />
          <br />
          Welcome to my website! I'm currently looking to transition into embedded systems engineering as a career,
          so if you have any opportunities such as internships or projects that have to do with low-level programming let me know!
        </p>
      </div>

      <img className={styles.Arrow} src={arrow} alt='' />
    </div>
  );
};

export default about;
