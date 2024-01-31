import React from 'react'
import LogoImage  from '../assets/Group 1.png';
import styles from "./Logo.module.css";

const logo = () => {
  return (
    <img className={styles.img} src={LogoImage} alt="logo" width={67} />
  )
}

export default logo
