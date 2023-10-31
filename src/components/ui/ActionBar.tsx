import React from "react";

type ActionBarProps = {
    title: string,
    children: React.ReactElement | React.ReactNode 
}
const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
     {children}
    </div>
  );
};

export default ActionBar;