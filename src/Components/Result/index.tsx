import { useState } from "react";
import styles from "./result.module.scss";

interface ResultProps {
  list: string[]; // Define the type of 'list' prop
}

export default function Result({ list }: ResultProps) {
  // ANIMATION COPY
  const [animationCopy, setAnimationCopy] = useState<boolean>(false);

  const normalKeywords: string[] = list;
  const hashtagList: string[] = list;
  const commaList: string[] = list;

  const copyListNormalList = () => {
    setAnimationCopy(true);
    setTimeout(() => {
      navigator.clipboard.writeText(normalKeywords.join(""));
      setAnimationCopy(false);
    }, 500);
  };

  const copyListHashtagList = () => {
    setAnimationCopy(true);
    setTimeout(() => {
      navigator.clipboard.writeText(
        hashtagList.map((word) => `#${word}`).join(" ")
      );
      setAnimationCopy(false);
    }, 500);
  };

  const copyListCommaList = () => {
    setAnimationCopy(true);
    setTimeout(() => {
      navigator.clipboard.writeText(commaList.join(","));
      setAnimationCopy(false);
    }, 500);
  };

  return (
    <>
      {/* ANIMATION COPY */}
      {animationCopy && (
        <div className={styles.animaion_copy}>
          <p>COPIED</p>
        </div>
      )}
      <div className={styles.result_container}>
        {/* Normal Keywords */}
        <div className={styles.box_container}>
          <div className={styles.result_keywords_normal}>
            <p className={styles.headline_normal_list}>
              <i className="fa fa-universal-access"></i>NORMAL KEYWORDS
            </p>
            {normalKeywords.length > 0 ? (
              normalKeywords.map((word, index) => <p key={index}>{word}</p>)
            ) : (
              <p>No Keywords Found!</p>
            )}
          </div>
          <button className={styles.btn_copy} onClick={copyListNormalList}>
            COPY
          </button>
        </div>

        {/* Hashtag Keywords */}
        <div className={styles.box_container}>
          <div className={styles.result_keywords_hashtag}>
            <p className={styles.headline_normal_list}>
              <i className="fa fa-hashtag"></i>HASHTAG KEYWORDS
            </p>
            {hashtagList.length > 0 ? (
              hashtagList.map((word, index) => <p key={index}>{` #${word}`}</p>)
            ) : (
              <p>No Keywords Found!</p>
            )}
          </div>
          <button className={styles.btn_copy} onClick={copyListHashtagList}>
            COPY
          </button>
        </div>

        {/* Comma Keywords */}
        <div className={styles.box_container}>
          <div className={styles.result_keywords_comma}>
            <p className={styles.headline_normal_comma}>
              <i className="fa fa-certificate"></i>COMMA KEYWORDS
            </p>
            {commaList.length > 0 ? (
              commaList.map((word, index) => <p key={index}>{`,${word}`}</p>)
            ) : (
              <p>No Keywords Found!</p>
            )}
          </div>
          <button className={styles.btn_copy} onClick={copyListCommaList}>
            COPY
          </button>
        </div>
      </div>
    </>
  );
}
