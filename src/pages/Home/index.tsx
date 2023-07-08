import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-8">
        {[
          { name: "Login", emoji: "🔑", link: "/login" },
          { name: "About", emoji: "🤭", link: "/about" },
          { name: "Hot News", emoji: "🌳", link: "/hotNews" },
          { name: "User Settings", emoji: "🍄", link: "/system/user" },
        ].map(item => (
          <Link
            key={item.link}
            to={item.link}
            className="p-6 rounded-lg shadow-[0_6px_18px_rgba(0,0,0,0.1)] min-w-[204px] cursor-pointer transition duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:translate-y--2px"
          >
            <div className="mb-2 text-xl">{item.emoji}</div>
            <div className="text-xl font-600">{item.name}</div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-6 space-x-9 w-5xl">
        {[
          {
            avatar:
              "https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/617a3fa0a28ef932c19ca0e2_nibras.jpeg",
            name: "Nibras Ibnomer",
            description:
              "Nibras is a Product Designer at Cleo and previously at Stint. She's working and living remotely between the UK, Portugal and Sri Lanka.",
          },
          {
            avatar:
              "https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/60c864ba15cbcc14a38ef0c4_Group%20175.png",
            name: "Uche Onyeka",
            description:
              "Uche is a Nigerian designer, content creator and community advocate. He is currently a Product Design Intern at Facebook in London.",
          },
          {
            avatar:
              "https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/609bb07d510c9340d6d6f351_Group%20175%20(3).png",
            name: "Andy Chung",
            description:
              "Andy is a Product Designer based in Vancouver. He’s currently building Read.cv with his friends Joey and Mehdi.",
          },
        ].map(item => (
          <div
            key={item.name}
            className={`w-1/3 p-[40px] rounded-5 text-left bg-[#ededfd] hover:bg-[#d7d6f1] cursor-pointer transition-background-color duration-200 ease-linear`}
          >
            <img className="w-[120px] h-[120px] rounded-full" src={item.avatar} loading="lazy" />
            <div className="mt-[140px] mb-[10px] text-3xl font-600 text-[#485ab5] font-[Basier_Circle,sans-serif]">
              {item.name}
            </div>
            <div className="color-[#333] text-sm font-[Inter_UI,sans-serif]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
