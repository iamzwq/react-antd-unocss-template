import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Slider from "./Sider";

const { Content } = Layout;

const BasicLayout = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Slider />
        <Content className="flex-1 overflow-hidden p-6 bg-white">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
