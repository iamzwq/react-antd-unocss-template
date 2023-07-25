import { request } from "~/utils/request";

const homeApi = {
  getList: () => request.get("/list")
};

export default homeApi;
