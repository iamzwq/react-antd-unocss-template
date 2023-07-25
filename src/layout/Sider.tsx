import { useCallback, useEffect, useMemo, useState } from "react";
import { useMatches, useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import { useTranslation } from "react-i18next";
import { CustomRouteObject, menuRoutes } from "~/router/routes";
import { useGlobalStore } from "~/stores";

const { Sider: AntdSider } = Layout;

const Sider = () => {
  const { t } = useTranslation();

  const matches = useMatches();

  const navigate = useNavigate();

  const collapsed = useGlobalStore(state => state.collapsed);

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const selectedKeys = useMemo(() => {
    return matches.length > 0 ? [matches.at(-1)?.pathname || ""] : [];
  }, [matches]);

  const generateMenuItems: any = useCallback(
    (menus: CustomRouteObject[]) => {
      return menus
        .filter(menu => menu.title)
        .map(menu => {
          return {
            key: menu.path!,
            label: t(menu.title!),
            icon: menu.icon,
            children: menu.children ? generateMenuItems(menu.children) : null
          };
        });
    },
    [t]
  );

  const menuItems = useMemo(() => generateMenuItems(menuRoutes), [generateMenuItems]);

  useEffect(() => {
    setOpenKeys(matches.map(match => match.pathname));
  }, [matches]);

  return (
    <AntdSider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="!fixed z-10 hidden lg:block"
    >
      <Menu
        className="h-[calc(100vh-64px)] !border-e-0"
        mode="inline"
        items={menuItems}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onClick={({ key }) => {
          navigate(key);
        }}
      />
    </AntdSider>
  );
};

export default Sider;
