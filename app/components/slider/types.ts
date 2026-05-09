import React from "react";

type ResponsiveItems = {slidesPerView:number};

export interface DefaultSliderTypes {
    breakpoints? : {640:ResponsiveItems,768:ResponsiveItems,900:ResponsiveItems,1024:ResponsiveItems},
    spaceBetween?: number,
    isNavigation?:boolean,
    isPagination?:boolean,
    autoplayTimeout?:number,
    isLoop?:boolean,
    children?: Array<React.ReactElement>
}
