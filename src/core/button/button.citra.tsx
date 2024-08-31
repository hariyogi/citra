import React from "react";
import classes from "./button.module.css";
import clsx from "clsx";
import GoogleIcon from "../google-icon/google-icon.citra";
import Spinner from "../spinner/Spinner.citra";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "tertiary"
  | "link"
  | "inline-link"
  | "icon";

type CitraButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  variant?: string;
  small?: boolean;
  starticon?: string;
  endicon?: string;
  loadingbutton?: boolean;
  showloading?: boolean;
  isblock?: boolean;
};

export default function CitraButton({
  title = '',
  variant = "primary",
  small = false,
  starticon,
  endicon,
  loadingbutton = false,
  showloading = false,
  isblock = false,
  ...props
}: CitraButtonProps) {
  function getIcon(name: string, isStart: boolean) {
    return (
      <GoogleIcon
        className={clsx(
          classes["icon"],
          isStart ? classes["start"] : classes["end"]
        )}
        name={name}
        size={small ? "sm" : "md"}
      />
    );
  }

  function getSpinnerColor() {
    if (props.disabled) {
      return "var(--citra-gray-60)";
    } else {
      switch (variant) {
        case "primary":
        case "danger":
          return "var(--citra-white)";
        case "warning":
          return "var(--citra-black)";
        default:
          return "var(--citra-blue-50)";
      }
    }
  }

  return (
    <button
      className={clsx(
        classes["citra-button"],
        classes[variant],
        variant == "icon" && classes["icon-only"],
        small && classes["small"],
        isblock && classes["block"]
      )}
      {...props}
    >
      {loadingbutton ? (
        <Spinner
          className={clsx(classes["spinner"], showloading && classes["show"])}
          start={showloading}
          color={getSpinnerColor()}
        />
      ) : null}
      <div
        className={clsx(!showloading && loadingbutton && classes["move-left"])}
      >
        {starticon && !showloading ? getIcon(starticon, true) : null}
        {variant != "icon" ? title : null}
        {endicon && variant != "icon" ? getIcon(endicon, false) : null}
      </div>
    </button>
  );
}
