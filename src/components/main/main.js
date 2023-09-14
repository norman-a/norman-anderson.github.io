import React from 'react';
import normanpic from '../../assets/norman-pic.jpeg';
import styles from './main.module.css';
import arrowLight from '../../assets/arrow-light.svg';
import arrowDark from '../../assets/arrow-dark.svg';

const main = props => {
  const arrow = props.mode === 'light' ? arrowLight : arrowDark

  return (
    <div id='main' className={styles.Main}>
      <img className={styles.Pic} src={normanpic} alt='' />
      <h1 mode={props.mode} className={styles.Title + ' text'}>
        Norman
        <br />
        Anderson
      </h1>
      <h4 className={styles.SecondaryTitle}>Software Developer</h4>
      <h4 className={styles.SecondaryTitle}>with 1.5 years of experience</h4>
      <img mode={props.mode} className={styles.Arrow} src={arrow} alt=""/>
    </div>
  );
};

export default main;