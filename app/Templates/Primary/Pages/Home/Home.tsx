import PrimarySlide from "@/app/components/slider/components/primary/primary";
import Slider from "@/app/components/slider/Slider";
import { getProducts } from "@/models/products";
import React, { Suspense } from "react";

const Home: React.FC = async () => {
  const PRODUCTS = (await getProducts())?.filter((item) => item.in_marketing);

  return PRODUCTS ? (
    <Suspense fallback={<p>Is loading ...</p>}>
      <Slider>
        {PRODUCTS.map((product) => (
          <PrimarySlide key={product.id} slideDetails={product} />
        ))}
      </Slider>
    </Suspense>
  ) : null;
};

export default Home;
