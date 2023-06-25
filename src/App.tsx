import { App as AntdApp, ConfigProvider } from "antd";
import { useGlobalStore } from "./stores";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import Router from "./router";

dayjs.locale("zh-cn");

const App = () => {
  const colorPrimary = useGlobalStore(state => state.colorPrimary);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: colorPrimary,
        },
      }}
    >
      <AntdApp>
        <Router />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
