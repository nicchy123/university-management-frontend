import React from "react";

type ActionBarProps = {
    title: string,
    children: React.ReactElement | React.ReactNode 
}
const ActionBar = ({ title, children }: ActionBarProps) => {
  return <div>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>;
};

export default ActionBar;