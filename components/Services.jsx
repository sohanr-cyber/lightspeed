import Image from "next/image";
import React from "react";
import styles from "../styles/Service.module.css";

const data = [
  {
    icon: "https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/icon4.png",
    title: "Awesome Design",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/681/681560.png",
    title: "Easy Customize",
  },

  {
    icon: "https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/icon4.png",
    title: "Bug Free Code",
  },
  {
    icon: "https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/icon4.png",
    title: "Organized Layout",
  },
  // {
  //   icon: "https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/icon4.png",
  //   title: "",
  // },
];

const Services = () => {
  return (
    <wrapper className={styles.wrapper}>
      <h1>
        What <span>Service</span> We Gave
      </h1>
      <p>
        Curabitur id libero nisl. Vivamus tempus gravida ligula vel aliquet.
        Donec consequat ex eget ex euismod vehicula. Curabitur id tristique
        magna, ut pretium urna. Sed a tristique leo, id semper lorem.
      </p>
      <div className={styles.flex}>
        {data.map((item) => (
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={item.icon} height={70} width={70} alt="" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.service}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
            </div>
          </div>
        ))}
      </div>
    </wrapper>
  );
};

export default Services;
