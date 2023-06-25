import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import { antdUtils } from "~/utils/antd";

const Home = () => {
  const onChange = (value: Dayjs) => {
    antdUtils.message?.info(value.format("YYYY-MM-DD"));
  };

  return (
    <div className="h-full p-6 overflow-y-auto">
      <Calendar onChange={onChange} />
    </div>
  );
};

export default Home;
