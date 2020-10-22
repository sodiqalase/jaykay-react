/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    let paths = document.querySelectorAll(".page_loader path");
    Array.from(paths).map((path) => {
      let a = path.getTotalLength();
      // console.log(path, path.getTotalLength());
      path.style.strokeDasharray = `${a}`;
      path.style.strokeDashoffset = `${a}`;
    });
  }, []);
  return (
    <div className="page_loader">
      <svg
        width="34"
        height="40"
        viewBox="0 0 34 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M34 39.806L20.1609 23.753L33.1026 11.2976H29.7964L16.0475 24.5288V13.5279V11.2976H8.8785V13.5279V34.6352L13.7163 29.9614V32.371C13.7163 35.3334 11.2297 37.7454 8.16662 37.7454H7.88587C4.82277 37.7454 2.33117 35.3455 2.33117 32.3637H0C0 36.5818 3.53686 39.9999 7.88587 39.9999H8.16662C12.5156 39.9999 16.0475 36.577 16.0475 32.371V27.7142L18.4965 25.353L30.962 39.806H34ZM13.7163 26.776L11.2097 29.2026V13.5279H13.7163V26.776Z"
            fill="white"
          ></path>
          <path
            d="M14.3979 10.8883L10.6407 10.8883C10.6407 10.8883 10.7801 8.49965 9.10062 7.15401C9.78435 5.39631 11.7824 2.19638 12.36 1.28856L12.36 6.25906C12.1276 6.32989 11.9617 6.52948 11.955 6.78058C11.955 7.07675 12.2073 7.32141 12.5126 7.32141C12.818 7.32141 13.0703 7.07675 13.0703 6.78058C13.0703 6.53592 12.8977 6.32989 12.6653 6.25906L12.6786 1.28856C13.2561 2.19638 15.2609 5.40275 15.938 7.15401C14.2585 8.49966 14.3979 10.8883 14.3979 10.8883Z"
            fill="white"
          ></path>
          <path
            opacity="0.2"
            d="M15.9379 7.15403C15.2542 5.39633 13.2561 2.1964 12.6786 1.28857L12.6786 6.25908C12.9109 6.32991 13.0835 6.53594 13.0835 6.7806C13.0835 7.07677 12.8313 7.32143 12.5259 7.32143L12.5259 10.8883L14.4112 10.8884C14.3979 10.8884 14.2585 8.49967 15.9379 7.15403Z"
            fill="white"
          ></path>

          <path
            d="M5.02605 7.95278C5.02605 3.94272 8.38878 0.681154 12.5192 0.685033C16.6537 0.685033 20.0164 3.9466 20.0124 7.95278L19.8924 7.95278C19.8924 4.01253 16.5857 0.805257 12.5192 0.801379C8.45676 0.801379 5.15 4.00865 5.14601 7.95278L5.02605 7.95278Z"
            fill="white"
          ></path>
          <path
            d="M19.8581 0.717285H5.19745V0.88263H19.8581V0.717285Z"
            fill="white"
          ></path>
          <path
            d="M13.07 0.202881H11.9617V1.27785H13.07V0.202881Z"
            fill="white"
          ></path>

          <path
            d="M5.63688 7.41235H4.52856V8.48733H5.63688V7.41235Z"
            fill="white"
            class="fillDraw"
          ></path>

          <path
            d="M20.5352 7.4126H19.4269V8.48757H20.5352V7.4126Z"
            fill="white"
            class="fillDraw"
          ></path>

          <path
            d="M19.5926 1.12334C19.809 1.33325 20.1599 1.33325 20.3763 1.12334C20.5927 0.913442 20.5927 0.573121 20.3763 0.363218C20.1599 0.153315 19.809 0.153314 19.5926 0.363218C19.3762 0.573121 19.3762 0.913441 19.5926 1.12334Z"
            fill="white"
            class="fillDraw"
          ></path>

          <path
            d="M4.65022 1.16586C4.53827 1.05727 4.47029 0.906023 4.47029 0.743138C4.47029 2.409613 4.74619 0.142018 5.08606 0.145896C5.42993 0.145896 5.70583 0.413492 5.70183 0.743139C5.70183 1.07666 5.42593 1.34426 5.08606 1.34038C4.91412 1.34426 4.76218 1.27445 4.65022 1.16586ZM5.43393 0.405735C5.34596 0.320415 5.21801 0.26612 5.08206 0.26612C4.81016 0.26612 4.59025 0.479421 4.58625 0.747017C4.58625 1.01073 4.80616 1.22404 5.08206 1.22791C5.35396 1.22791 5.57388 1.01461 5.57787 0.747017C5.58187 0.61128 5.5219 0.491056 5.43393 0.405735Z"
            fill="white"
            class="fillDraw"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0H34V40H0V0Z" fill="white"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
