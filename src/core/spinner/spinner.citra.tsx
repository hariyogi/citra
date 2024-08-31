import { isFontSize, type FontSize } from "../type";
import classes from "./spinner.module.css";

export type SpinnerProps = {
  color?: string;
  size?: string | FontSize;
  start?: boolean;
  className?: string;
};

export default function Spinner({
  color = "var(--citra-blue-50)",
  size = "md",
  start = true,
  className = ''
}: SpinnerProps) {
  function calcSize(): string {
    if (isFontSize(size as string)) {
      return `var(--${size})`;
    }
    return size as string;
  }

  function setStyle(): React.CSSProperties {
    return {
      borderTop: `3px solid ${color}`,
      width: calcSize(),
      height: calcSize(),
      animationPlayState: start ? "running" : "paused",
    };
  }

  return <span style={setStyle()} className={`${classes['spinner']} ${className}`}></span>;
}
