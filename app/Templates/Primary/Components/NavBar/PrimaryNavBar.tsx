"use client";

import { GeneralDataTypes, NavLinks, Product } from "@/types/GlobalsTypes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const PrimaryNavBar: React.FC<{
  products: Array<Product & { category_id: number }> | null;
  navlinks: Array<NavLinks> | null;
  generalData:GeneralDataTypes | null
}> = ({ products, navlinks,generalData }) => {
  const [clickedOnBurger, setClickedOnBurger] = useState(false);
  const [ActiveSubMenuNum, setActiveSubMenuNum] = useState(-1);

  return (
    <>
      {/* hamburger menu on mobile devices */}
      <div className="flex justify-between items-center border-b border-gray-200 shadow-md md:hidden bg-white dark:bg-slate-800">
        <Link title="Montebebe Baby Products Manufacturer " href="/">
          <h1 className="text-transparent h-0">
            {generalData?.title}
          </h1>
          <Image
            className="w-40 object-contain ml-5 dark:invert"
            src={generalData?.logo_url ?? ""}
            alt={generalData?.title ?? ""}
            width={100}
            height={100}
          />
        </Link>
        <button
          onClick={() => setClickedOnBurger(true)}
          className="bg-[url(/icon/hamburger.png)] mr-5 bg-cover w-20 h-20"
        ></button>
      </div>
      <div
        className={` overflow-y-scroll md:overflow-visible fixed flex flex-col justify-between ${clickedOnBurger ? "right-0" : "-right-full"} bg-white top-0 w-full h-full  transition-all  duration-200 z-100 dark:bg-slate-800 md:justify-start md:right-0 md:relative ease-[cubic-bezier(0.1, 0, 1, 1)] `}
      >
        <div className=" hidden md:flex bg-[#dff0f570] dark:bg-slate-800 justify-between items-center ">
          <Link title="Montebebe Home Page" href="/">
            <h1 className="text-transparent h-0">
              {generalData?.title}
            </h1>
            <Image
              className="md:w-50 object-contain md:ml-20 dark:invert"
              src={generalData?.logo_url ?? ""}
              width={100}
              height={100}
              alt={generalData?.title ?? ""}
            />
          </Link>
          <div className="lg:mr-30">
            {navlinks
              ?.filter((item) => ["About Us", "Contact"].includes(item.name))
              .map((item) => {
                return (
                  <Link
                    key={item.id + item.name}
                    title={item.title}
                    href={item.url_address}
                    className="md:px-4 md:py-2 md:mx-6 md:hover:bg-[#7499a5] text-lg text-gray-500 md:hover:text-white md:duration-400 transition rounded-4xl"
                  >
                    {item.title}
                  </Link>
                );
              })}
          </div>
        </div>

        <button
          onClick={() => setClickedOnBurger(false)}
          className="bg-[url(/icon/cross.png)] bg-cover bg-center w-8 h-8 absolute top-4 right-4 md:hidden "
        />
        <ul className=" md:flex md:relative md:gap-0 md:mt-0 lg:gap-14 justify-center mt-10 bg-white dark:bg-slate-800  gap-12">
          <li className="h-16 flex justify-center items-center text-slate-800 border-b pl-4 border-gray-200 md:border-0 md:hidden">
            <Link title="Montebebe Home Page" href="/">
              <h1 className="text-transparent h-0">
                {generalData?.desciption}
              </h1>
              <Image
                className="w-50 md:hidden object-contain mb-8 dark:invert"
                src={generalData?.logo_url ?? ""}
                width={100}
                height={100}
                alt={generalData?.title ?? ""}
              />
            </Link>
          </li>
          {navlinks?.map((item) => {
            const NESTED_LIST = products
              ? products.filter((product) => product.category_id == item.id && item.source_type == "category"): null;

              const IS_PARENT_LINNK = NESTED_LIST && NESTED_LIST.length > 0
            let className = IS_PARENT_LINNK ? "flex-col " : "flex";
            className += ["About Us", "Contact"].includes(item.name)
              ? " md:hidden "
              : "";
            className +=
              " items-center text-slate-600 text-lg  font-medium border-b border-gray-200 md:border-0 md:text-2xl group";
            return (
              <li key={item.id + item.name} className={className}>
                {IS_PARENT_LINNK ? (
                  <>
                    <span
                      title={item.title}
                      className="pl-4 py-4 flex justify-between items-center"
                      onClick={() => setActiveSubMenuNum(prev => prev > -1 && prev == item.id ? -1 : item.id)}
                    >
                      <span className="inline-block md:hover:bg-[#7499a5] md:hover:text-white md:duration-400 transition md:px-4 md:py-2 text-center rounded-4xl md:cursor-pointer  dark:text-slate-300">
                        {item.name}
                      </span>
                      <span className={`inline-block duration-200 ease-in-out transition-all w-[min(3.5vw,1.5vh)] h-[min(3.5vw,1.5vh)] border-[3px] border-gray-100 border-t-0 border-l-0 ${ ActiveSubMenuNum==item.id ? 'rotate-226': 'rotate-45'} mr-[8%]  md:hidden`}></span>
                    </span>
                    {/* Nested Links */}
                    <ul className={`gap-12 justify-between overflow-hidden transition-all  duration-200 ease-in-out  md:flex md:absolute md:left-0 md:right-0 md:justify-center md:duration-250 md:delay-150 md:top-full md:z-0 bg-white z-100 dark:bg-slate-800 ${ActiveSubMenuNum == item.id ? "max-h-250" : 'max-h-0 md:max-h-250'} md:h-0 md:group-hover:h-120 group-hover:z-2 md:group-hover:shadow-md`}>
                      {NESTED_LIST?.map((product, index) => {
                          if (product.category_id == item.id) {
                            return (
                              <Fragment
                                key={product.category_id + product.name}
                              >
                                <li
                                  key={product.category_id + product.name}
                                  className={`flex justify-between items-center text-slate-600 text-lg font-medium md:bg-transparent md:text-2xl md:flex md:flex-col md:justify-center md:items-center md:gap-0 ${index == 0 ? "border-b md:border-0" : products?.length && index < products?.length - 1 ? "border-b md:border-0" : ""}   border-blue-200 bg-slate-600`}
                                >
                                  <Link
                                    title={product.title}
                                    className="pl-8 py-3 flex justify-between w-full items-center md:flex-col-reverse  md:justify-evenly md:h-full"
                                    href={item.url_address + "/" + product.name}
                                  >
                                    <span className="md:hover:bg-[#7499a5] md:hover:text-white md:duration-400 transition md:px-4 md:py-2 text-center rounded-4xl md:cursor-pointer  dark:text-slate-300">
                                      {product.title}
                                    </span>
                                    {product.main_img_url ? (
                                      <Image
                                        src={product.main_img_url.trim()}
                                        alt={product.title}
                                        className="w-16 mr-12 bg-[#77828c1c] dark:bg-stone-200 rounded-full overflow-visible md:mr-0 md:w-50"
                                        width={100}
                                        height={100}
                                      />
                                    ) : (
                                      ""
                                    )}
                                  </Link>
                                </li>
                                {products && index < products?.length - 1 ? (
                                  <li className="h-[75%] bg-gray-100 w-0.5 dark:bg-[#dff0f570]"></li>
                                ) : (
                                  ""
                                )}
                              </Fragment>
                            );
                          }
                        })}
                    </ul>
                  </>
                ) : (
                  <Link
                    title={item.title}
                    className="rounded-4xl md:py-2 md:hover:bg-[#7499a5] md:hover:text-white md:duration-400 transition dark:text-slate-300 px-4 py-4 text-center rounded-4x"
                    href={item.url_address}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PrimaryNavBar;
