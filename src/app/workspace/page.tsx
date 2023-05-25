"use client";
import React, { useState } from "react";
import { Button, Input } from "antd";
import styles from "./page.module.css";
import { useSpring, animated, config } from "@react-spring/web";
import MarkDown from "@/components/markdown";
import { PostMessage } from "./apiUtils";

const WorkSpace = () => {
  const [{ background }] = useSpring(
    () => ({
      from: { background: "var(--step0)" },
      to: [
        { background: "var(--step0)" },
        { background: "var(--step1)" },
        { background: "var(--step2)" },
        { background: "var(--step3)" },
        { background: "var(--step4)" },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  const [word, setWord] = useState<string>("");

  const [transContent, setTransContent] = useState<string>("");

  const ActionList = () => {
    return (
      <div className={styles.actionList}>
        <Button
          onClick={async () => {
            PostMessage({ content: word });
          }}
        >
          Total Upgrade
        </Button>
      </div>
    );
  };

  return (
    <animated.div
      className={styles.main}
      style={{
        background,
      }}
    >
      <ActionList />
      <div className={styles.workspaceBody}>
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
          <MarkDown markdown={transContent} />
        </div>
      </div>
    </animated.div>
  );
};

export default WorkSpace;
