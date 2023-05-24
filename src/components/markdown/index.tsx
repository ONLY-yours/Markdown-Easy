import React from "react";
import ReactMarkdown from "react-markdown";
import './index.css'
import styles from "./index.module.css";

console.log("process.env",process.env);

const MarkDown =  (props: { markdown: string }) => {
  const { markdown } = props;
  return <div className={styles.markdownBox}>
    <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
};

export default MarkDown
