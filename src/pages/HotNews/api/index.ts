import { request } from "~/utils/request";
import { NewsItem } from "./types";

const hotNewsApi = {
  fetchHotNews: (type: string) => {
    return request.get<{ list: NewsItem[] }>(`/new?type=${type}`, {
      successCode: 200
    });
  }
};

export default hotNewsApi;
