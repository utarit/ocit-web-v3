import React, { useEffect, useState } from "react";
import * as styles from "./welcoming.module.css";
import bandImg from "../../images/bands.png";
import BlogCard from "../blog-card/blog-card";

export default function Welcoming() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [blogData, setBlogData] = useState([]);

  async function getBlogContent() {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ocit"
    );
    const data = await response.json();
    setBlogData(data.items);
    console.log(data.items);
  }

  useEffect(() => {
    getBlogContent();
  }, []);

  return (
    <div
      className={styles.container}
      style={{ display: imgLoaded ? "flex" : "none" }}
    >
      <div className={styles.imgContainer}>
        <img
          onLoad={() => {
            setImgLoaded(true);
          }}
          className={styles.bandImg}
          src={bandImg}
          alt="banding"
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.sloganContainer}>
          <div className={styles.typewriter}>
            <h1>İlk yardım hayat kurtarır. 💖</h1>
          </div>
        </div>
        <div className={styles.blogsContainer}>
          <h2>Bizden son haberler</h2>
          {blogData.map((el) => (
            <BlogCard key={el.guid} data={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
