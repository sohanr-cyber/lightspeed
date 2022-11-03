import Image from "next/image";
import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <wrapper className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.form__container}></div>
        <form className={styles.form}>
          <input type="text" className={styles.field} placeholder="Your Name" />
          <input
            type="email"
            className={styles.field}
            placeholder="Your Email"
          />

          <input
            type="text"
            className={styles.field}
            placeholder="Your Subject"
          />
          <textarea className={styles.field} placeholder="Message" />
          <button>Submit</button>
        </form>
        <div className={styles.gradient}>
          Get Special Offer Untill 30 December 2022
        </div>
      </div>
      <div className={styles.right}>
        <h1>
          Ready to <span>Start</span> Business ?
        </h1>
        <div className={styles.text__yellow}>
          Contact and tell us what you needed
        </div>
        <p>
          Maecenas dignissim dui at accumsan feugiat. Suspendisse potenti. Nulla
          orci odio, elementum at suscipit gravida, rhoncus vel arcu. Quisque et
          rhoncus leo. Aenean placerat semper turpis et auctor. Cras et finibus
          nunc.
        </p>

        <div className={styles.contact__info}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png"
                width="20"
                height="20"
                alt=""
              />
            </div>
            <div className={styles.info}>00 123 456 789</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              {" "}
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png"
                width="20"
                height="20"
                alt=""
              />
            </div>
            <div className={styles.info}>00 123 456 789</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              {" "}
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png"
                width="20"
                height="20"
                alt=""
              />
            </div>
            <div className={styles.info}>00 123 456 789</div>
          </div>
        </div>

        <p>
          Quisque et rhoncus leo. Aenean placerat semper turpis et auctor. Cras
          et finibus nunc.
        </p>
      </div>
    </wrapper>
  );
};

export default Contact;
