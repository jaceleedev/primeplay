"use client";

import { useState } from "react";
import axios from "axios";
import Modal from "@/components/ui/modal";
import { useTranslations } from "next-intl";

const ContactUsSection = () => {
  const t = useTranslations("SupportPage.ContactUsSection");

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
        t("modal.success.title"),
        t("modal.success.message")
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
          t("modal.error.title"),
          error.response.data.message || t("modal.error.defaultMessage")
        );
      } else if (error.request) {
        showModal(
          "error",
          t("modal.error.networkTitle"),
          t("modal.error.networkMessage")
        );
      } else {
        showModal(
          "error",
          t("modal.error.title"),
          t("modal.error.defaultMessage")
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
          <h2 className="text-4xl font-bold">{t("title")}</h2>
          <p className="mt-4 text-lg">{t("subtitle")}</p>
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
                  {t("form.inquiryType.label")}{" "}
                  <span className="text-[#FF6D00]">*</span>{" "}
                  <span className="text-xs text-gray-500">
                    ({t("form.required")})
                  </span>
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
                    {t("form.inquiryType.placeholder")}
                  </option>
                  <option className="text-black" value="pg">
                    {t("form.inquiryType.options.pg")}
                  </option>
                  <option className="text-black" value="marketing">
                    {t("form.inquiryType.options.marketing")}
                  </option>
                  <option className="text-black" value="sns">
                    {t("form.inquiryType.options.sns")}
                  </option>
                  <option className="text-black" value="csi">
                    {t("form.inquiryType.options.csi")}
                  </option>
                  <option className="text-black" value="web/app">
                    {t("form.inquiryType.options.webApp")}
                  </option>
                  <option className="text-black" value="etc">
                    {t("form.inquiryType.options.etc")}
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
                  {t("form.customerName.label")}{" "}
                  <span className="text-[#FF6D00]">*</span>{" "}
                  <span className="text-xs text-gray-500">
                    ({t("form.required")})
                  </span>
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={form.customerName}
                  onChange={handleChange}
                  required
                  placeholder={t("form.customerName.placeholder")}
                  className="mt-1 block w-full rounded-md border-[#D9D9D9] p-3 shadow-sm placeholder:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="isBusiness"
                  className="block text-sm font-medium"
                >
                  {t("form.isBusiness.label")}{" "}
                  <span className="text-xs text-gray-500">
                    ({t("form.optional")})
                  </span>
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
                    {t("form.isBusiness.placeholder")}
                  </option>
                  <option className="text-black" value="yes">
                    {t("form.isBusiness.options.yes")}
                  </option>
                  <option className="text-black" value="no">
                    {t("form.isBusiness.options.no")}
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium">
                  {t("form.contact.label")}{" "}
                  <span className="text-[#FF6D00]">*</span>{" "}
                  <span className="text-xs text-gray-500">
                    ({t("form.required")})
                  </span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  placeholder={t("form.contact.placeholder")}
                  className="mt-1 block w-full rounded-md border-[#D9D9D9] p-3 shadow-sm placeholder:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  {t("form.email.label")}{" "}
                  <span className="text-xs text-gray-500">
                    ({t("form.optional")})
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("form.email.placeholder")}
                  className="mt-1 block w-full rounded-md border-[#D9D9D9] p-3 shadow-sm placeholder:text-[#B3B3B3] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium">
                {t("form.content.label")}{" "}
                <span className="text-[#FF6D00]">*</span>{" "}
                <span className="text-xs text-gray-500">
                  ({t("form.required")})
                </span>
              </label>
              <textarea
                id="content"
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={5}
                required
                placeholder={t("form.content.placeholder")}
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
              {isLoading
                ? t("form.submitButton.loading")
                : t("form.submitButton.default")}
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
