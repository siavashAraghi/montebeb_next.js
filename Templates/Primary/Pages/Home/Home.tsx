import PrimarySlide from "@/components/slider/components/primary/primary";
import { getProducts } from "@/models/products";
import React, { Suspense } from "react";
import { InitialCard } from "../../../../components/Cards/Initial/Initial";
import { Section } from "../../../../components/Generals/Section";
import { getPosts } from "@/models/post";
import { SecondCard } from "../../../../components/Cards/second/second";
import { getCategories } from "@/models/categories";
import { BlueCard } from "../../../../components/Cards/BlueCard/blueCard";
import Slider from "@/components/slider/Slider";
import PrimarySlideSkeleton from "@/components/slider/components/primary/PrimarySlideSkeleton";
import SliderSkeleton from "@/components/slider/SliderSkeleton";
import LoadingDots from "@/ui/skeletons/loadingDots";
import type { PageComponentType } from "@/types/GlobalsTypes";

const Home: React.FC<PageComponentType> = async () => {
  const CATS = await getCategories();
  const PRODUCTS = await getProducts();
  const IN_MARKETING_PRODUCTS = PRODUCTS?.filter((item) => item.in_marketing);
  const POSTS = (await getPosts()).filter((post) => post.published);


  return (
    <>
      {IN_MARKETING_PRODUCTS ? (
        <Suspense fallback={<PrimarySlideSkeleton/>}>
          <Slider>
            {IN_MARKETING_PRODUCTS.map((product) => (
              <PrimarySlide key={product.id} slideDetails={product} />
            ))}
          </Slider>
        </Suspense>
      ) : null}

      {/* ============ New products section =========== */}
      <Section title="New Collections">
        <div className="p-1 flex flex-wrap items-center justify-center">
          <Suspense fallback={<SliderSkeleton><LoadingDots/></SliderSkeleton>}>
            <Slider
              autoPlay={false}
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
              {IN_MARKETING_PRODUCTS?.map((product, index) => (
                <InitialCard
                  key={product.id}
                  index={index}
                  title={product.title}
                  desciption={product.short_description}
                  image={product.main_img_url}
                  link={`/product/${product.category_id}/${product.id}`}
                  label={"$" + product.price}
                />
              ))}
            </Slider>
          </Suspense>
        </div>
      </Section>

      {/* =========== Need to know (posts section) =========== */}
      <Section title="Need to Know">
        <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <SecondCard
                key={post.id}
                id={post.id}
                title={post.title}
                shortDesciption={post.short_description}
                image={post.image_url}
              ></SecondCard>
            ))}
          </div>
        </div>
      </Section>

      {/* =========== Our products (displaying products by category) =========== */}
      <Section title="Our products">
        <div className="p-1 flex flex-wrap items-center justify-center">
          {CATS.map((cat) => (
            <BlueCard
              key={cat.id}
              label={cat.name}
              title={cat.title}
              link={cat.url_address}
              image={cat.image_url}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
