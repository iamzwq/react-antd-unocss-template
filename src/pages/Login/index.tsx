import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalStore } from "~/stores";
import loginBgImg from "~/assets/images/login_bg.png";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const setToken = useGlobalStore(state => state.setToken);

  const onFinish = (values: any) => {
    console.log("values->", values);
    setToken("ggggaaaabbbb");

    const redirect = searchParams.get("redirect");
    navigate(redirect || "/home");
  };

  return (
    <div
      className="flex-center h-screen bg-no-repeat bg-center bg-cover"
      // style={{ backgroundImage: `url(http://www.ggapi.cn/api/acg)` }}
      style={{ backgroundImage: `url(${loginBgImg})` }}
    >
      <Form
        size="large"
        className="px-6 py-8 bg-white rounded shadow-lg w-[440px]"
        initialValues={{ remember: true, username: "admin", password: "123456" }}
        onFinish={onFinish}
      >
        <div className="text-2xl text-center font-bold mb-8">Welcome</div>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<div className="i-ant-design-user-outlined" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<div className="i-ant-design-lock-outlined" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <a href="" className="float-right">
            忘记密码
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
