import { Avatar, Badge, Button, Dropdown, Input, MenuProps, Space } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDebounceFn } from "ahooks";
import { useGlobalStore } from "~/stores";

const HeaderRight = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const setToken = useGlobalStore(state => state.setToken);
  const setColorPrimary = useGlobalStore(state => state.setColorPrimary);
  const colorPrimary = useGlobalStore(state => state.colorPrimary);

  const { run: handleColorChange } = useDebounceFn(
    e => {
      setColorPrimary(e.target.value);
    },
    { wait: 500 }
  );

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
      ),
    },
    {
      key: "/system/user",
      label: <Link to="/system/user">用户设置</Link>,
    },
  ];

  return (
    <Space size={16}>
      <Badge count={12}>
        <Button
          type="text"
          shape="circle"
          icon={<div className="i-ant-design-bell-outlined text-xl" />}
        />
      </Badge>
      <div className="relative">
        <Button
          type="primary"
          shape="circle"
          icon={<div className="i-ant-design-skin-outlined text-xl" />}
        />
        <Input
          type="color"
          className="absolute top-2/4 left-2/4 translate-y--1/2 translate-x--1/2 w-8 h-8 rounded-full opacity-0 cursor-pointer"
          defaultValue={colorPrimary}
          onChange={handleColorChange}
        />
      </div>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Avatar
          src="https://p3-passport.byteimg.com/img/user-avatar/36aebd145b4f04612071b7fd57e7ad85~64x64.awebp"
          className="cursor-pointer"
        />
      </Dropdown>
    </Space>
  );
};

const Header = () => {
  const collapsed = useGlobalStore(state => state.collapsed);
  const setCollapsed = useGlobalStore(state => state.setCollapsed);

  return (
    <div className="h-16 bg-white flex items-center border-b-solid border-b border-b-slate-900/10 fixed z-10 top-0 left-0 right-0">
      <div
        className="m-4 h-32px w-[168px] bg-gray rounded"
        style={{ backgroundImage: `url(https://picsum.photos/168/32)` }}
      />
      <Button
        type="text"
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
      <div className="text-2xl font-600 ml-4">Admin Templete</div>
      <div className="ml-auto pr-4">
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
