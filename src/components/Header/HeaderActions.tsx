import { Search ,Heart, ShoppingBag, Globe } from "lucide-react";

const iconProps = {
    size: 18,
    strokeWidth:1.5,
};
const iconClass =`
  cursor-pointer
  transition-all
  duration-300
  hover:scale-110
  hover:text-neutral-400
`;

function HeaderActions(){
    return(
       <div className="  flex items-center gap-5">
        <Search {...iconProps} className={iconClass}/>
        <Heart {...iconProps} className={iconClass}/>
        <ShoppingBag {...iconProps} className={iconClass} />
        <Globe {...iconProps} className={iconClass} />


       </div>
    )
}
export default HeaderActions