import React from "react";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "secondary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
