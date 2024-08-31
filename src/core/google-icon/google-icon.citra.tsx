import { FontSize, isFontSize } from '../type';
import './google-icon.module.css';

export interface GoogleIconProps {
  name: string; 
  size?: string | FontSize;
  color?: string;
  className?: string;
}

export default function GoogleIcon(props: GoogleIconProps) {

  function calcSize(): string {
    if (isFontSize(props.size as string)) {
      return `var(--${props.size})`;
    }
    return props.size as string;
  }

  return (
    <span
      style={{
        fontSize: calcSize(),
        color: props.color
      }} 
      className={`material-symbols-outlined ${props.className ?? ''}`}
    >
      {props.name}
    </span>
  );
}
