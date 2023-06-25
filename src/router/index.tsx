import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "antd";
import { antdUtils } from "~/utils/antd";
import { routes } from "./routes";

// eslint-disable-next-line
export const router = createBrowserRouter(routes, {
  basename: "/",
});

const Router = () => {
  const { message, modal, notification } = App.useApp();

  useEffect(() => {
    antdUtils.setMessageInstance(message);
    antdUtils.setNotificationInstance(notification);
    antdUtils.setModalInstance(modal);
  }, [notification, message, modal]);

  return <RouterProvider router={router} />;
};

export default Router;
