import { useEffect, useState } from "react";
import styles from "./inputKey.module.scss";
import Result from "../Result";
import img_loading from "../imgs/icon.gif";

// If you do not use `resultContext` in this file, you can remove it as well
// export const resultContext = createContext<string[]>([]);

export default function InputKey() {
  // If you are not using `apiList`, remove it
  // const [apiList, setApiList] = useState<string[]>([]);

  // FETCH API TO GET LIST OF WORDS (if needed later, otherwise remove this code)
  useEffect(() => {
    const getKeywords = async () => {
      try {
        const response = await fetch("http://penguinsan.zapto.org/penguin/");
        const data = await response.json();
        // Use `apiList` if needed later
        // setApiList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching keywords:", error);
      }
    };

    getKeywords();
  }, []);

  const keywords = [
    // List of keywords
    "adventure travel",
    "affordable travel destinations",
    "American travel tips",
    // ... other keywords
  ];

  // THREE LISTS
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [animation, setAnimation] = useState<boolean>(false);

  // LIST TO FILTER THE KEYWORDS BASED ON THE USER INPUT
  const generateLists = (inputValue: string) => {
    if (!inputValue.trim()) {
      alert("Enter Word");
    } else {
      const filterList = keywords.filter((word) =>
        word.toLowerCase().includes(inputValue.toLowerCase())
      );
      setList(filterList);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const generateHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setAnimation(true);
    setTimeout(() => {
      generateLists(inputValue);
      setAnimation(false);
    }, 500);
  };

  return (
    <>
      <div className={styles.headline_keyinput}>
        ENTER NICH OR WORD THAT YOU'RE LOOKING FOR{" "}
      </div>
      <form className={styles.form_input} onSubmit={generateHandler}>
        <input
          className="form-control input_word border border-primary"
          type="text"
          placeholder="EX: Travel"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          GENERATE
        </button>
      </form>
      {animation && (
        <div className={styles.loading_zone}>
          <img className="img_fix" src={img_loading} alt="Loading..." />
        </div>
      )}
      <Result list={list} />
    </>
  );
}
