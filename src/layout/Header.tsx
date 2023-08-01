import { useState } from "react";
import { Avatar, Badge, Button, Dropdown, Input, MenuProps, Space } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDebounceFn } from "ahooks";
import { useTranslation } from "react-i18next";
import { useGlobalStore } from "~/stores";

const randomImgUrl = "https://picsum.photos/168/32";

const ChangeLangBtn = () => {
  const lang = useGlobalStore(state => state.lang);
  const setLang = useGlobalStore(state => state.setLang);
  return (
    <Button
      type="text"
      shape="circle"
      onClick={() => {
        setLang(lang === "zh" ? "en" : "zh");
      }}
    >
      {lang === "zh" ? "中文" : "Eng"}
    </Button>
  );
};

const ChangColorBtn = () => {
  const colorPrimary = useGlobalStore(state => state.colorPrimary);
  const setColorPrimary = useGlobalStore(state => state.setColorPrimary);

  const { run: handleColorChange } = useDebounceFn(
    e => {
      setColorPrimary(e.target.value);
    },
    { wait: 500 }
  );

  return (
    <div className="relative">
      <Button
        type="primary"
        shape="circle"
        icon={<div className="i-ant-design-skin-outlined text-xl" />}
      />
      <Input
        type="color"
        className="absolute inset-0 rounded-full opacity-0 cursor-pointer"
        defaultValue={colorPrimary}
        onChange={handleColorChange}
      />
    </div>
  );
};

const AvatarMenu = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const setToken = useGlobalStore(state => state.setToken);

  const items: MenuProps["items"] = [
    {
      key: "/login",
      label: (
        <Link
          to=""
          onClick={e => {
            e.preventDefault();
            setToken("");
            navigate(`/login?redirect=${pathname}${search}`);
          }}
        >
          退出登录
        </Link>
      )
    },
    {
      key: "/system/user",
      label: <Link to="/system/user">用户设置</Link>
    }
  ];

  return (
    <Dropdown trigger={["click"]} menu={{ items }} placement="bottomRight">
      <Avatar
        src="https://p3-passport.byteimg.com/img/user-avatar/36aebd145b4f04612071b7fd57e7ad85~64x64.awebp"
        className="cursor-pointer hover:animate-spin"
      />
    </Dropdown>
  );
};

const HeaderRight = () => {
  return (
    <Space size={16}>
      <ChangeLangBtn />
      <Badge count={12}>
        <Button
          type="text"
          shape="circle"
          icon={<div className="i-ant-design-bell-outlined text-xl" />}
        />
      </Badge>
      <ChangColorBtn />
      <AvatarMenu />
    </Space>
  );
};

const LogoComponent = () => {
  const [logoUrl, setLogoUrl] = useState(randomImgUrl);
  return (
    <div
      className="hidden md:block m-4 h-32px w-[168px] bg-slate-100 rounded"
      style={{ backgroundImage: `url(${logoUrl})` }}
      onClick={() => {
        setLogoUrl(randomImgUrl + "?t=" + Date.now());
      }}
    />
  );
};

const CollapsedBtn = () => {
  const collapsed = useGlobalStore(state => state.collapsed);
  const setCollapsed = useGlobalStore(state => state.setCollapsed);
  return (
    <Button
      type="text"
      className="hidden lg:block"
      icon={
        collapsed ? (
          <div className="i-ant-design-menu-unfold-outlined text-2xl" />
        ) : (
          <div className="i-ant-design-menu-fold-outlined text-2xl" />
        )
      }
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    />
  );
};

const ProjectTitle = () => {
  const { t } = useTranslation();
  return <div className="text-3xl font-600 ml-4 gradient-text">{t("projectName")}</div>;
};

const Header = () => {
  return (
    <div className="h-16 bg-white flex items-center border-b-solid border-b border-b-slate-900/10 fixed z-10 top-0 inset-x-0">
      <LogoComponent />
      <CollapsedBtn />
      <ProjectTitle />
      <div className="ml-auto pr-4">
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
