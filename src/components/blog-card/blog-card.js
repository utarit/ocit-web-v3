import React from "react";
import * as styles from "./blog-card.module.css";

export default function BlogCard({ data }) {
  function renderDescription(str) {
    let description = str.match(/<p>(?<desc>.*?)<\/p>/).groups.desc;
    if (description.length > 60) {
      return description.substring(0, 50) + "...";
    }
    return description;
  }

  return (
    <a href={data.link} target="_blank">
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            className={styles.thumbnail}
            src={data.thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.blogTitle}>{data.title}</h2>
          <p className={styles.blogContent}>
            {renderDescription(data.description)}
          </p>
          <div className={styles.infoContainer}>
            <p className={styles.small}>{data.author}</p>
            <p className={styles.small}>{data.pubDate.split(" ")[0]}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
