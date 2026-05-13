import Image from "next/image";
import Link from "next/link";

interface InitialCardProps {
  index: number;
  title: string;
  label: string | number;
  desciption: string;
  image: string;
  link: string;
}

export const InitialCard: React.FC<InitialCardProps> = ({
  index,
  title,
  label,
  desciption,
  image,
  link,
}) => {
  const COLORS = [
    "antiquewhite",
    "beige",
    "lavenderblush",
    "lavender",
    "khaki",
    "cadetblue",
    "darkkhaki",    
    "lightcyan",
  ];
  const COLOR = COLORS[index];
  const RADIUS = ((index + 1) % 2 == 0) ? {borderBottomLeftRadius: "50%",borderTopRightRadius: "50%"} : {borderTopLeftRadius: "50%", borderBottomRightRadius: "50%"};
  return (
    <div className="relative mx-auto">
      <div className="w-full h-full dark:brightness-70">
        <div className="w-full relative flex justify-center">
          <Link
            href={link}
            className= "w-full md:w-68 h-full flex flex-col saturate-100 relative"
          >
            <Image
              width={100}
              height={100}
              style={{backgroundColor:COLOR,...RADIUS}}
              className=" w-full h-full dark:brightness-70"
              src={image}
              alt={title}
            />
            <div className=" rounded-bl-xl rounded-br-xl flex justify-center flex-col">
              <h3 className="relative my-4 text-center font-bold text-xl md:text-sm lg:text-xl text-slate-600 dark:text-slate-300 shadow-[0px_-25px_60px_48px_white] dark:shadow-none">
                {title}
              </h3>
              <div className="bg-yellow-600 h-0.5 flex justify-center items-center my-4">
                <span className=" w-fit text-center bg-slate-950 text-[white] px-2 py-1 rounded-xl  text-sm dark:text-slate-300">
                  {label}
                </span>
              </div>
              <p className="text-center text-gray-500/70 my-4 px-6 py-2 font-bold text-lg dark:text-slate-300">
                {desciption}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
