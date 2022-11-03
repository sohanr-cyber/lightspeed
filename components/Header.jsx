import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <wrapper className={styles.wrapper}>
      <div className={styles.left}>
        <h1>
          We Will Help Your Business <span>Grow 2x</span> Times Using Our
          Business Software
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <form className={styles.form}>
          <input type="email" placeholder="Subscribe For More Info" />
          <button type="submit" className={styles.btn}>
            Sign Up
          </button>
        </form>
      </div>
      <div className={styles.right}>
        <Image
          src="https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/img1.4-768x512.png"
          width={800}
          height={534}
          alt=""
        />
        <div className={styles.top__left}>
          <div className={styles.number}>700+</div>
          <div className={styles.text}>Costomer</div>
        </div>
        <div className={styles.bottom__right}>
          <div className={styles.number}>650+</div>
          <div className={styles.text}>Finish Project</div>
        </div>
      </div>
    </wrapper>
  );
};



export default Header;
