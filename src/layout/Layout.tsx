import { FC, PropsWithChildren } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { clsx } from "clsx";
import { useGlobalStore } from "~/stores";
import Header from "./Header";
import Slider from "./Sider";

const { Content } = Layout;

const LayoutWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Layout className="mt-16">
        <Slider />
        {children}
      </Layout>
    </Layout>
  );
};

const MainContent = () => {
  const collapsed = useGlobalStore(state => state.collapsed);
  return (
    <Content
      className={clsx(
        "flex-1 overflow-hidden p-6 bg-white transition-all duration-200 ease-[ease]",
        collapsed ? "lg:ml-[80px]" : "lg:ml-[200px]"
      )}
    >
      <Outlet />
    </Content>
  );
};

const RootLayout: FC<PropsWithChildren> = () => {
  return (
    <LayoutWrapper>
      <MainContent />
    </LayoutWrapper>
  );
};

export default RootLayout;
