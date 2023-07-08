import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useGlobalStore } from "~/stores";
import Header from "./Header";
import Slider from "./Sider";

const { Content } = Layout;

const RootLayout = () => {
  const collapsed = useGlobalStore(state => state.collapsed);

  return (
    <Layout>
      <Header />
      <Layout className="mt-16">
        <Slider />
        <Content
          className={`flex-1 overflow-hidden p-6 bg-white ${
            collapsed ? "lg:ml-[80px]" : "lg:ml-[200px]"
          } transition-all duration-200 ease-[ease]`}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
