const SliderSkeleton: React.FC<{classes?:string,multiNumber?:number ,children?:React.ReactNode}> = ({classes,multiNumber=0,children}) => {
  return (
    <div className="relative w-full h-full">
      <div className={`${classes} animate-pulse w-full h-110 md:h-100 lg:h-140`}>
        <div className={`w-full h-full ${multiNumber > 0 ? "flex justify-between overflow-x-auto whitespace-nowrap" : ""} `}>{children}</div>
      </div>
    </div>
  );
};

export default SliderSkeleton;
