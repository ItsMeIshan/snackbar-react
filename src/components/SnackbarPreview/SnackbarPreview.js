import React, { useContext } from "react";
import styles from "./SnackbarPreview.module.css";
import SnackbarStack from "../SnackbarStack/SnackbarStack";
import { SnackbarContext } from "../SnackbarProvider/SnackbarProvider";
import { VARIANT_OPTIONS } from "../../utils/constants";

function SnackbarPreview() {
  const { addSnackbar } = useContext(SnackbarContext);
  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Snackbar Preview</h1>
      </header>
      <SnackbarStack />
      <div className={styles.row}>
        <button
          onClick={() =>
            addSnackbar(VARIANT_OPTIONS.notice, `Here's a notice for you!!`)
          }
          className={`${styles.previewButton} ${styles.notice}`}
        >
          Notice
        </button>
        <button
          onClick={() =>
            addSnackbar(VARIANT_OPTIONS.warning, `Consider this a warning.`)
          }
          className={`${styles.previewButton} ${styles.warning}`}
        >
          Warning
        </button>
        <button
          onClick={() => addSnackbar(VARIANT_OPTIONS.success, `Done`)}
          className={`${styles.previewButton} ${styles.success}`}
        >
          Success
        </button>
        <button
          onClick={() =>
            addSnackbar(VARIANT_OPTIONS.error, `Oops!! something went wrong.`)
          }
          className={`${styles.previewButton} ${styles.error}`}
        >
          Error
        </button>
      </div>
    </div>
  );
}

export default SnackbarPreview;
