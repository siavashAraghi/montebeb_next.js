import Image from "next/image";
import Link from "next/link";

interface SecondCardProps {
  id: number;
  title: string;
  shortDesciption: string;
  image: string;
}

export const SecondCard: React.FC<SecondCardProps> = ({
  id,
  title,
  shortDesciption,
  image,
}) => {
  return (
    <Link
      title={title}
      className="flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-2 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40 group"
      href={`/Blog/${id}`}
    >
      <div className=" w-full h-72 relative">
        <Image
          className="w-full object-cover rounded-xl"
          src={image}
          alt={title}
          fill
        />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">{title}</h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400">
          {shortDesciption}
        </p>
      </div>
    </Link>
  );
};
