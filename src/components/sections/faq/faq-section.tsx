"use client";

import { useState, useEffect } from "react";
import { faqData, FAQItem } from "@/data/faq-data";

const ITEMS_PER_PAGE = 10;

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("pg");
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const currentCategoryData = faqData.find(
    (category) => category.id === selectedCategory
  );

  if (!currentCategoryData) return null;

  const totalItems = currentCategoryData.items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = currentCategoryData.items.slice(startIndex, endIndex);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setIsCategoryModalOpen(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 뷰포트 변경 시 모달 자동 닫기
  useEffect(() => {
    const handleResize = () => {
      // md 브레이크포인트(768px) 이상일 때 모달 닫기
      if (window.innerWidth >= 768) {
        setIsCategoryModalOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 페이지 제목 */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1
            className="font-pretendard text-black text-center font-bold leading-normal"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            자주 묻는 질문
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 데스크탑 사이드바 */}
          <div className="hidden md:block md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <ul className="space-y-2">
                {faqData.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-md transition-colors font-pretendard cursor-pointer ${
                        selectedCategory === category.id
                          ? "bg-[#FF6D00] text-white font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 메인 콘텐츠 영역 */}
          <div className="flex-1">
            {/* 모바일 카테고리 버튼 */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setIsCategoryModalOpen(true)}
                className="w-full flex items-center px-4 py-4 bg-transparent font-pretendard font-semibold text-xl text-gray-900 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
              >
                <span>{currentCategoryData.name}</span>
                <svg
                  width="24"
                  height="24"
                  className="fill-current opacity-60 flex-shrink-0 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11.733c-.267 0-.533-.133-.667-.267L3.467 7.6c-.4-.4-.4-1.067 0-1.467.4-.4 1.067-.4 1.467 0L8 9.2l3.067-3.067c.4-.4 1.067-.4 1.467 0 .4.4.4 1.067 0 1.467l-3.867 3.867c-.134.134-.4.267-.667.267z" />
                </svg>
              </button>
            </div>

            {/* 모바일 카테고리 Bottom Sheet Modal */}
            <div className={`modal ${isCategoryModalOpen ? "modal-open" : ""}`}>
              <div className="modal-box absolute bottom-0 left-0 right-0 mx-auto mb-0 w-11/12 max-w-md rounded-t-xl rounded-b-none">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-pretendard font-semibold text-lg text-black">
                    카테고리 선택
                  </h3>
                  <button
                    onClick={() => setIsCategoryModalOpen(false)}
                    className="btn btn-sm btn-circle btn-ghost"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-2">
                  {faqData.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-4 rounded-lg transition-colors font-pretendard font-medium ${
                        selectedCategory === category.id
                          ? "bg-[#FF6D00] text-white"
                          : "text-gray-700 hover:bg-gray-100 bg-gray-50"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div
                className="modal-backdrop"
                onClick={() => setIsCategoryModalOpen(false)}
              >
                <button>close</button>
              </div>
            </div>

            {/* FAQ 아코디언 */}
            <div key={selectedCategory} className="space-y-4">
              {currentItems.map((item, index) => (
                <div
                  key={item.id}
                  className="collapse collapse-arrow bg-white border border-gray-200"
                >
                  <input type="checkbox" defaultChecked={index === 0} />
                  <div className="collapse-title font-semibold font-pretendard text-base sm:text-lg">
                    {item.question}
                  </div>
                  <div className="collapse-content font-pretendard text-sm sm:text-base text-gray-700">
                    <p className="whitespace-pre-line">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="join">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <input
                      key={index + 1}
                      className={`join-item btn btn-square ${
                        currentPage === index + 1
                          ? "bg-[#FF6D00] border-[#FF6D00] text-white hover:bg-[#e55a00] hover:border-[#e55a00]"
                          : ""
                      }`}
                      type="radio"
                      name={`pagination-${selectedCategory}`}
                      aria-label={(index + 1).toString()}
                      checked={currentPage === index + 1}
                      onChange={() => handlePageChange(index + 1)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
