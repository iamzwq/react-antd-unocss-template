import { request } from "~/utils/request";

export const homeApi = {
  getList: () => request.get("/list")
};
