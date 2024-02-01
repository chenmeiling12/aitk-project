import { routerList } from "@/routes";
import { Avatar, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const headerStyle: React.CSSProperties = {
  textAlign: "right",
  paddingInline: 20,
  backgroundColor: "#fff",
  border: "0.1rem solid #ddd",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
};

const contentStyle: React.CSSProperties = {
  padding: "1rem",
  backgroundColor: "#fff",
};

const siderStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRight: "0.1rem solid #ddd",
};

const siderHeaderStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  color: "#2853E3",
  fontSize: "1rem",
};

const layoutStyle = {
  width: "calc(100% )",
  height: "100vh",
};

export const Home = () => {
  const navigate = useNavigate();

  const pathname = useLocation().pathname;

  const [menuInformation, setMenuInformation] = useState<{
    openKeys: string[];
    selectedKeys: string[];
  }>({
    openKeys: [pathname],
    selectedKeys: [pathname],
  });

  return (
    <div>
      <Layout style={layoutStyle}>
        <Sider width="223" style={siderStyle}>
          <Header style={siderHeaderStyle}></Header>
          <Menu
            mode="inline"
            items={routerList}
            openKeys={menuInformation.openKeys}
            selectedKeys={menuInformation.selectedKeys}
            onOpenChange={(openKeys) => {
              setMenuInformation({ ...menuInformation, openKeys: openKeys });
            }}
            onSelect={({ key, keyPath }) => {
              setMenuInformation({
                ...menuInformation,
                selectedKeys: [keyPath[0]],
              });
              navigate(key);
            }}
          />
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <Avatar size={55} icon={<UserOutlined />} />
          </Header>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
