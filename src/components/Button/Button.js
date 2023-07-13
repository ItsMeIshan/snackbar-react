import React from "react";

import styles from "./Button.module.css";

function Button({ className = "", ...rest }) {
  return <button className={`${styles.button} ${className}`} {...rest} />;
}

export default Button;
