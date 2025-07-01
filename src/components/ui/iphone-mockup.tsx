import Image from "next/image";

interface IPhoneMockupProps {
  screenImage: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const IPhoneMockup = ({
  screenImage,
  alt = "iPhone Screen",
  className = "",
  width = 280,
  height = 560,
}: IPhoneMockupProps) => {
  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* 원본 iPhone SVG - 스크린 영역만 투명하게 */}
      <svg
        viewBox="0 0 213.04 429.61"
        className="absolute inset-0 w-full h-full drop-shadow-2xl z-10"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <style>{`
            .cls-1 { fill: #5e465d; }
            .cls-2 { fill: url(#linear-gradient-13); }
            .cls-3 { fill: url(#linear-gradient-2); }
            .cls-4 { fill: url(#linear-gradient-10); }
            .cls-5 { fill: url(#linear-gradient-12); }
            .cls-6 { fill: url(#radial-gradient); }
            .cls-6, .cls-7 { mix-blend-mode: multiply; }
            .cls-8 { fill: #706f6f; }
            .cls-8, .cls-9 { mix-blend-mode: screen; }
            .cls-10 { fill: url(#linear-gradient-4); }
            .cls-11 { fill: url(#linear-gradient-3); }
            .cls-12 { fill: url(#linear-gradient-5); }
            .cls-13 { isolation: isolate; }
            .cls-14 { fill: url(#linear-gradient-8); }
            .cls-15 { fill: url(#linear-gradient-14); }
            .cls-16 { fill: url(#linear-gradient-7); }
            .cls-17 { fill: url(#linear-gradient-9); }
            .cls-18 { fill: url(#linear-gradient-11); }
            .cls-19 { fill: url(#linear-gradient-6); }
            .cls-20 { fill: #1d1d1b; }
            .cls-9 { fill: url(#radial-gradient-2); }
            .cls-21 { fill: url(#linear-gradient); }
          `}</style>

          {/* 수정된 스크린 영역 마스크 - 약간 축소 */}
          <mask id="iphone-frame-mask">
            <rect width="100%" height="100%" fill="white" />
            {/* 스크린 영역을 검은색으로 하여 투명하게 만들기 - 약간 축소된 크기 */}
            <path
              d="M12.5 34.65 
                     C12.5 21.36 23.27 10.63 36.56 10.63 
                     L176.45 10.63 
                     C189.74 10.63 200.5 21.36 200.5 34.65 
                     L200.5 394.93 
                     C200.5 408.22 189.74 418.98 176.45 418.98 
                     L36.56 418.98 
                     C23.27 418.98 12.5 408.22 12.5 394.93 
                     Z"
              fill="black"
            />
          </mask>

