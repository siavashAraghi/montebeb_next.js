import { getHeaderNavList } from "@/models/header_footer";
import { getProducts } from "@/models/products";
import PrimaryNavBar from "./PrimaryNavBar";
import { getGeneral } from "@/models/general";

const NavBar: React.FC = async () => {
  const NAV_LINKS = await getHeaderNavList();
  const PRODUCTS = await getProducts();
  const GENERAL_DATA = await getGeneral();
    return (
      <nav>
        <PrimaryNavBar products={PRODUCTS} navlinks={NAV_LINKS} generalData={GENERAL_DATA}/>
      </nav>
    );
};

export default NavBar;
