import Image from "next/image";
import React from "react";
import styles from "../styles/How.module.css";

const data = [
  {
    icon: "https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/icon1.png",
    title: "Contact Us Or Come To Our Office",
  },

  {
    icon: "https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/icon2.png",
    title: "Prepare What You Needed For Your Business Software",
  },
  {
    icon: "https://tykit.rometheme.pro/bustic/wp-content/uploads/sites/34/2021/12/icon3.png",
    title: "Let Us Do Our Job To Make Your Business More Advance",
  },
];
const How = () => {
  return (
    <wrapper className={styles.wrapper}>
      <h1>
        How It <span>Work</span>{" "}
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
              <Image src={item.icon} width={80} height={80} alt="" />
            </div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </wrapper>
  );
};

export default How;
