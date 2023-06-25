import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, List, Skeleton, Space } from "antd";
import { useRequest } from "ahooks";
import hotNewsService from "./service";

const NAVS = [
  { title: "知乎", id: "zhihu" },
  { title: "微博", id: "weibo" },
  { title: "微信", id: "weixin" },
  { title: "百度", id: "baidu" },
  { title: "抖音", id: "douyin" },
  { title: "B站", id: "bilibili" },
  { title: "头条", id: "toutiao" },
];

const HotNews = () => {
  const [active, setActive] = useState(NAVS[0].id);

  const { data, loading } = useRequest(() => hotNewsService.getHotNews(active), {
    refreshDeps: [active],
  });

  const hotNews = data?.data.list;

  return (
    <div className="h-full flex flex-col">
      <Space wrap>
        {NAVS.map(nav => (
          <Button
            type={active === nav.id ? "primary" : "default"}
            key={nav.id}
            onClick={() => setActive(nav.id)}
          >
            {nav.title}
          </Button>
        ))}
      </Space>

      <List
        itemLayout="horizontal"
        dataSource={hotNews || Array(10).fill("")}
        bordered
        className="flex-1 overflow-y-auto mt-4"
        renderItem={item => (
          <List.Item key={item.id}>
            <Skeleton avatar={false} title={false} loading={loading} active>
              <List.Item.Meta
                title={
                  <Link to={item.link} target="_blank">
                    {item.title}
                  </Link>
                }
              />
              <div>{item.other}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default HotNews;
