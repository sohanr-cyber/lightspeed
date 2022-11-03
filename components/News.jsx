import Image from "next/image";
import React from "react";
import styles from "../styles/News.module.css";

const News = () => {
  return (
    <wrapper className={styles.wrapper}>
      <h1>
        Read Our <span>Latest</span> News
      </h1>
      <p>
        Curabitur id libero nisl. Vivamus tempus gravida ligula vel aliquet.
        Donec consequat ex eget ex euismod vehicula. Curabitur id tristique
        magna, ut pretium urna. Sed a tristique leo, id semper lorem.
      </p>

      <div className={styles.flex}>
        {[1, 2, 2, 2].map((item) => (
          <div className={styles.item}>
            <div className={styles.image__container}>
              <Image
                src="https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/business-people-discussing-future-plans-N5GY7EP-1024x683.jpg"
                width={469}
                height={314}
                alt=""
              />
            </div>
            <div className={styles.title}>
              The Best Way to Treat Your Customer
            </div>
            <div className={styles.news}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vulputate augue metus, nec dictum lectus…
            </div>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </wrapper>
  );
};

export default News;
