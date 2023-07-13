import { useEffect, useMemo } from "react";
import { App as AntdApp, ConfigProvider } from "antd";
import { useGlobalStore } from "./stores";
import zhCN from "antd/locale/zh_CN";
import enUS from "antd/locale/en_US";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en";
import Router from "./router";
import { i18next } from "~/i18n/config";

const App = () => {
  const lang = useGlobalStore(state => state.lang);
  const colorPrimary = useGlobalStore(state => state.colorPrimary);

  const locale = useMemo(() => (lang === "zh" ? zhCN : enUS), [lang]);

  useEffect(() => {
    i18next.changeLanguage(lang);
    dayjs.locale(lang === "zh" ? "zh-cn" : "en");
  }, [lang]);

  return (
    <ConfigProvider
      locale={locale}
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
