import { useEffect } from "react";
import { App as AntdApp, ConfigProvider } from "antd";
import { useGlobalStore } from "./stores";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import Router from "./router";
import { i18next } from "~/i18n/config";

dayjs.locale("zh-cn");

const App = () => {
  const lang = useGlobalStore(state => state.lang);
  const colorPrimary = useGlobalStore(state => state.colorPrimary);

  useEffect(() => {
    i18next.changeLanguage(lang);
  }, [lang]);

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
