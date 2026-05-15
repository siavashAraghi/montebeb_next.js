import React from "react";

const PrimarySlideSkeleton: React.FC = () => {
  return (
    <div className="relative animate-pulse">
      <div className=" w-full h-110 md:h-100 lg:h-140 bg-gray-200">
        <div className="w-full h-full bg-gray-200">
          <div className="flex justify-center items-center text-white w-full h-full relative bg-gray-200">
            <div className="border-2 border-slate-400 w-[50%] h-[50%] bg-gray-200 absolute bottom-12 left-20 rounded-lg p-2 lg:bottom-25 md:w-50 lg:w-120 flex flex-col justify-center dark:bg-black/50">
              <p className="mt-4 h-4 w-[75%] bg-gray-400 mb-4 justify-self-center self-center rounded"></p>
              <p className="mt-4 h-4 w-[75%] bg-gray-400 self-center rounded"></p>
              <a
                className="bg-gray-400 text-[white] w-[50%] h-8 lg:w-45 p-1 md:p-2 mt-8 md:mt-6 md:mb-2 lg:mt-12 lg:mb-6 rounded-4xl transition duration-300 ease-in-out hover:bg-slate-900 flex justify-center items-center "
                href={`#`}
              >
                <span className="bg-gray-600 inline-block w-[50%] h-[25%]"></span>
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center items-center absolute bottom-4">
            <span className="size-2 rounded-full bg-gray-400 mx-2"></span>
            <span className="size-2 rounded-full bg-gray-400 mx-2"></span>
            <span className="size-2 rounded-full bg-gray-400 mx-2"></span>
            <span className="size-2 rounded-full bg-gray-400 mx-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySlideSkeleton;
