import React from 'react';
import './button.module.stylus';

export type ButtonVarian =
| 'primary'
| 'secondary'
| 'danger'
| 'warning'
| 'tertiary'
| 'link'
| 'inline-link'
| 'icon';

type CitraButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

export default function CitraButton(props : CitraButtonProps) {
  return (
    <button {...props}>
      {props.title}
    </button>
  )
}