import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlueCardProps {
  title: string;
  label: string | number;
  image: string;
  link: string;
}

/**
 * Returns card
 * @author Siavash Araghi
 */
export const BlueCard: React.FC<BlueCardProps> = ({
  title,
  label,
  image,
  link,
}) => {
  return (
    <div className="shrink-0 m-6 relative overflow-hidden bg-slate-300 dark:bg-slate-500  rounded-lg max-w-lg shadow-lg">
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: "0.1" }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-20 px-15 md:px-20 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: "0.2",
          }}
        ></div>
        <Image
          width={100}
          height={100}
          className="relative w-60"
          src={image}
          alt={title}
        />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <div className="flex justify-between">
          <span className="block font-semibold text-xl dark:text-slate-300">
            {label}
          </span>
          <Link title={title} href={link} className="dark:text-slate-300 duration-300 dark:bg-slate-800 ease-in-out transition-all  hover:text-[white] hover:bg-slate-700 bg-white rounded-full text-slate-400 text-lg font-bold px-6 py-2 leading-none flex items-center">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};
