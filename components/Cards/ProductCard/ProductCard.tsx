"use client"

import Slider from "@/components/slider/Slider";
import { ImagesTypes, Product } from "@/types/GlobalsTypes";
import React, {useState } from "react";
import ColorButton, { ColorButtonType } from "../../Buttons/ColorButton";
import SlideImage from "@/components/slider/SlideImage";

/**
 * Generates card to display product in product page.
 * @author Siavash Araghi
 */
export default function ProductCard({product,productImages}:{product:Product,productImages:Array<ImagesTypes>}):React.ReactNode {
    const [color,setColor] = useState( product.colors ? product.colors[0].name : '' );

    function changeImageColor(e:React.MouseEvent<HTMLButtonElement>) {
        setColor(e.currentTarget.dataset.color as string)
    }

    return (
    <div className="bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* <!-- Product Images --> */}
          <div
            className="w-full md:w-1/2 px-4 mb-8 relative"
            id="product-images-container"
          >
            {
              <div className="relative overflow-hidden rounded-xl ">
                  <Slider>
                    {productImages?.filter(image => image.color_name == color).map((image) => (
                      <div key={image.image_url} className="overflow-hidden">
                        <SlideImage
                          width={800}
                          height={800}
                          key={image.image_url}
                          title={`${image.color_name} ${image.product_name}`}
                          alt={product.name}
                          src={image.image_url}
                          classes="object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
              </div>
            }
          </div>

          {/* <!-- Product Details --> */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-xl md:text-3xl font-bold mb-2 dark:text-gray-400">
              {product.title}
            </h2>
            <div className="mb-4 mt-16">
              <span className="text-2xl font-bold mr-2 dark:text-gray-400">
                ${product.price}
              </span>
            </div>
            <p className="text-gray-700 mb-6 dark:text-gray-400">
              {product.description}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-400">
                Color:
              </h3>
              <div className="flex space-x-2" id="product-color-lists">
                {product.colors
                  ? product.colors.map((color) => {
                      return (
                        <ColorButton key={color.name} color={color.name as ColorButtonType["color"]} clickHandler={changeImageColor} />
                      );
                    })
                  : null}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-400">
                Key Features:
              </h3>
              <ul className="list-inside text-gray-700 list-none dark:text-gray-400">
                {product.description.split(",").map((item) => (
                  <li key={product.id + item} className="mb-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
