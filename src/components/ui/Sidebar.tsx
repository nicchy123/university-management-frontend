"use client";
import { Layout, Menu,  theme } from "antd";
import React from "react";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service.";
const Sidebar = () => {
  const { role } = getUserInfo() as any;
  const { Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Sider
        width={280}
        style={{ background: colorBgContainer, minHeight: "100vh" }}
      >
        <div style={{display:"flex", justifyContent:"center", margin:"30px 0", fontSize:"20px", fontWeight:"900"}}>PH UM</div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={sidebarItems(role)}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
