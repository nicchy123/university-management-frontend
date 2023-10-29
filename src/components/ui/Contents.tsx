"use client";
import { Layout } from "antd";
import Headers from "./Headers";


const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Headers />
      <div style={{ margin: "10px 50px" }}>{children}</div>
    </Content>
  );
};

export default Contents;
