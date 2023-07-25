import { request } from "~/utils/request";
import { NewsItem } from "./types";

const hotNewsService = {
  fetchHotNews: (type: string) => {
    return request.get<{ list: NewsItem[] }>(`/new?type=${type}`, {
      successCode: 200
    });
  }
};

export default hotNewsService;
