import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { useTranslation } from "react-i18next";

const CardList = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-8">
      {[
        { name: t("login"), emoji: "🔑", link: "/login" },
        { name: t("mainMenu.about"), emoji: "🤭", link: "/about" },
        { name: t("mainMenu.hotNews"), emoji: "🌳", link: "/hotNews" },
        { name: t("mainMenu.personal"), emoji: "🍄", link: "/system/user" }
      ].map(item => (
        <Link
          key={item.link}
          to={item.link}
          className={clsx(
            "p-6 rounded-lg shadow-[0_6px_18px_rgba(0,0,0,0.1)] min-w-[204px] cursor-pointer transition duration-300",
            "hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:translate-y--2px"
          )}
        >
          <div className="mb-2 text-xl">{item.emoji}</div>
          <div className="text-xl font-600">{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default CardList;
