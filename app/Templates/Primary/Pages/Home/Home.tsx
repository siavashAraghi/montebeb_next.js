import PrimarySlide from "@/app/components/slider/components/primary/primary";
import { getProducts } from "@/models/products";
import React from "react";
import { InitialCard } from "../../Components/Cards/ProductCards/Initial/Initial";
import dynamic from "next/dynamic";

const Home: React.FC = async () => {
  
  const PRODUCTS = (await getProducts())?.filter((item) => item.in_marketing);

  const Slider = dynamic(() => import("@/app/components/slider/Slider"), {
    loading: () => <p>...loading</p>,
  });

  return (
    <>
      {PRODUCTS ? (
        <Slider>
          {PRODUCTS.map((product) => (
            <PrimarySlide key={product.id} slideDetails={product} />
          ))}
        </Slider>
      ) : null}

      <section className=" relative m-4 p-4 md:mt-18 bg-blue-50/20 overflow-hidden shadow-2xl">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl  font-bold text-slate-600 flex items-center justify-center dark:text-slate-300 my-16">
          <span className="inline-block h-0.5 md:h-1 w-12 md:w-25 bg-slate-400 mx-4"></span>
          New Collections
          <span className="inline-block h-0.5 md:h-1 w-12 md:w-25 bg-slate-400 mx-4"></span>
        </h2>

        <div className="p-1 flex flex-wrap items-center justify-center">
          <Slider
            autoPlay={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            isNavigation={false}
            isPagination={false}
            autoplayTimeout={4000}
          >
            {PRODUCTS?.map((product,index) => (
              <InitialCard
                key={product.id}
                index={index}
                title={product.title}
                desciption={product.short_description}
                image={product.main_img_url}
                link={`/product/${product.category_id}/${product.id}`}
                label={product.price}
              />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