          {/* 모든 그라디언트 정의들 - 원본 그대로 */}
          <linearGradient
            id="linear-gradient"
            x1="-469.34"
            y1="422.91"
            x2="-417.56"
            y2="422.91"
            gradientTransform="translate(634.72 579.1) rotate(90)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#68595f" />
            <stop offset=".02" stopColor="#896e80" />
            <stop offset=".04" stopColor="#5e3b5b" />
            <stop offset=".08" stopColor="#2b1d2a" />
            <stop offset=".11" stopColor="#704a6a" />
            <stop offset=".9" stopColor="#615060" />
            <stop offset=".94" stopColor="#2b1d2a" />
            <stop offset=".96" stopColor="#5e3b5b" />
            <stop offset=".98" stopColor="#845675" />
            <stop offset="1" stopColor="#5b4a5c" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="-469.33"
            y1="421.99"
            x2="-417.56"
            y2="421.99"
            gradientTransform="translate(634.72 579.1) rotate(90)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#676067" />
            <stop offset=".06" stopColor="#654e63" />
            <stop offset=".19" stopColor="#786f77" />
            <stop offset=".81" stopColor="#786f77" />
            <stop offset=".92" stopColor="#654e63" />
            <stop offset="1" stopColor="#676067" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="-480.24"
            y1="877.6"
            x2="-447.44"
            y2="877.6"
            gradientTransform="translate(-876.9 579.1) rotate(90) scale(1 -1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#68595f" />
            <stop offset=".02" stopColor="#896e80" />
            <stop offset=".04" stopColor="#5e3b5b" />
            <stop offset=".08" stopColor="#2d1e2c" />
            <stop offset=".11" stopColor="#704a6a" />
            <stop offset=".9" stopColor="#615060" />
            <stop offset=".94" stopColor="#2d1e2c" />
            <stop offset=".96" stopColor="#5e3b5b" />
            <stop offset=".98" stopColor="#845675" />
            <stop offset="1" stopColor="#5b4a5c" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-4"
            x1="-480.23"
            y1="877.08"
            x2="-447.44"
            y2="877.08"
            gradientTransform="translate(-876.9 579.1) rotate(90) scale(1 -1)"
            xlinkHref="#linear-gradient-2"
          />
          <linearGradient
            id="linear-gradient-5"
            x1="1.42"
            y1="131.68"
            x2="1.42"
            y2="98.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#68595f" />
            <stop offset=".05" stopColor="#2d1e2c" />
            <stop offset=".52" stopColor="#5e3b5b" />
            <stop offset=".96" stopColor="#2d1e2c" />
            <stop offset="1" stopColor="#5b4a5c" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-6"
            x1="-438.97"
            x2="-406.17"
            xlinkHref="#linear-gradient-3"
          />
          <linearGradient
            id="linear-gradient-7"
            x1="-438.96"
            y1="877.08"
            x2="-406.17"
            y2="877.08"
            gradientTransform="translate(-876.9 579.1) rotate(90) scale(1 -1)"
            xlinkHref="#linear-gradient-2"
          />
          <linearGradient
            id="linear-gradient-8"
            y1="172.94"
            y2="140.14"
            xlinkHref="#linear-gradient-5"
          />
          <linearGradient
            id="linear-gradient-9"
            x1="-511.23"
            x2="-494.39"
            xlinkHref="#linear-gradient-3"
          />
          <linearGradient
            id="linear-gradient-10"
            x1="-511.22"
            y1="877.08"
            x2="-494.39"
            y2="877.08"
            gradientTransform="translate(-876.9 579.1) rotate(90) scale(1 -1)"
            xlinkHref="#linear-gradient-2"
          />
          <linearGradient
            id="linear-gradient-11"
            y1="84.72"
            x2="1.42"
            y2="67.88"
            xlinkHref="#linear-gradient-5"
          />
          <linearGradient
            id="linear-gradient-12"
            x1="120.43"
            y1="26.03"
            x2="120.43"
            y2="20.17"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#666" />
            <stop offset="1" stopColor="#010104" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-13"
            x1="117.01"
            y1="-364.04"
            x2="117.01"
            y2="-367.39"
            gradientTransform="translate(237.45 -342.39) rotate(-180)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#0b131c" />
            <stop offset="1" stopColor="#354039" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-14"
            x1="121.48"
            y1="24.29"
            x2="119.38"
            y2="22.19"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#231f20" />
            <stop offset=".08" stopColor="#212226" />
            <stop offset=".2" stopColor="#1f2c37" />
            <stop offset=".33" stopColor="#1a3c53" />
            <stop offset=".47" stopColor="#13537b" />
            <stop offset=".62" stopColor="#0a70ae" />
            <stop offset=".78" stopColor="#0093eb" />
            <stop offset=".78" stopColor="#0095ee" />
            <stop offset=".8" stopColor="#0387d6" />
            <stop offset=".84" stopColor="#0d689f" />
            <stop offset=".88" stopColor="#154d71" />
            <stop offset=".91" stopColor="#1b394e" />
            <stop offset=".95" stopColor="#1f2a34" />
            <stop offset=".98" stopColor="#222225" />
            <stop offset="1" stopColor="#231f20" />
          </linearGradient>
          <radialGradient
            id="radial-gradient"
            cx="120.43"
            cy="23.24"
            fx="120.43"
            fy="23.24"
            r="1.49"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#231f20" />
            <stop offset=".2" stopColor="#165068" />
            <stop offset=".38" stopColor="#0c78a1" />
            <stop offset=".54" stopColor="#0594cb" />
            <stop offset=".66" stopColor="#01a6e4" />
            <stop offset=".73" stopColor="#00adee" />
            <stop offset=".76" stopColor="#01a5e3" />
            <stop offset=".81" stopColor="#0693c8" />
            <stop offset=".87" stopColor="#0d749b" />
            <stop offset=".94" stopColor="#184a5e" />
            <stop offset="1" stopColor="#231f20" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-2"
            cx="121.25"
            cy="24.02"
            fx="121.25"
            fy="24.02"
            r=".53"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ccc" />
            <stop offset=".02" stopColor="#c4c4c4" />
            <stop offset=".22" stopColor="#898989" />
            <stop offset=".41" stopColor="#585858" />
            <stop offset=".59" stopColor="#313131" />
            <stop offset=".75" stopColor="#161616" />
            <stop offset=".89" stopColor="#050505" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
        </defs>

