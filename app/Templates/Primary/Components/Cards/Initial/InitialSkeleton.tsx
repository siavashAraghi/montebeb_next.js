import React from "react";

const InitialSkeleton: React.FC = () => {
  return (
    <div className="relative mx-auto w-[33.33%] animate-pulse px-12 ">
      <div className="w-full h-full dark:brightness-70">
        <div className="w-full relative flex-col justify-center">
          <div className="h-64 w-full bg-gray-400">
            <div
              className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl flex items-center justify-center  bg-gray-200 dark:bg-gray-700 animate-pulse w-20 h-20`}
            >
              <svg
                className="w-12 h-12 text-gray-400 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H5a1 1 0 100 2h8a1 1 0 100-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" rounded-bl-xl rounded-br-xl flex justify-center flex-col shadow-2xl bg-gray-300">
            <h3 className="relative my-4 shadow-[0px_-25px_40px_28px_white] dark:shadow-none"></h3>
            <div className="bg-yellow-600 h-0.5 flex justify-center items-center my-4">
              <span className=" w-fit bg-slate-950 px-2 py-1 rounded-xl"></span>
            </div>
            <p className="my-4 px-6 py-2 font-bold"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialSkeleton;
