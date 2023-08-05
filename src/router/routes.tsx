import { lazy } from "react";
import { Navigate, NonIndexRouteObject, RouteObject, redirect } from "react-router-dom";
import { useGlobalStore } from "~/stores";
import lazyLoad from "./lazyLoad";
import RootLayout from "~/layout/Layout";

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
    title: "mainMenu.home",
    icon: <div className="i-ant-design-home-outlined" />,
    element: lazyLoad(lazy(() => import("~/pages/Home")))
  },
  {
    path: "/about",
    title: "mainMenu.about",
    icon: <div className="i-ant-design-credit-card-outlined" />,
    element: lazyLoad(lazy(() => import("~/pages/About")))
  },
  {
    path: "/hotNews",
    title: "mainMenu.hotNews",
    icon: <div className="i-ant-design-bars-outlined" />,
    element: lazyLoad(lazy(() => import("~/pages/HotNews")))
  },
  {
    path: "/system",
    title: "mainMenu.system",
    icon: <div className="i-ant-design-setting-outlined" />,
    children: [
      {
        path: "/system/user",
        title: "mainMenu.personal",
        element: lazyLoad(lazy(() => import("~/pages/User")))
      }
    ]
  },
  {
    path: "/demo",
    title: "mainMenu.demo",
    icon: <div className="i-ant-design-video-camera-outlined" />,
    children: [
      {
        path: "/demo/scroll-snap",
        title: "sroll-snap",
        element: lazyLoad(lazy(() => import("~/pages/Demo/ScrollSnap")))
      }
    ]
  }
];

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: lazyLoad(lazy(() => import("~/pages/Login")))
  },
  {
    path: "/",
    element: <RootLayout />,
    loader: authCheck,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      ...menuRoutes
    ]
  }
];
