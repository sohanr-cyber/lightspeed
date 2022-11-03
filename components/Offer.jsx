import Image from "next/image";
import React from "react";
import styles from "../styles/Offer.module.css";

const data = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/776/776627.png",
    title: "Flexibility",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit    ",
  },
  {
    icon: "",
    title: "24hrs Costumer Service",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit    ",
  },
  {
    icon: "",
    title: "Fast & reliable",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Offer = () => {
  return (
    <wrapper className={styles.wrapper}>
      <div className={styles.left}>
        <h1>
          We Gave The <span>Best</span> Offer
        </h1>
        <div className={styles.text__yellow}>
          Get Special Offer Untill 30 December 2022
        </div>
        <div className={styles.offers}>
          {data.map((item) => (
            <div className={styles.offer}>
              <div className={styles.icon}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/776/776627.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className={styles.content}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.details}>{item.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src="https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/img1.4-768x512.png"
          width={800}
          height={534}
          alt=""
        />
        <div className={styles.top__left}>
          <div className={styles.number}>Ratings</div>
          <div className={styles.text}>The Most Rating We Get </div>
        </div>
        <div className={styles.flex}>
          <p>
            Integer molestie at enim et pharetra. Maecenas lacus mi, accumsan at
            porttitor sed, venenatis vitae est.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </wrapper>
  );
};

export default Offer;
