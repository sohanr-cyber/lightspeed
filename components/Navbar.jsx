import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <wrapper className={styles.wrapper}>
      <div className={styles.left}>
        <logo className={styles.logo}>
          LIGHT
          <div
            style={{ color: "initial", display: "inline", fontSize: "20px" }}
          >
            SPEED
          </div>
        </logo>
        <div className={styles.title}>MAKE YOUR BUSSINESS MORE ADVANCE</div>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>Home</div>
        <div className={styles.item}>About Us</div>
        <div className={styles.item}>Service</div>
        <div className={styles.item}>Page</div>
        <div className={styles.item}>Contact</div>
      </div>
      {open ? (
        <div className={styles.right__mobile}>
          <div
            className={styles.item}
            style={{ textAlign: "right", cursor: "pointer" }}
            onClick={() => setOpen(false)}
          >
            X
          </div>
          <div className={styles.item}>Home</div>
          <div className={styles.item}>About Us</div>
          <div className={styles.item}>Service</div>
          <div className={styles.item}>Page</div>
          <div className={styles.item}>Contact</div>
        </div>
      ) : (
        <div onClick={() => setOpen((prev) => !prev)}>+</div>
      )}
    </wrapper>
  );
};

export default Navbar;
