import React from "react";

interface IInputLoginProps {
  type?: string;
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  // opcional
  onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        type={props.type}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? props.onPressEnter && props.onPressEnter() : undefined}
        ref={ref}
      ></input>
    </label>
  );
});
