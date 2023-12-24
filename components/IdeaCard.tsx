import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  date: string;
  url: string;
}

const IdeaCard: React.FC<CardProps> = ({ title, date, url }) => {
  const inputDate = new Date(date);
  const formattedDate = inputDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="flex flex-col w-[310px] h-[360px] rounded-2xl shadow-xl hover:scale-105 group transition-all duration-300 cursor-pointer">
      <div className="w-full h-[180px] rounded-t-2xl overflow-hidden">
        <Image
          loading="lazy"
          className="rounded-t-2xl w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500"
          src={url}
          height={480}
          width={1080}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-center items-start w-full h-fit">
        <p className="text-slate-500 text-sm px-4 pt-6 w-full flex items-center">
          {formattedDate}
        </p>
        <h3
          className="text-2xl font-bold text-slate-900 px-4 overflow-hidden w-full flex items-center"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default IdeaCard;
