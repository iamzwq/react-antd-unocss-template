import { Link, useSearchParams } from "react-router-dom";
import { Button, List, Skeleton, Space } from "antd";
import { useRequest } from "ahooks";
import hotNewsService from "./service";

const PLATFORMS = [
  { title: "知乎", id: "zhihu" },
  { title: "微博", id: "weibo" },
  { title: "微信", id: "weixin" },
  { title: "百度", id: "baidu" },
  { title: "抖音", id: "douyin" },
  { title: "B站", id: "bilibili" },
  { title: "头条", id: "toutiao" },
];

const HotNews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const platform = searchParams.get("platform") || PLATFORMS[0].id;

  const { data, loading } = useRequest(() => hotNewsService.fetchHotNews(platform), {
    refreshDeps: [platform],
  });

  const hotNews = data?.data.list;

  return (
    <div className="h-full flex flex-col">
      <Space wrap>
        {PLATFORMS.map(item => (
          <Button
            type={platform === item.id ? "primary" : "default"}
            key={item.id}
            onClick={() => {
              setSearchParams({ platform: item.id });
            }}
          >
            {item.title}
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
