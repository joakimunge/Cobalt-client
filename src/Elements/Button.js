import React from "react";
import { css, withStyles } from "../withStyles";

const Button = ({
  appearance = "default",
  size = "medium",
  styles,
  ...props
}) => (
  <button
    {...css(styles.button, styles[appearance], styles[size])}
    {...props}
  />
);

export default withStyles(({ themes, text }) => {
  return {
    button: {
      minWidth: "120px",
      padding: "16px 24px",
      border: "none",
      borderRadius: "4px",
      margin: "12px 12px 12px 12px",
      fontWeight: "bold"
    },

    /* Color */
    default: themes.default,
    primary: themes.primary,
    secondary: themes.secondary,
    success: themes.success,
    danger: themes.danger,

    /* Size */
    xs: text.xs,
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(Button);