        <g className="cls-13">
          <g id="_레이어_2">
            <g id="Layer_1" className="cls-7">
              <g mask="url(#iphone-frame-mask)">
                {/* 메인 프레임 - 스크린 영역 제외하고 표시 */}
                <path
                  className="cls-1"
                  d="M177.63,0H35.37C16.83,0,1.8,15.03,1.8,33.57v362.47c0,18.54,15.03,33.57,33.57,33.57h142.26c18.54,0,33.57-15.03,33.57-33.57V33.57c0-18.54-15.03-33.57-33.57-33.57ZM201,395.43c0,13.29-10.77,24.05-24.05,24.05H36.06c-13.29,0-24.05-10.77-24.05-24.05V34.18c0-13.29,10.77-24.05,24.05-24.05h140.89c13.29,0,24.05,10.77,24.05,24.05v361.24Z"
                />
                <path
                  className="cls-8"
                  d="M177.37,1H35.63C17.5,1,2.8,15.7,2.8,33.83v361.94c0,18.13,14.7,32.83,32.83,32.83h141.74c18.13,0,32.83-14.7,32.83-32.83V33.83c0-18.13-14.7-32.83-32.83-32.83ZM209.2,395.51c0,17.73-14.37,32.1-32.1,32.1H35.9c-17.73,0-32.1-14.37-32.1-32.1V34.1C3.8,16.37,18.17,2,35.9,2h141.21c17.73,0,32.1,14.37,32.1,32.1v361.42Z"
                />
                <path
                  className="cls-20"
                  d="M176.79,3.28H36.21c-17.05,0-30.87,13.82-30.87,30.87v361.32c0,17.05,13.82,30.87,30.87,30.87h140.58c17.05,0,30.87-13.82,30.87-30.87V34.15c0-17.05-13.82-30.87-30.87-30.87ZM201,395.43c0,13.29-10.77,24.05-24.05,24.05H36.06c-13.29,0-24.05-10.77-24.05-24.05V34.18c0-13.29,10.77-24.05,24.05-24.05h140.89c13.29,0,24.05,10.77,24.05,24.05v361.24Z"
                />

