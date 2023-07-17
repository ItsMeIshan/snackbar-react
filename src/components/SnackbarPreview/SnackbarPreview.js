import React, { useContext } from "react";
import styles from "./SnackbarPreview.module.css";
import SnackbarStack from "../SnackbarStack/SnackbarStack";
import { SnackbarContext } from "../SnackbarProvider/SnackbarProvider";
import { VARIANT_OPTIONS } from "../../utils/constants";

function SnackbarPreview() {
  const { addSnackbar } = useContext(SnackbarContext);
  const [message, setMessage] = React.useState("");
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="sandwich" src="/snackbar.png" />
        <h1>Snackbar Preview</h1>
      </header>
      <SnackbarStack />
      <div className={styles.row}>
        <button
          onClick={() =>
            addSnackbar(
              VARIANT_OPTIONS.notice,
              message.length > 0 ? message : `Here's a notice for you!!`
            )
          }
          className={`${styles.previewButton} ${styles.notice}`}
        >
          Notice
        </button>
        <button
          onClick={() =>
            addSnackbar(
              VARIANT_OPTIONS.warning,
              message.length > 0 ? message : `Consider this a warning.`
            )
          }
          className={`${styles.previewButton} ${styles.warning}`}
        >
          Warning
        </button>
        <button
          onClick={() =>
            addSnackbar(
              VARIANT_OPTIONS.success,
              message.length > 0 ? message : `Done`
            )
          }
          className={`${styles.previewButton} ${styles.success}`}
        >
          Success
        </button>
        <button
          onClick={() =>
            addSnackbar(
              VARIANT_OPTIONS.error,
              message.length > 0 ? message : `Oops!! something went wrong.`
            )
          }
          className={`${styles.previewButton} ${styles.error}`}
        >
          Error
        </button>
      </div>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: "baseline" }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            value={message}
            id="message"
            className={styles.messageInput}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SnackbarPreview;
