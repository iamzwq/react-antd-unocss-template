import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button, List, Skeleton, Space } from "antd";
import { useRequest } from "ahooks";
import { useTranslation } from "react-i18next";
import { hotNewsService } from "~/api";

const HotNews = () => {
  const { t } = useTranslation();

  const platforms = useMemo(
    () => [
      { title: t("hotNews.tab.zhihu"), id: "zhihu" },
      { title: t("hotNews.tab.weibo"), id: "weibo" },
      { title: t("hotNews.tab.weixin"), id: "weixin" },
      { title: t("hotNews.tab.baidu"), id: "baidu" },
      { title: t("hotNews.tab.douyin"), id: "douyin" },
      { title: t("hotNews.tab.bilibili"), id: "bilibili" },
      { title: t("hotNews.tab.toutiao"), id: "toutiao" }
    ],
    [t]
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const platform = searchParams.get("platform") || platforms[0].id;

  const { data, loading } = useRequest(() => hotNewsService.fetchHotNews(platform), {
    refreshDeps: [platform]
  });

  const hotNews = data?.data.list;

  return (
    <div className="h-full flex flex-col">
      <Space wrap>
        {platforms.map(item => (
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
