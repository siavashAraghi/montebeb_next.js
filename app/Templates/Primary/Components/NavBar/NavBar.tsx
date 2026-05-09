import { getHeaderNavList } from "@/models/header_footer";
import { getProducts } from "@/models/products";
import PrimaryNavBar from "./PrimaryNavBar";
import { Suspense } from "react";
import { getGeneral } from "@/models/settings";

const NavBar: React.FC = async () => {
  const NAV_LINKS = await getHeaderNavList();
  const PRODUCTS = await getProducts();
  const GENERAL_DATA = await getGeneral();
    return (
      <nav>
        <Suspense fallback={<p>Loading ...</p>}><PrimaryNavBar products={PRODUCTS} navlinks={NAV_LINKS} generalData={GENERAL_DATA}/></Suspense>
      </nav>
    );
};

export default NavBar;
