"use client";
import React, { useState } from "react";
import { Button, Input } from "antd";
import styles from "./page.module.css";
import MarkDown from "@/components/markdown";
import optimizeContent from "@/utils/chat";

const WorkSpace = () => {
  const [word, setWord] = useState<string>("");

  const [transContent, setTransContent] = useState<string>("");

  const ActionList = () => {
    return (
      <>
        <Button
          onClick={async () => {
            setTransContent((await optimizeContent(word)).text);
          }}
        >
          Total Upgrade
        </Button>
      </>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.writeBlock}>
        <Input.TextArea
          className={styles.wordInputArea}
          autoSize
          value={word}
          onChange={(value) => {
            setWord(value.target.value);
          }}
        />
      </div>
      <div className={styles.markdownBlock}>
        <MarkDown markdown={word} />
      </div>
    </div>
  );
};

export default WorkSpace;
