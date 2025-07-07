import { useTranslations } from "next-intl";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  type,
  title,
  message,
}) => {
  const t = useTranslations("SupportPage.Modal");

  if (!isOpen) return null;

  const iconColor = type === "success" ? "text-green-500" : "text-red-500";
  const titleColor = type === "success" ? "text-green-600" : "text-red-600";

  return (
    <div className="modal modal-open">
      <div className="modal-box relative max-w-md">
        {/* 아이콘 */}
        <div className="flex justify-center mb-4">
          {type === "success" ? (
            <svg
              className={`w-16 h-16 ${iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              className={`w-16 h-16 ${iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          )}
        </div>

        {/* 제목 */}
        <h3 className={`font-bold text-lg text-center mb-2 ${titleColor}`}>
          {title}
        </h3>

        {/* 메시지 */}
        <p className="text-center text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
          {message}
        </p>

        {/* 버튼 */}
        <div className="modal-action justify-center">
          <button
            onClick={onClose}
            className={`btn px-8 py-2 text-white font-medium rounded-lg ${
              type === "success"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {t("confirm")}
          </button>
        </div>
      </div>

      {/* 배경 클릭 시 닫기 */}
      <div className="modal-backdrop" onClick={onClose}>
        <button>close</button>
      </div>
    </div>
  );
};

export default Modal;
