import React from "react";

function Nav() {
  return (
    <div>
      <div className="flex gap-9 items-center w-full py-3.5 border-[#DFDFE0] border-b-[1.2px]">
        <h1 className="font-bold leading-9 text-2xl pl-12">Logo</h1>
        <div class="w-full relative flex flex-col gap-5">
          <div class="relative  text-gray-500 focus-within:text-gray-900 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.60376 17.4009C13.8012 17.4009 17.2039 13.9982 17.2039 9.80079C17.2039 5.60335 13.8012 2.20065 9.60376 2.20065C5.40633 2.20065 2.00363 5.60335 2.00363 9.80079C2.00363 13.9982 5.40633 17.4009 9.60376 17.4009Z"
                  stroke="#9A9EA6"
                  stroke-width="1.20002"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.0039 18.2009L16.4039 16.6009"
                  stroke="#9A9EA6"
                  stroke-width="1.20002"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              class="block pr-4 pl-14 py-4 text-sm font-normal shadow-xs text-gray-900 bg-[#F0F1F2] rounded-full placeholder-gray-400 focus:outline-none leading-relaxed w-full"
              placeholder="search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <svg
            width="59"
            height="58"
            viewBox="0 0 59 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.616394"
              y="0.400269"
              width="57.601"
              height="57.601"
              rx="28.8005"
              fill="#FFF4F0"
            />
            <path
              d="M38.187 36.7309C38.187 37.0909 38.107 37.4609 37.937 37.8209C37.767 38.1809 37.547 38.5209 37.257 38.8409C36.767 39.3809 36.227 39.7709 35.6169 40.0209C35.0169 40.271 34.3669 40.401 33.6669 40.401C32.6469 40.401 31.5569 40.161 30.4069 39.6709C29.2568 39.1809 28.1068 38.5209 26.9668 37.6909C25.8168 36.8509 24.7268 35.9209 23.6867 34.8909C22.6567 33.8508 21.7267 32.7608 20.8967 31.6208C20.0767 30.4808 19.4167 29.3408 18.9367 28.2107C18.4566 27.0707 18.2166 25.9807 18.2166 24.9407C18.2166 24.2607 18.3366 23.6107 18.5767 23.0107C18.8167 22.4006 19.1967 21.8406 19.7267 21.3406C20.3667 20.7106 21.0667 20.4006 21.8067 20.4006C22.0867 20.4006 22.3667 20.4606 22.6167 20.5806C22.8767 20.7006 23.1067 20.8806 23.2867 21.1406L25.6068 24.4107C25.7868 24.6607 25.9168 24.8907 26.0068 25.1107C26.0968 25.3207 26.1468 25.5307 26.1468 25.7207C26.1468 25.9607 26.0768 26.2007 25.9368 26.4307C25.8068 26.6607 25.6168 26.9007 25.3768 27.1407L24.6168 27.9307C24.5068 28.0407 24.4568 28.1707 24.4568 28.3307C24.4568 28.4107 24.4668 28.4807 24.4868 28.5607C24.5168 28.6407 24.5468 28.7007 24.5668 28.7608C24.7468 29.0908 25.0568 29.5208 25.4968 30.0408C25.9468 30.5608 26.4268 31.0908 26.9468 31.6208C27.4868 32.1508 28.0068 32.6408 28.5368 33.0908C29.0568 33.5308 29.4868 33.8308 29.8268 34.0108C29.8768 34.0308 29.9368 34.0608 30.0069 34.0908C30.0869 34.1208 30.1669 34.1308 30.2569 34.1308C30.4269 34.1308 30.5569 34.0708 30.6669 33.9608L31.4269 33.2108C31.6769 32.9608 31.9169 32.7708 32.1469 32.6508C32.3769 32.5108 32.6069 32.4408 32.8569 32.4408C33.0469 32.4408 33.2469 32.4808 33.4669 32.5708C33.6869 32.6608 33.9169 32.7908 34.1669 32.9608L37.477 35.3109C37.737 35.4909 37.917 35.7009 38.027 35.9509C38.127 36.2009 38.187 36.4509 38.187 36.7309Z"
              stroke="#FF5F2D"
              stroke-width="1.44003"
              stroke-miterlimit="10"
            />
            <path
              d="M34.717 27.4008C34.717 26.8008 34.247 25.8808 33.547 25.1308C32.907 24.4408 32.057 23.9008 31.2169 23.9008"
              stroke="#FF5F2D"
              stroke-width="1.44003"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.2171 27.4007C38.2171 23.5307 35.087 20.4006 31.2169 20.4006"
              stroke="#FF5F2D"
              stroke-width="1.44003"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex flex-col justify-between">
            <p className="font-normal text-xs leading-[18px] text-[#9A9EA6] whitespace-nowrap">
              Have a question?
            </p>
            <p className="font-bold text-base leading-6 text-[#FF5F2D] whitespace-nowrap">
              Contact Support
            </p>
          </div>
        </div>
        <button className="bg-[#FF5F2D] text-white font-bold text-base leading-6 py-5 px-[46px] rounded-full mr-12">
          register/login
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-10 py-7 pl-12">
          <div className="flex gap-3">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3414 6.90201H2.64159C2.28398 6.90201 1.98743 6.60546 1.98743 6.24785C1.98743 5.89024 2.28398 5.59369 2.64159 5.59369H18.3414C18.699 5.59369 18.9956 5.89024 18.9956 6.24785C18.9956 6.60546 18.699 6.90201 18.3414 6.90201Z"
                fill="black"
              />
              <path
                d="M18.3414 11.2631H2.64159C2.28398 11.2631 1.98743 10.9665 1.98743 10.6089C1.98743 10.2513 2.28398 9.95477 2.64159 9.95477H18.3414C18.699 9.95477 18.9956 10.2513 18.9956 10.6089C18.9956 10.9665 18.699 11.2631 18.3414 11.2631Z"
                fill="black"
              />
              <path
                d="M18.3414 15.6242H2.64159C2.28398 15.6242 1.98743 15.3276 1.98743 14.97C1.98743 14.6124 2.28398 14.3159 2.64159 14.3159H18.3414C18.699 14.3159 18.9956 14.6124 18.9956 14.97C18.9956 15.3276 18.699 15.6242 18.3414 15.6242Z"
                fill="black"
              />
            </svg>
            <p className="font-medium text-sm leading-[22px]">All Categories</p>
          </div>
          <p className="font-normal text-base leading-6 text-[#9A9EA6]">Home</p>
          <p className="font-normal text-base leading-6 text-[#9A9EA6]">
            About
          </p>
          <p className="font-normal text-base leading-6 text-[#9A9EA6]">
            Courses
          </p>
          <p className="font-normal text-base leading-6 text-[#9A9EA6]">
            Contact
          </p>
        </div>
        <div className="flex gap-10 py-7 px-12">
          <p className="font-bold text-sm leading-[18pxpx] text-[#4700B9]">
            write a review
          </p>
          <p className="font-inter font-bold text-sm leading-[18px] text-[#4700B9]">
            vendor
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
