import "@/components/ui/animations.css";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
      <div
        className="fade-out-down-infinite"
        style={{ animationDelay: "3.5s" }}
      >
        <div className="w-8 h-8">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
              fill="rgba(255,255,255,0.8)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
