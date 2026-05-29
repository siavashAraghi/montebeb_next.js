import SlideImage from "@/components/slider/SlideImage";
import { Product } from "@/types/GlobalsTypes";
import Link from "next/link";
import React from "react";

/**
 * Generates card to display product in products page
 * @author Siavash Araghi
 */
export default function ProductsCardComponent
({
  product,
}: {
  product: Product;
}): React.ReactNode {
  const CATEGORY = product.categories[0];
  return (
    <div key={product.id} className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-400 dark:brightness-70">
          <SlideImage
            width={200}
            height={200}
            src={product.main_img_url}
            classes="size-full object-cover rounded-2xl dark:brightness-70"
            alt={product.title}
          />
        </div>

        <div className="pt-4">
          <h3 className="font-medium md:text-lg text-black dark:text-white">
            {product.title}
          </h3>

          <p className="mt-2 font-semibold text-black dark:text-white">
            ${product.price}
          </p>
        </div>

        <Link
          className="after:absolute after:inset-0 after:z-1"
          href={`${CATEGORY.url_address}/${product.id}`}
          title={product.title}
        ></Link>
      </div>
      <div className="mb-2 mt-4 text-sm">
        {/* <!-- List --> */}
        <div className="flex flex-col">
          {/* <!-- Item --> */}
          <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-medium text-black dark:text-white">
                  Feature:
                </span>
              </div>

              <div className="text-end">
                <span className="text-black dark:text-white">
                  {product.short_description}
                </span>
              </div>
            </div>
          </div>
          {/* <!-- End Item --> */}

          {/* <!-- Item --> */}
          <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-medium text-black dark:text-white">
                  Origin:
                </span>
              </div>

              <div className="flex justify-end">
                <span className="text-black dark:text-white">
                  {product.origin}
                </span>
              </div>
            </div>
          </div>
          {/* <!-- End Item --> */}
        </div>
        {/* <!-- End List --> */}
      </div>

      <div className="mt-auto">
        <Link
          className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
          title={product.title}
          href={`${CATEGORY.url_address}/${product.id}`}
        >
          More Details
        </Link>
      </div>
    </div>
  );
}
