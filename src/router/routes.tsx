import { lazy } from "react";
import { Navigate, NonIndexRouteObject, RouteObject, redirect } from "react-router-dom";
import { useGlobalStore } from "~/stores";
import lazyLoad from "./lazyLoad";
import BasicLayout from "~/layout";

export interface CustomRouteObject extends NonIndexRouteObject {
  children?: CustomRouteObject[];
  icon?: React.ReactNode | null;
  title?: string;
}

const authCheck = () => {
  const token = useGlobalStore.getState().token;
  if (!token) {
    return redirect("/login");
  }
  return null;
};

export const menuRoutes: CustomRouteObject[] = [
  {
    path: "/home",
    title: "首页",
    icon: <div className="i-ant-design-home-outlined" />,
    element: lazyLoad(lazy(() => import("~/pages/Home"))),
  },
  {
    path: "/hotNews",
    title: "聚合热榜",
    icon: <div className="i-ant-design-bars-outlined" />,
    element: lazyLoad(lazy(() => import("~/pages/HotNews"))),
  },
  {
    path: "/system",
    title: "系统管理",
    icon: <div className="i-ant-design-setting-outlined" />,
    children: [
      {
        path: "/system/user",
        title: "用户管理",
        element: lazyLoad(lazy(() => import("~/pages/User"))),
      },
    ],
  },
];

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: lazyLoad(lazy(() => import("~/pages/Login"))),
  },
  {
    path: "/",
    element: <BasicLayout />,
    loader: authCheck,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      ...menuRoutes,
    ],
  },
];
