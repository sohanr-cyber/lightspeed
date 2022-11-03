import React from "react";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <wrapper div className={styles.footer}>
      <div className={styles.flex}>
        {" "}
        <div className={styles.about}>
          <logo className={styles.logo}>LIGHTSPEED</logo>
          <div className={styles.text}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.contact}>
          <div className={styles.title}>Quick Contact</div>
          <div className={styles.item}>
            {/* <div className={styles.icon}>#</div> */}
            <div className={styles.text}>speedlight803@gmail.com</div>
          </div>
          <div className={styles.item}>
            {/* <div className={styles.icon}>#</div> */}
            <div className={styles.text}>01744329811</div>
          </div>
        </div>
        {/* <div className={styles.pages}>
          <div className={styles.title}>Other Page</div>

          <div className={styles.item}>
            <div className={styles.icon}>#</div>
            <div className={styles.text}>Rometheme Studio</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>#</div>
            <div className={styles.text}>Rometheme Studio</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>#</div>
            <div className={styles.text}>Rometheme Studio</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>#</div>
            <div className={styles.text}>Rometheme Studio</div>
          </div>
        </div> */}
        {/* <div className={styles.social}>
          <div className={styles.title}>Our Social Media</div>

          <div className={styles.item}>
            <div className={styles.icon}>#</div>
            <div className={styles.text}>Rometheme Studio</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>#</div>
            <div className={styles.text}>Rometheme Studio</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>#</div>
            <div className={styles.text}>Rometheme Studio</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>#</div>
            <div className={styles.text}>Rometheme Studio</div>
          </div>
        </div> */}
      </div>
      {/* <div className={styles.coppyright}>
        Copyright 2021 © Bustic | Powered by Rometheme Studio
      </div> */}
    </wrapper>
  );
};

export default Footer;
