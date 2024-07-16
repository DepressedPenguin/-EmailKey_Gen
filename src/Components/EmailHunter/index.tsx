import { useRef, useState, ChangeEvent } from "react";
import styles from "./emailhunter.module.scss";

export default function EmailHunter() {
  const inputTextFile = useRef<HTMLInputElement>(null);
  const [textFile, setTextFile] = useState<string>(""); // State to hold text content of uploaded file
  const [userText, setUserText] = useState<string>(""); // State to hold text input from textarea
  const [newList, setNewList] = useState<string[]>(); // State for filtered email list

  // Function to handle clicking on "UPLOAD TEXT" button
  const handleFileText = () => {
    if (inputTextFile.current) {
      inputTextFile.current.click(); // Trigger click on hidden file input
    }
  };

  // Function to handle file upload
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader(); // Create a FileReader instance

      reader.onload = (e) => {
        const content = e.target?.result as string; // Read the file content
        setTextFile(content); // Update state with text content of the file
      };

      reader.readAsText(file); // Read the file as text
    }
  };

  // Function to handle filtering emails from user input or uploaded file content
  const handleFilter = () => {
    let contentToFilter = "";

    if (textFile) {
      contentToFilter = textFile.trim(); // Use uploaded file content if available
    } else {
      contentToFilter = userText.trim(); // Fall back to user entered text if no file uploaded
    }

    // Split content into an array of strings
    const userFiltered = contentToFilter.split(/\s+/);

    // Define the pattern for matching email addresses
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

    // Filter the list of emails based on the defined pattern
    const validationOperation = userFiltered.filter((email) =>
      email.match(emailPattern)
    );

    // Set the list of validated email addresses to display
    setNewList(validationOperation);
  };

  // Function to copy the list of filtered email addresses to the clipboard
  const handleCopy = () => {
    if (newList) {
      navigator.clipboard.writeText(newList.join("\n")); // Copy the list as a single string separated by newline
      alert("Text Copied"); // Show an alert indicating successful copy
    }
  };

  return (
    <>
      <div className={styles.headline_emailGen}>
        PAST TEXT OR UPLOAD TEXT AND START EXTRACTING EMAILS{" "}
      </div>
      <div className={styles.emailHunterCard}>
        <div className={styles.ReadMore}>
          <p className={styles.headline_tool}>ABOUT TOOL</p>
          <p className={styles.para_readme}>
            Our tool swiftly extracts email addresses from mixed text using
            advanced pattern recognition, ideal for LinkedIn users seeking job
            opportunities. It simplifies locating and contacting hiring
            managers, streamlining the job application process 😑
          </p>
          <button
            style={{ backgroundColor: "royalblue" }}
            className="btn btn-primary"
          >
            Contact Us <i className="bi bi-person-lines-fill"></i>
          </button>
        </div>
        <div className={styles.TextZoneEmails}>
          <h1>LinkedExtract</h1>
          <textarea
            className={`${styles.Textareainput} form-control`}
            name="text"
            id="text"
            placeholder="Enter text or upload a file"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setUserText(e.target.value)
            } // Update userText state on change
            value={textFile || userText} // Display uploaded file content or user input
          ></textarea>
          <div className={styles.btns_filter}>
            <button
              style={{ backgroundColor: "royalblue" }}
              onClick={handleFileText}
              className="btn btn-primary"
            >
              UPLOAD TEXT{" "}
              <i className={`${styles.icon_upload} bi bi-upload`}></i>
            </button>
            <input
              style={{ display: "none" }}
              type="file"
              name="text"
              id="text"
              ref={inputTextFile}
              onChange={handleFileUpload} // Handle file upload
            />
            <button
              style={{ backgroundColor: "royalblue" }}
              onClick={handleFilter}
              className="btn btn-primary"
            >
              FILTER <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
        </div>
        <div className={styles.ResultEmail}>
          <p>
            Emails Found : {newList?.length}{" "}
            {newList && newList.length > 0 && (
              <i className={`${styles.icon_check} fa fa-check`}></i>
            )}
          </p>
          <textarea
            value={newList?.join("\n") || ""}
            name="email"
            id="emails"
            placeholder="Filtered email addresses"
            className={`${styles.Emailsareainput} form-control`}
          ></textarea>
          <button onClick={handleCopy} className="btn btn-success">
            COPY <i className="bi bi-copy"></i>
          </button>
        </div>
      </div>
    </>
  );
}
