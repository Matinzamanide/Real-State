import axios from "axios";
import { useEffect, useState } from "react";
import type { Article } from "../../types/type";
import ArticleCard from "../../components/article-card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles`)
      .then((res) => {
        setArticles(res.data.articles || res.data);
        setTotalPages(res.data.totalPages || Math.ceil(res.data.length / articlesPerPage));
      })
      .catch((err) => console.error("Error fetching articles:", err));
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // ایجاد آرایه شماره صفحات برای نمایش
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="pt-32 bg-white min-h-screen" dir="rtl">
      {/* بخش مقالات پربازدید */}
      <div className="mb-20">
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            مقالات پربازدید
          </h1>
          <span className="block w-16 h-1 bg-[#FFB53F] mt-4 rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-20 w-[90%] md:w-[87%] mx-auto">
          {articles.slice(0, 6).map((article) => (
            <ArticleCard key={article.id} {...article} itemsPerView={1} />
          ))}
        </div>
      </div>

      {/* بخش همه مقالات */}
      <div className="mb-12">
        <div className="flex flex-col justify-center items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            همه مقالات
          </h2>
          <span className="block w-16 h-1 bg-[#FFB53F] mt-4 rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-[90%] md:w-[87%] mx-auto mb-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} itemsPerView={1} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          {/* دکمه قبلی */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg transition-all duration-300 ${
              currentPage === 1
                ? "opacity-30 cursor-not-allowed text-gray-400"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaArrowRight className="w-5 h-5" />
          </button>

          {/* شماره صفحات */}
          <div className="flex gap-2">
            {getPageNumbers().map((page, index) =>
              page === "..." ? (
                <span
                  key={`ellipsis-${index}`}
                  className="px-4 py-2 text-gray-400"
                >
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page as number)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === page
                      ? "bg-[#182338] text-white font-bold"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          {/* دکمه بعدی */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg transition-all duration-300 ${
              currentPage === totalPages
                ? "opacity-30 cursor-not-allowed text-gray-400"
                : "text-gray-700 hover:bg-gray-100"
          }`}
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* نمایش تعداد کل صفحات */}
      <div className="text-center mt-4 text-sm text-gray-500">
        صفحه {currentPage} از {totalPages}
      </div>
    </div>
  );
};

export default Articles;