import React, { useContext } from "react";
import { SnackbarContext } from "../SnackbarProvider/SnackbarProvider";
import styles from "./SnackbarStack.module.css";
import Snackbar from "../Snackbar/Snackbar";

function SnackbarStack() {
  const { snackbarList } = useContext(SnackbarContext);
  return (
    <ol className={styles.wrapper}>
      {snackbarList.length > 0 &&
        snackbarList.map((item) => {
          return (
            <li className={styles.snackbarWrapper} key={item.id}>
              <Snackbar {...item} />
            </li>
          );
        })}
    </ol>
  );
}

export default SnackbarStack;