                {/* 사이드 버튼들 */}
                <g>
                  <g>
                    <rect
                      className="cls-21"
                      x="211.2"
                      y="109.76"
                      width="1.23"
                      height="51.78"
                    />
                    <path
                      className="cls-3"
                      d="M212.43,161.55v-51.77l.61.67c-.31,5.51-.29,44.92,0,50.42l-.61.67Z"
                    />
                  </g>
                  <g>
                    <rect
                      className="cls-11"
                      x=".35"
                      y="98.87"
                      width=".7"
                      height="32.8"
                    />
                    <path
                      className="cls-10"
                      d="M.35,131.67v-32.79l-.35.43c.18,3.49.16,28.46,0,31.94l.35.43Z"
                    />
                    <rect
                      className="cls-12"
                      x="1.05"
                      y="98.87"
                      width=".75"
                      height="32.8"
                    />
                  </g>
                  <g>
                    <rect
                      className="cls-19"
                      x=".35"
                      y="140.13"
                      width=".7"
                      height="32.8"
                    />
                    <path
                      className="cls-16"
                      d="M.35,172.93v-32.79l-.35.43c.18,3.49.16,28.46,0,31.94l.35.43Z"
                    />
                    <rect
                      className="cls-14"
                      x="1.05"
                      y="140.14"
                      width=".75"
                      height="32.8"
                    />
                  </g>
                  <g>
                    <rect
                      className="cls-17"
                      x=".35"
                      y="67.88"
                      width=".7"
                      height="16.84"
                    />
                    <path
                      className="cls-4"
                      d="M.35,84.71v-16.83l-.35.4c.18,3.3.16,12.73,0,16.02l.35.4Z"
                    />
                    <rect
                      className="cls-18"
                      x="1.05"
                      y="67.88"
                      width=".75"
                      height="16.84"
                    />
                  </g>
                </g>
              </g>

              {/* 노치/카메라 영역 - 항상 보이도록 mask 적용 안함 */}
              <g>
                <path
                  className="cls-20"
                  d="M122.32,30.05h-33.45c-3.76,0-6.81-3.05-6.81-6.81h0c0-3.76,3.05-6.82,6.81-6.82h33.45c3.76,0,6.81,3.05,6.81,6.82h0c0,3.76-3.05,6.81-6.81,6.81Z"
                />
                <g>
                  <circle className="cls-5" cx="120.43" cy="23.24" r="2.98" />
                  <image
                    width="6"
                    height="6"
                    transform="translate(117.59 20.4)"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAcElEQVQImQXBUQ6CMBBF0TtNeY3tjL/6ZdiCuv8FQFgQJMJ4jr3mOY/jQBJjDNyDbV3MHs9nAtRpIiKQhNSoaq3DiHvQb51SCplJdXcAeh+EO2aFfd8pYziahCRqrVzXSeaFAbw/32yt8TtPALZ1sT9XPRym01Ij0AAAAABJRU5ErkJggg=="
                  />
                  <circle className="cls-2" cx="120.43" cy="23.24" r="1.7" />
                  <g id="Camera">
                    <path
                      className="cls-15"
                      d="M121.92,23.24c0,.82-.67,1.49-1.49,1.49s-1.49-.67-1.49-1.49.66-1.49,1.49-1.49,1.49.66,1.49,1.49Z"
                    />
                    <path
                      className="cls-6"
                      d="M121.92,23.24c0,.82-.67,1.49-1.49,1.49s-1.49-.67-1.49-1.49.66-1.49,1.49-1.49,1.49.66,1.49,1.49Z"
                    />
                  </g>
                  <path
                    className="cls-9"
                    d="M121.78,24.02c0-.29-.24-.53-.53-.53s-.53.24-.53.53.24.53.53.53.53-.24.53-.53Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      {/* 스크린 이미지 - 확장된 위치와 크기로 마스크를 완전히 덮도록 */}
      <div
        className="absolute overflow-hidden"
        style={{
          // iPhone 스크린 정확한 위치 - 마스크보다 약간 크게
          top: "2.0%", // 8.5px / 429.61px
          left: "5.2%", // 11px / 213.04px
          width: "89.8%", // 191px / 213.04px
          height: "96.2%", // 413px / 429.61px
          borderRadius: "5.8%", // iPhone 스크린의 둥근 모서리
          zIndex: 5,
          backgroundColor: "#000", // 배경색을 검은색으로 변경
        }}
      >
        <Image
          src={screenImage}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="280px"
          priority={false}
        />
      </div>
    </div>
  );
};

export default IPhoneMockup;
