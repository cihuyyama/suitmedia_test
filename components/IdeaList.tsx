"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import IdeaCard from "./IdeaCard";
import useIdeaList from "@/hooks/useIdeaList";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const IdeaList: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentperPage, setCurrentPerPage] = useState<number>(8);

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    const offset = searchParams.get("offset") || 8;
    setCurrentPerPage(Number(offset));
    setCurrentPage(Number(page));
  }, [searchParams]);

  const { data, error, isLoading } = useIdeaList({
    page: currentPage,
    perPage: currentperPage,
  });

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center py-[100px]">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-sky-400"></div>
      </div>
    );
  if (error) return <h1 className="text-red-600">Error fetching data</h1>;
  if (!data) return <h1 className="text-red-600">Error Internal</h1>;

  const { data: ideas } = data;

  const startIndex = (currentPage - 1) * currentperPage + 1;
  const endIndex = Math.min(currentPage * currentperPage, data.meta.total);
  const startPage = Math.max(1, currentPage - Math.floor(currentperPage / 2));

  return (
    <div className="flex flex-col justify-center items-center pb-12">
      <div className="w-full h-full max-w-[1300px] mt-8 flex flex-row justify-between">
        <div>
          Showing {startIndex} - {endIndex} of {data.meta.total}
        </div>
        <div className="w-fit flex flex-row  gap-8">
          <div className="w-fit">
            <label htmlFor="perPage">Show per page:</label>
            <select
              className="border-2 rounded-full py-1 pl-2 pr-4 ml-2"
              id="perPage"
              value={currentperPage}
              onChange={(e) => {
                setCurrentPerPage(Number(e.target.value));
                window.history.pushState(
                  {},
                  "",
                  `${pathname}?page=${currentPage}&offset=${e.target.value}`
                );
              }}
            >
              <option value={8}>10</option>
              <option value={20}>20</option>
              <option value={48}>50</option>
            </select>
          </div>

          <div className="w-fit">
            <label htmlFor="sortOption">Sort by:</label>
            <select
              className="border-2 rounded-full py-1 pl-2 pr-4 ml-2"
              id="sortOption"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-wrap justify-center px-20 py-8 gap-8 overflow-hidden">
        {ideas.map((item: Article) => (
          <IdeaCard
            key={item.id}
            date={item.published_at}
            title={item.title}
            url={item.medium_image[0]?.url}
          />
        ))}
      </div>

      <div className="flex justify-center my-4">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            window.history.pushState(
              {},
              "",
              `${pathname}?page=${currentPage - 1}&offset=${currentperPage}`
            );
            setCurrentPage(currentPage - 1);
          }}
          className={`mr-2 px-4 py-2 transition-all ${currentPage === 1 ? '' : 'hover:scale-125'} `}
        >
          <FaChevronLeft />
        </button>

        {Array.from({ length: 8 }, (_, index) => (
          <button
            key={startPage + index}
            onClick={() => {
              window.history.pushState(
                {},
                "",
                `${pathname}?page=${startPage + index}&offset=${currentperPage}`
              );
              setCurrentPage(startPage + index);
            }}
            className={` mx-2 px-[10px] transition-all hover:scale-125 
            ${
              currentPage === startPage + index ? "border-[#ff6600] border-2 rounded-full" : ""
            }`}
          >
            {startPage + index}
          </button>
        ))}

        <button
          onClick={() => {
            window.history.pushState(
              {},
              "",
              `${pathname}?page=${currentPage + 1}&offset=${currentperPage}`
            );
            setCurrentPage(currentPage + 1);
          }}
          className="ml-2 px-4 py-2 transition-all hover:scale-125"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default IdeaList;
