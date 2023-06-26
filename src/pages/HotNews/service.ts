import { request } from "~/utils/request";

export interface NewsItem {
  id: number;
  type: string;
  title: string;
  link: string;
  other: string;
  createAt: string;
  updateAt: string;
}

const hotNewsService = {
  getHotNews: (type: string) => {
    return request.get<{ list: NewsItem[] }>(`/new?type=${type}`, {
      successCode: 200,
    });
  },
};

export default hotNewsService;
