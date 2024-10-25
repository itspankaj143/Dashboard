import React from "react";

const Header = () => {
  return (
    <div className="tw-flex tw-justify-between tw-px-5 tw-items-center tw-py-2 tw-border-b-2">
      <div className="tw-flex tw-items-center gap-3">
        <span className="tw-text-[22px] tw-font-medium tw-spacing-[33px]">
          Good Morning!
        </span>
        <p className="tw-font-medium tw-text-[16px] tw-spacing-[24px] tw-text-[#ED1C24]">
          “Have a productive and successful day!”
        </p>
      </div>
      <div>
        <div className="tw-flex  tw-justify-center tw-items-center border tw-rounded-lg tw-w-72 tw-bg-red-300">
          <input
            type="search"
            className=" py-2 rounded-md tw-bg-red-300"
            name=""
            id=""
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 ml-2 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
