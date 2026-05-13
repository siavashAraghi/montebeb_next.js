import React from "react";

export const Section: React.FC<{title:string, children: React.ReactNode }> = ({
  title,children,
}) => {
  return (
    <section className=" relative m-4 p-4 md:mt-16 bg-blue-50/20 overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl lg:text-5xl  font-bold text-slate-600 flex items-center justify-center dark:text-slate-300 my-16">
        <span className="inline-block h-0.5 md:h-1 w-12 md:w-25 bg-slate-400 mx-4"></span>
        {title}
        <span className="inline-block h-0.5 md:h-1 w-12 md:w-25 bg-slate-400 mx-4"></span>
      </h2>
      {children}
    </section>
  );
};
