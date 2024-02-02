import { Avatar } from "antd";
import Sider from "antd/es/layout/Sider";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "./menu";

export const Home = () => {
  return (
    <div>
      <Layout style={{ width: "calc(100%)", height: "100vh" }}>
        <Sider
          width="223"
          style={{ backgroundColor: "#fff" }}
          className="border-x border-gray-200"
        >
          <Header className="bg-white text-xs" />
          <Menu />
        </Sider>
        <Layout>
          <Header className="text-right pe-6 border-y border-slate-300 flex justify-end items-center bg-white">
            <Avatar size={55} icon={<UserOutlined />} />
          </Header>
          <Content className="bg-white p-4">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
