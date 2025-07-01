"use client";

import { useState } from "react";
import axios from "axios";
import Modal from "@/components/ui/modal";

const ContactUsSection = () => {
  const [form, setForm] = useState({
    inquiryType: "",
    customerName: "",
    isBusiness: "",
    email: "",
    contact: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Modal 상태 관리
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });

  // Modal 제어 함수
  const showModal = (
    type: "success" | "error",
    title: string,
    message: string
  ) => {
    setModal({
      isOpen: true,
      type,
      title,
      message,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      type: "success",
      title: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 사업자 여부 변환: "yes" -> "Y", "no" -> "N", 빈 값 -> "N" (기본값)
      const transformedData = {
        ...form,
        isBusiness:
          form.isBusiness === "yes"
            ? "Y"
            : form.isBusiness === "no"
            ? "N"
            : "N",
      };

      const response = await axios.post("/api/contact", transformedData);

      // 성공 모달 표시
      showModal(
        "success",
        "문의 접수 완료",
        "문의가 성공적으로 접수되었습니다.\n빠른 시일 내에 답변드리겠습니다."
      );

      // 폼 초기화
      setForm({
        inquiryType: "",
        customerName: "",
        isBusiness: "",
        email: "",
        contact: "",
        content: "",
      });
    } catch (error: any) {
      console.error("Submit Error:", error);

      // 에러 모달 표시
      if (error.response) {
        showModal(
          "error",
          "문의 접수 실패",
          error.response.data.message ||
            "오류가 발생했습니다.\n다시 시도해주세요."
        );
      } else if (error.request) {
        showModal(
          "error",
          "연결 오류",
          "서버에 연결할 수 없습니다.\n네트워크를 확인해주세요."
        );
      } else {
        showModal(
          "error",
          "문의 접수 실패",
          "문의 제출 중 오류가 발생했습니다.\n잠시 후 다시 시도해주세요."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-20 font-paperlogy">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Contact us</h2>
          <p className="mt-4 text-lg">
            각종 문의사항과 요청사항을 작성해주세요.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="font-inter mx-auto mt-12 max-w-4xl rounded-lg bg-white p-8 shadow-md sm:p-12"
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium"
                >
                  문의 유형 <span className="text-[#FF6D00]">*</span>{" "}
                  <span className="text-xs text-gray-500">(필수)</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-[#D9D9D9] bg-white p-3 shadow-sm invalid:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="" disabled>
                    문의 유형을 선택해주세요.
                  </option>
                  <option className="text-black" value="pg">
                    PG 관련
                  </option>
                  <option className="text-black" value="marketing">
                    마케팅 관련
                  </option>
                  <option className="text-black" value="sns">
                    SNS 관련
                  </option>
                  <option className="text-black" value="csi">
                    CSI 관련
                  </option>
                  <option className="text-black" value="web/app">
                    Web/App 개발 관련
                  </option>
                  <option className="text-black" value="etc">
                    기타문의
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
              <div>
                <label
                  htmlFor="customerName"
                  className="block text-sm font-medium"
                >
                  고객명 <span className="text-[#FF6D00]">*</span>{" "}
                  <span className="text-xs text-gray-500">(필수)</span>
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={form.customerName}
                  onChange={handleChange}
                  required
                  placeholder="이름을 입력해주세요."
                  className="mt-1 block w-full rounded-md border-[#D9D9D9] p-3 shadow-sm placeholder:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="isBusiness"
                  className="block text-sm font-medium"
                >
                  사업자 여부{" "}
                  <span className="text-xs text-gray-500">(선택)</span>
                </label>
                <select
                  id="isBusiness"
                  name="isBusiness"
                  value={form.isBusiness}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#D9D9D9] bg-white p-3 shadow-sm invalid:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  style={{
                    color: form.isBusiness === "" ? "#B3B3B3" : "black",
                  }}
                >
                  <option value="" disabled>
                    사업자 여부를 선택해주세요.
                  </option>
                  <option className="text-black" value="yes">
                    예
                  </option>
                  <option className="text-black" value="no">
                    아니오
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  이메일 <span className="text-xs text-gray-500">(선택)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="이메일 주소를 입력해주세요."
                  className="mt-1 block w-full rounded-md border-[#D9D9D9] p-3 shadow-sm placeholder:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium">
                  연락처 <span className="text-[#FF6D00]">*</span>{" "}
                  <span className="text-xs text-gray-500">(필수)</span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  placeholder="연락처를 입력해주세요."
                  className="mt-1 block w-full rounded-md border-[#D9D9D9] p-3 shadow-sm placeholder:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium">
                문의 내용 <span className="text-[#FF6D00]">*</span>{" "}
                <span className="text-xs text-gray-500">(필수)</span>
              </label>
              <textarea
                id="content"
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={5}
                required
                placeholder="문의하실 내용을 입력해주세요."
                className="mt-1 block w-full rounded-md border-[#D9D9D9] p-3 shadow-sm placeholder:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer rounded-md bg-[#FF6D00] px-16 py-3 text-lg font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:opacity-50"
            >
              {isLoading ? "전송 중..." : "전송하기"}
            </button>
          </div>
        </form>
      </div>

      {/* Modal 컴포넌트 추가 */}
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        type={modal.type}
        title={modal.title}
        message={modal.message}
      />
    </section>
  );
};

export default ContactUsSection;
