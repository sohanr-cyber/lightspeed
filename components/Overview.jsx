import React from "react";
import styles from "../styles/Overview.module.css";
import Image from "next/image";

const data = [
  {
    title: "Corporate",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },

  {
    title: "Business",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
  },
];

const Overview = () => {
  return (
    <wrapper className={styles.wrapper}>
      <div className={styles.left}>
        <Image
          src="https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/img2.2.png"
          height={566}
          width={414}
          alt=""
        />
        <div className={styles.review}>
          <div className={styles.content}>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo{" "}
          </div>
          <div className={styles.flex}>
            <Image
              src="https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/img2.2.png"
              width={60}
              height={60}
              alt=""
              borderRadius="50%"
            />
            <div className={styles.about}>
              <div className={styles.name}>Dyas Kardinal</div>
              <div className={styles.profession}>Designer</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h1>
          Overview Our <span>Overview Our Project</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className={styles.overview}>
          {data.map((item) => (
            <div className={styles.item}>
              <div className={styles.icon}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/8342/8342682.png"
                  width={60}
                  height={60}
                  alt=""
                />
              </div>
              <div className={styles.content}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.text}>{item.details}</div>
              </div>
            </div>
          ))}
        </div>
        <button>Read More</button>
      </div>
    </wrapper>
  );
};

export default Overview;
