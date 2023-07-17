import React, { useContext } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Snackbar.module.css";
import { SnackbarContext } from "../SnackbarProvider/SnackbarProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Snackbar({ message, variant, id }) {
  const { removeSnackbar } = useContext(SnackbarContext);
  const Icon = ICONS_BY_VARIANT[variant];
  const extraStyles = styles[variant];
  return (
    <div className={`${styles.snackbar} ${extraStyles}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {message === "" ? "Cool Snackbar!" : message}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => {
          removeSnackbar(id);
        }}
        aria-label="dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Snackbar;
